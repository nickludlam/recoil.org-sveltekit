<script>
	import { onMount } from 'svelte';
	import { globeViz } from '../lib/scene.js';
	import { createTextScramble } from '../lib/scramble.js';

    // data
    // import mastodonPeers from '../lib/recoil_peers.json';
    let mastodonPeersURL = "https://amok.recoil.org/api/v1/instance/peers";
    let mastodonPeers;

    // Components
    import Service from '$lib/components/Service.svelte';
    import RecentActivityBlock from '$lib/components/RecentActivityBlock.svelte';

	let threedEl;
    // let scrambleEl;
    let scrambleAnilName;
    let scrambleRecoilTitleR;
    let scrambleRecoilTitleE;
    let scrambleRecoilTitleC;
    let scrambleRecoilTitleO;
    let scrambleRecoilTitleI;
    let scrambleRecoilTitleL;

    const getMastodonPeers = async () => {
        var response = await fetch(mastodonPeersURL);
        var result = await response.json();

        return result;
    }

    // Used for state tracking of the threejs viz
    let randomPeerName = "";
    let randomGlobeParticleIndex = -1;
    let randomPeerNameContainer;

    // This is a rough and ready fade-in fade-out change animation
    let countdown = 0;
    function animateDisplayedPeer() {
        countdown--;

        if (countdown == 1) {
            globeViz.updateHighlightIndex(-1); // No highlight
            if (randomPeerNameContainer) {
                randomPeerNameContainer.classList.remove("recoil-huge-peer-highlight-in");
                randomPeerNameContainer.classList.add("recoil-huge-peer-highlight-out");
            }
        }
        else if (countdown <= 0) {
            updateRandomPeerVars();
            globeViz.updateHighlightIndex(randomGlobeParticleIndex);
            randomPeerNameContainer.innerHTML = randomPeerName;
            if (randomPeerNameContainer) {
                randomPeerNameContainer.classList.add("recoil-huge-peer-highlight-in");
                randomPeerNameContainer.classList.remove("recoil-huge-peer-highlight-out");
            }

            // 5 * 2000 ms delay between each peer being displayed
            countdown = 5;
        }
    }

    function updateRandomPeerVars() {
        var rndMastodonPeerIndex = Math.floor(Math.random()*mastodonPeers.length);
        randomPeerName = mastodonPeers[rndMastodonPeerIndex];
        randomGlobeParticleIndex = rndMastodonPeerIndex % globeViz.getParticleCount(); // We don't have enough particles for all of the data
    }

    async function getPeersAndStartAnimation()
    {
        console.log("Getting mastodon peers...");
        await getMastodonPeers().then((response) => {
            mastodonPeers = response;
            console.log("... got " + mastodonPeers.length + " peers");
            var interval = setInterval(animateDisplayedPeer, 2000);
        }).catch((error) => {
            // Your error is here!
            console.log("AIEEE " + error);
        });

    }

    let sceneCreated = false;
    let scrambleCreated = false;

	onMount(() => {
        if (!sceneCreated)
        {
            console.log("Main page calling globeViz.createScene()");
            globeViz.createScene(threedEl);
            sceneCreated = true;
        }

        if (!scrambleCreated)
        {
            let phrases = ['Mastodon', 'Peertube', 'Postfix', 'Web Hosting', 'Pixelfed', 'Matrix']
            // createTextScramble(scrambleEl, phrases, 2000, 'text-red-600');
            createTextScramble(scrambleAnilName, ['Anil Madhavapeddy'], 10000, 'text-red-600');

            createTextScramble(scrambleRecoilTitleR, ['R'], 30000, 'text-red-600');
            createTextScramble(scrambleRecoilTitleE, ['E'], 32000, 'text-red-600');
            createTextScramble(scrambleRecoilTitleC, ['C'], 30000, 'text-red-600');
            createTextScramble(scrambleRecoilTitleO, ['O'], 32000, 'text-red-600');
            createTextScramble(scrambleRecoilTitleI, ['I'], 30000, 'text-red-600');
            createTextScramble(scrambleRecoilTitleL, ['L'], 32000, 'text-red-600');

            getPeersAndStartAnimation();

            scrambleCreated = true;
        }
	});
</script>

<svelte:head>
<title>recoil.org</title>
</svelte:head>

<section class="viz-container">
    <div class="viz-background" bind:this={threedEl} />
    <div class=" flex h-screen">
        <div class="recoil-huge recoil-huge-r" bind:this={scrambleRecoilTitleR}>R</div>
        <div class="recoil-huge recoil-huge-e" bind:this={scrambleRecoilTitleE}>E</div>
        <div class="recoil-huge recoil-huge-c" bind:this={scrambleRecoilTitleC}>C</div>
        <div class="recoil-huge recoil-huge-o" bind:this={scrambleRecoilTitleO}>O</div>
        <div class="recoil-huge recoil-huge-i" bind:this={scrambleRecoilTitleI}>I</div>
        <div class="recoil-huge recoil-huge-l" bind:this={scrambleRecoilTitleL}>L</div>
        <div style="outline: none" class="recoil-huge-peer-highlight recoil-huge-peer-highlight-out" bind:this={randomPeerNameContainer}>someserver.dev</div>
        <!-- <div class="recoil-huge-subtitle text-4xl font-inter font-black text-white" bind:this={scrambleEl} /> -->
    </div>
</section>

<section class="mx-auto max-w-1xl xl:max-w-2xl p-4 sm:p-6 xl:px-0">

    <div class="w-full pb-6">
        <div class="flex items-center justify-between">
            <h3 class="px-4 py-6 text-2xl font-inter font-light leading-none text-gray-900">About</h3>
        </div>
        <p class="mx-4 py-4 font-inter">
            <span class="font-inter font-medium">recoil.org</span> is a project run by Anil Madhavapeddy and Nick Ludlam since 1998 and is our digital
            home for us and our friends and family.
        </p>

        <p class="mx-4 py-4 font-inter">
            From humble beginnings with hand built PC tower cases and stashing them in the corner of an ISP our friend worked at, iends who
            worked at ISPs, to the more modern solution of virtualisation, it's provided an important
            environment for learning and experimentation as well as ownership.
        </p>
    </div>

    <div class="w-full pb-6">
        <div class="flex items-center justify-between">
            <h3 class="px-4 py-6 text-2xl font-inter font-light leading-none text-gray-900">Services</h3>
        </div>

        <ul role="list" class="divide-y divide-gray-200">
            <Service serviceName="Mastodon" serviceLink="https://amok.recoil.org/" serviceLinkName="amok.recoil.org">
                <svelte:fragment slot="icon">
                    <img class="w-20" src="img/services/mastodon-black-round-icon.png" alt="Mastodon Logo" />
                </svelte:fragment>
            </Service>
            <Service serviceName="Pixelfed" serviceLink="https://recoil.org/" serviceLinkName="[COMING SOON]">
                <svelte:fragment slot="icon">
                    <img class="w-20" src="img/services/pixelfed-black-round-icon.png" alt="Pixelfed Logo" />
                </svelte:fragment>
            </Service>
            <Service serviceName="Peertube" serviceLink="https://crank.recoil.org/" serviceLinkName="crank.recoil.org">
                <svelte:fragment slot="icon">
                    <img class="w-20" src="img/services/peertube-black-round-icon.png"  alt="Peertube Logo" />
                </svelte:fragment>
            </Service>
            <Service serviceName="Matrix" serviceLink="https://recoil.org/" serviceLinkName="[REDACTED]">
                <svelte:fragment slot="icon">
                    <img class="w-20" src="img/services/matrix-black-round-icon.png" alt="Matrix Logo" />
                </svelte:fragment>
            </Service>
            <Service serviceName="Email Hosting" serviceLink="https://recoil.org/" serviceLinkName="@recoil.org">
                <svelte:fragment slot="icon">
                    <img class="w-20" src="img/services/email-black-round-icon.png" alt="Email Logo" />
                </svelte:fragment>
            </Service>                
        </ul>
    </div>

        <div class="w-full pb-6">
        <div class="flex items-center justify-between">
            <h3 class="px-4 py-6 text-2xl font-inter font-light leading-none text-gray-900">Recent Mastodon posts</h3>
        </div>
        <RecentActivityBlock />
    </div>

    <div class="w-full pb-6">
        <div class="flex items-center justify-between">
            <h3 class="px-4 py-6 text-2xl font-inter font-light leading-none text-gray-900">Admin</h3>
        </div>

        <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-1/2 m-2 bg-white border border-gray-200 rounded-lg shadow">
                <a href="https://anil.recoil.org/">
                    <img class="object-cover w-full rounded-t-lg h-64 md:h-auto" src="img/avsm-12.jpg" alt="Anil Madhavapeddy" />
                </a>
                <div class="p-2">
                    <a href="https://anil.recoil.org/">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900" bind:this={scrambleAnilName}>Anil Madhavapeddy</h5>
                    </a>
                    
                    <p class="mb-3 font-normal text-gray-700">
                        Anil can be found at <a href="https://anil.recoil.org/">anil.recoil.org</a> and posts updated to <a class="text-red-800" href="https://amok.recoil.org/@avsm">@avsm</a> on the recoil Mastodon instance.
                    </p>
                </div>
            </div>
            <div class="w-full md:w-1/2 m-2 bg-white border border-gray-200 rounded-lg shadow">
                <a href="https://nick.recoil.org/">
                    <img class="object-cover w-full rounded-t-lg h-64 md:h-auto" src="img/nick-14.jpg" alt="" />
                </a>
                <div class="p-2">
                    <a href="https://nick.recoil.org/">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Nick Ludlam</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700">
                        Nick can be found at <a href="https://nick.recoil.org/">nick.recoil.org</a> and posts updated to <a href="https://amok.recoil.org/@nick">@nick</a> on the recoil Mastodon instance.
                    </p>
                </div>
            </div>
        </div>
    </div>


</section>

  
