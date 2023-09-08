<script>
    import Activity from '$lib/components/Activity.svelte';

    const delay = ms => new Promise(res => setTimeout(res, ms));

    let localMastodonPostsURL = 'https://amok.recoil.org/api/v1/timelines/public?local=true&limit=3';
    const getRecentLocalPosts = async () => {
        await delay(5000);
        var response = await fetch(localMastodonPostsURL);
        var result = await response.json();

        return result;
    }

    let localPostsPromise = getRecentLocalPosts();
</script>

{#await localPostsPromise}
    <p class="p-4">Loading...</p>
{:then localPosts}
    {#each localPosts as post}
        <Activity
            activityURL={post.url}
            profileName={post.account.display_name}
            profileAvatarURL={post.account.avatar}
            activityText={post.content} />
    {/each}
{:catch err}
    <p class="p-4">Error block {err}</p>
{/await}
