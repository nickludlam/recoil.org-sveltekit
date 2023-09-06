<script>
	import { onMount } from 'svelte';
	import { globeViz } from '../lib/scene.js';
	import { createTextScramble } from '../lib/scramble.js';

    // data
    import mastodonPeers from '../lib/recoil_peers.json';

    // Components
    import Service from '$lib/components/Service.svelte';
    import RecentActivityBlock from '$lib/components/RecentActivityBlock.svelte';

	let threedEl;
    let scrambleEl;
    let scrambleAnilName;
    let scrambleRecoilTitleR;
    let scrambleRecoilTitleE;
    let scrambleRecoilTitleC;
    let scrambleRecoilTitleO;
    let scrambleRecoilTitleI;
    let scrambleRecoilTitleL;

    let randomPeerName;
    let randomPeerNameContainer;

    // This is a rough and ready fade-in fade-out change animation
    let countdown = 0;
    function animateDisplayedPeer() {
        countdown--;

        if (countdown == 1) {
            if (randomPeerNameContainer != null) {
                randomPeerNameContainer.classList.remove("recoil-huge-peer-highlight-in");
                randomPeerNameContainer.classList.add("recoil-huge-peer-highlight-out");
            }
        }
        else if (countdown <= 0) {
            pickNewPeer();
            randomPeerNameContainer.innerHTML = randomPeerName;
            if (randomPeerNameContainer != null) {
                randomPeerNameContainer.classList.add("recoil-huge-peer-highlight-in");
                randomPeerNameContainer.classList.remove("recoil-huge-peer-highlight-out");
            }
            countdown = 5;
        }
    }

    function pickNewPeer() {
        var randomPeerIndex = Math.floor(Math.random()*mastodonPeers.length);
        randomPeerName = mastodonPeers[randomPeerIndex];

        randomPeerIndex = randomPeerIndex % globeViz.getParticleCount(); // We don't have enough particles for all of the data
        globeViz.updateHighlightIndex(randomPeerIndex);
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
            createTextScramble(scrambleEl, phrases, 2000, 'text-red-600');
            createTextScramble(scrambleAnilName, ['Anil Madhavapeddy'], 2000, 'text-red-600');

            createTextScramble(scrambleRecoilTitleR, ['R'], 30000, 'text-red-600');
            createTextScramble(scrambleRecoilTitleE, ['E'], 32000, 'text-red-600');
            createTextScramble(scrambleRecoilTitleC, ['C'], 30000, 'text-red-600');
            createTextScramble(scrambleRecoilTitleO, ['O'], 32000, 'text-red-600');
            createTextScramble(scrambleRecoilTitleI, ['I'], 30000, 'text-red-600');
            createTextScramble(scrambleRecoilTitleL, ['L'], 32000, 'text-red-600');

            var interval = setInterval(animateDisplayedPeer, 2000);
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
        <div class="recoil-huge-subtitle text-4xl font-inter font-black text-white" bind:this={scrambleEl} />
    </div>
</section>

<!-- <section class="mx-auto max-w-1xl xl:max-w-2xl p-4 sm:p-6 xl:px-0">
    <div class="flex h-screen flex-col justify-between">
        <main class="mb-auto">
            <div class="divide-y divide-gray-200">
                <div class="space-y-2 pb-8 pt-6 md:space-y-5">
                    <h1 class="text-3xl font-inter font-thin leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Latest</h1>
                    <h1 class="text-3xl font-inter font-light leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Latest</h1>
                    <h1 class="text-3xl font-inter leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Latest</h1>
                    <h1 class="text-3xl font-inter font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Latest</h1>
                    <h1 class="text-3xl font-inter font-black leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Latest</h1>
                    <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">A small piece of the internet we call home</p>
                </div>
            </div>
        </main>
    </div>
</section> -->

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
            From humble beginnings, custom building PC tower cases to "borrow" hosting from friends who
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
                    <img class="w-20" src="/img/services/mastodon-black-round-icon.png" alt="Mastodon Logo" />
                </svelte:fragment>
            </Service>
            <Service serviceName="Pixelfed" serviceLink="https://recoil.org/" serviceLinkName="coming soon">
                <svelte:fragment slot="icon">
                    <img class="w-20" src="/img/services/pixelfed-black-round-icon.png" alt="Pixelfed Logo" />
                </svelte:fragment>
            </Service>
            <Service serviceName="Peertube" serviceLink="https://crank.recoil.org/" serviceLinkName="crank.recoil.org">
                <svelte:fragment slot="icon">
                    <img class="w-20" src="/img/services/peertube-black-round-icon.png"  alt="Peertube Logo" />
                </svelte:fragment>
            </Service>
            <Service serviceName="Matrix" serviceLink="https://amok.recoil.org/" serviceLinkName="[REDACTED]">
                <svelte:fragment slot="icon">
                    <img class="w-20" src="/img/services/matrix-black-round-icon.png" alt="Matrix Logo" />
                </svelte:fragment>
            </Service>
            <Service serviceName="Web Hosting" serviceLink="https://recoil.org/sites" serviceLinkName="recoil.org/sites">
                <svelte:fragment slot="icon">
                    <img class="w-20" src="/img/services/web-black-round-icon.png"  alt="Web Logo" />
                </svelte:fragment>
            </Service>
            <Service serviceName="Email Hosting" serviceLink="https://recoil.org/" serviceLinkName="@recoil.org">
                <svelte:fragment slot="icon">
                    <img class="w-20" src="/img/services/email-black-round-icon.png" alt="Email Logo" />
                </svelte:fragment>
            </Service>                
        </ul>
    </div>

    <div class="w-full">
        <div class="flex items-center justify-between">
            <h3 class="px-4 py-6 text-2xl font-inter font-light leading-none text-gray-900">Admin</h3>
        </div>

        <a href="/" class="flex flex-col items-start  bg-white rounded-lg md:flex-row hover:bg-gray-100 p-4">
            <img class="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-20 md:rounded-full" src="img/avsm-12.jpg" alt="Anil Madhavapeddy" />
            <div class="flex flex-col content-start p-4 leading-normal border md:border-none">
                <h5 class="mb-2 text-lg font-inter font-medium tracking-tight text-gray-900" bind:this={scrambleAnilName}>Anil Madhavapeddy</h5>
                
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Anil can be found at <a href="https://anil.recoil.org/">anil.recoil.org</a> and posts updated to <a href="https://amok.recoil.org/@avsm">@avsm</a> on the recoil Mastodon instance.
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </a>

        <a href="/" class="flex flex-col items-start  bg-white rounded-lg md:flex-row hover:bg-gray-100 p-4">
            <img class="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-20 md:rounded-full" src="img/nick-14.jpg" alt="Nick Ludlam" />
            <div class="flex flex-col content-start p-4 leading-normal border md:border-none">
                <h5 class="mb-2 text-lg font-inter font-medium tracking-tight text-gray-900">Nick Ludlam</h5>
                
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Nick can be found at <a href="https://nick.recoil.org/">nick.recoil.org</a> and posts updated to <a href="https://amok.recoil.org/@nick">@nick</a> on the recoil Mastodon instance.
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </a>
    </div>

    <div class="w-full">
        <div class="flex items-center justify-between">
            <h3 class="px-4 py-6 text-2xl font-inter font-light leading-none text-gray-900">Recent Activity</h3>
        </div>
        <RecentActivityBlock />
    </div>


</section>

  
