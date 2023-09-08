import * as THREE from 'three';

// import Stats from 'three/addons/libs/stats.module.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

let group;
let container, stats;
const particlesData = [];
let camera, scene, renderer, composer;
let positions;
let particleColors, lineColors;
let particles;
let particleVectors;
let particleMotionEnabled = true;
let pointCloud;
let particlePositions;
let linesMesh;

let highlightIndex = -1;

const maxParticleCount = 500;
let particleCount = 160;
const r = 800;
const rHalf = r / 2;
const particlesDelay = 0.125;
const particleSpeedDivisor = 1500.0;
const sphereRotationSpeed = 1;

const effectController = {
    showDots: true,
    showLines: true,
    minDistance: 105,
    minDistanceSqr: 0,
    limitConnections: false,
    maxConnections: 20,
    particleCount: 160,
    pauseMovement: false,
};

// Update immediately
effectController.minDistanceSqr = effectController.minDistance * effectController.minDistance;

function initGUI() {

    const gui = new GUI();

    gui.add( effectController, 'showDots' ).onChange( function ( value ) {

        pointCloud.visible = value;

    } );
    gui.add( effectController, 'showLines' ).onChange( function ( value ) {

        linesMesh.visible = value;

    } );
    gui.add( effectController, 'minDistance', 10, 300 ).onChange(function(value)
    {
        effectController.minDistanceSqr = value * value;
    });
    gui.add( effectController, 'limitConnections' );
    gui.add( effectController, 'maxConnections', 0, 30, 1 );
    gui.add( effectController, 'particleCount', 0, maxParticleCount, 1 ).onChange( function ( value ) {

        particleCount = value;
        particles.setDrawRange( 0, particleCount );

    } );

    gui.add(effectController, 'pauseMovement').onChange( function ( value ) {

        particleMotionEnabled = !value;

    });

}

function init(el) {

    // initGUI();

    container = el;//document.getElementById( 'container' );

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 4000 );
    camera.position.z = 1250;

    // const controls = new OrbitControls( camera, container );
    // controls.minDistance = 1000;
    // controls.maxDistance = 3000;

    scene = new THREE.Scene();

    group = new THREE.Group();
    scene.add( group );

    // const helper = new THREE.BoxHelper( new THREE.Mesh( new THREE.BoxGeometry( r, r, r ) ) );
    // helper.material.color.setHex( 0x474747 );
    // helper.material.blending = THREE.AdditiveBlending;
    // helper.material.transparent = true;
    // group.add( helper );

    const segments = maxParticleCount * maxParticleCount;
    particleColors = new Float32Array( maxParticleCount * 3 );

    positions = new Float32Array( segments * 3 );
    lineColors = new Float32Array( segments * 3 );

    // nice rounded particles
    const circleTexture = new THREE.TextureLoader().load('img/circle.png' ); 

    const pMaterial = new THREE.PointsMaterial( {
        vertexColors: true,
        map: circleTexture,
        size: 20,
        blending: THREE.AdditiveBlending,
        transparent: true,
        sizeAttenuation: true,
        depthTest: false
    } );

    particles = new THREE.BufferGeometry();
    particlePositions = new Float32Array( maxParticleCount * 3 );

    particleVectors = []; 

    let theta = 0, phi = 0;
    const vectors = [];
    for (let i = 0; i < maxParticleCount; i++) {
        theta += 2 * Math.PI * Math.random();
        phi += Math.acos(2 * Math.random() - 1);
        const x = rHalf * Math.cos(theta) * Math.sin(phi);
        const y = rHalf * Math.sin(theta) * Math.sin(phi);
        const z = rHalf * Math.cos(phi);

        const particleVector = new THREE.Vector3(x, y, z);
        particleVector.delay = Date.now() + (particlesDelay * i);
        particleVector.rotationAxis = new THREE.Vector3(0, Math.random() * 2 - 1, Math.random() * 2 - 1);
        particleVector.rotationAxis.normalize();
        particleVector.rotationSpeed = 1 + Math.random();
        particleVectors.push(particleVector);
    
        particlePositions[i * 3] = x;
        particlePositions[i * 3 + 1] = y;
        particlePositions[i * 3 + 2] = z;

        particleColors[i * 3] = 1;
        particleColors[i * 3 + 1] = 1;
        particleColors[i * 3 + 2] = 1;

        particlesData.push( {
            // velocity: new THREE.Vector3( - 1 + Math.random() * 2, - 1 + Math.random() * 2, - 1 + Math.random() * 2 ),
            numConnections: 0
        } );
    }


    particles.setDrawRange( 0, particleCount );
    particles.setAttribute( 'position', new THREE.BufferAttribute( particlePositions, 3 ).setUsage( THREE.DynamicDrawUsage ) );
    particles.setAttribute( 'color', new THREE.BufferAttribute( particleColors, 3 ).setUsage( THREE.DynamicDrawUsage ) );

    // create the particle system
    pointCloud = new THREE.Points( particles, pMaterial );
    group.add( pointCloud );

    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ).setUsage( THREE.DynamicDrawUsage ) );
    geometry.setAttribute( 'color', new THREE.BufferAttribute( lineColors, 3 ).setUsage( THREE.DynamicDrawUsage ) );

    geometry.computeBoundingSphere();

    geometry.setDrawRange( 0, 0 );

    const material = new THREE.LineBasicMaterial( {
        vertexColors: true,
        linewidth: 1,
        blending: THREE.AdditiveBlending,
        transparent: true
    } );

    linesMesh = new THREE.LineSegments( geometry, material );
    group.add( linesMesh );

    //

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );

    container.appendChild( renderer.domElement );


    const renderScene = new RenderPass(scene, camera);

    const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.6,
        0.3,
        0.02
    );

    composer = new EffectComposer( renderer );
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // const effectHBlur = new THREE.ShaderPass(THREE.HorizontalBlurShader);
    // const effectVBlur = new THREE.ShaderPass(THREE.VerticalBlurShader);
    // effectHBlur.uniforms['h'].value = 1 / window.innerWidth;
    // effectVBlur.uniforms['v'].value = 1 / window.innerHeight;

    // composer.addPass(effectHBlur);
    // composer.addPass(effectVBlur);

    // renderer.toneMapping = THREE.ACESFilmicToneMapping;
    // renderer.toneMappingExposure = 1;


    // Top left FPS counter

    // stats = new Stats();
    // container.appendChild( stats.dom );

    window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
    composer.setSize( window.innerWidth, window.innerHeight )
}

function animate() {

    let vertexpos = 0;
    let colorpos = 0;
    let numConnected = 0;

    let centerPosition = new THREE.Vector3(0, 0, 0);
    let centerCameraDistance = centerPosition.distanceTo(camera.position);

    for ( let i = 0; i < particleCount; i ++ )
        particlesData[ i ].numConnections = 0;

    for ( let i = 0; i < particleCount; i ++ ) {

        // get the particle
        const particleConnectionData = particlesData[ i ];
        const particleVector = particleVectors[ i ];

        if (particleMotionEnabled)
        {
            particleVector.applyAxisAngle(particleVector.rotationAxis, particleVector.rotationSpeed / particleSpeedDivisor);

            particlePositions[i * 3] = particleVector.x;
            particlePositions[i * 3 + 1] = particleVector.y;
            particlePositions[i * 3 + 2] = particleVector.z;
        }

        // Now we want to tint particles on the back side a different colour
        let localParticlePosition = new THREE.Vector3(particlePositions[i * 3], particlePositions[i * 3 + 1], particlePositions[i * 3 + 2]);
        let worldParticlePosition = pointCloud.localToWorld( localParticlePosition );

        var cameraToParticleDistance = worldParticlePosition.distanceTo( camera.position );

        var deltaDistance = cameraToParticleDistance - centerCameraDistance;

        let distanceAlpha = THREE.MathUtils.inverseLerp(rHalf, -rHalf, deltaDistance);
        distanceAlpha = THREE.MathUtils.clamp(distanceAlpha, 0.1, 1.0);

        particleColors[i * 3] = distanceAlpha;
        particleColors[i * 3 + 1] = 0.1;//THREE.MathUtils.clamp(distanceAlpha, .0, 1.);
        particleColors[i * 3 + 2] = 0.1;

        // if we need to highlight a node
        if (highlightIndex >= 0 && highlightIndex == i)
        {
            particleColors[i * 3] = 0.1;
            particleColors[i * 3 + 1] = 1;
            particleColors[i * 3 + 2] = 1;
        }

        if ( effectController.limitConnections && particleConnectionData.numConnections >= effectController.maxConnections )
            continue;

        // Check collision
        for ( let j = i + 1; j < particleCount; j ++ ) {

            const particleDataB = particlesData[ j ];
            if ( effectController.limitConnections && particleDataB.numConnections >= effectController.maxConnections )
                continue;

            const dx = particlePositions[ i * 3 ] - particlePositions[ j * 3 ];
            const dy = particlePositions[ i * 3 + 1 ] - particlePositions[ j * 3 + 1 ];
            const dz = particlePositions[ i * 3 + 2 ] - particlePositions[ j * 3 + 2 ];
            const distSqr = dx * dx + dy * dy + dz * dz;

            if ( distSqr < effectController.minDistanceSqr ) {

                particleConnectionData.numConnections ++;
                particleDataB.numConnections ++;

                let dist = Math.sqrt( distSqr ); // delay computing the sqrRoot until we need it for alpha linearity
                const alpha = 1.0 - dist / effectController.minDistance;

                positions[ vertexpos ++ ] = particlePositions[ i * 3 ];
                positions[ vertexpos ++ ] = particlePositions[ i * 3 + 1 ];
                positions[ vertexpos ++ ] = particlePositions[ i * 3 + 2 ];

                positions[ vertexpos ++ ] = particlePositions[ j * 3 ];
                positions[ vertexpos ++ ] = particlePositions[ j * 3 + 1 ];
                positions[ vertexpos ++ ] = particlePositions[ j * 3 + 2 ];

                lineColors[ colorpos ++ ] = alpha * distanceAlpha;
                lineColors[ colorpos ++ ] = alpha * distanceAlpha;
                lineColors[ colorpos ++ ] = alpha * distanceAlpha;

                lineColors[ colorpos ++ ] = alpha * distanceAlpha;
                lineColors[ colorpos ++ ] = alpha * distanceAlpha;
                lineColors[ colorpos ++ ] = alpha * distanceAlpha;

                numConnected ++;

            }

        }

    }

    linesMesh.geometry.setDrawRange( 0, numConnected * 2 );
    linesMesh.geometry.attributes.position.needsUpdate = true;
    linesMesh.geometry.attributes.color.needsUpdate = true;

    pointCloud.geometry.attributes.position.needsUpdate = true;
    pointCloud.geometry.attributes.color.needsUpdate = true;

    requestAnimationFrame( animate );
    
    // stats.update();
    render();
}

function render() {
    const time = Date.now() * 0.001 * sphereRotationSpeed;

    group.rotation.y = time * 0.1;
    group.rotation.y = group.rotation.y % 360.0;
    composer.render();
}

function setHighlightIndex(number) {
    highlightIndex = number;
}

export const globeViz = {
    createScene(el) {
        console.log("Creating ThreeJS viz scene");
        init(el);
        animate();    
    },
    updateHighlightIndex(number) {
        setHighlightIndex(number);
    },
    getParticleCount() {
        return particleCount;
    }
};

