<script>
    import { page } from '$app/stores';
</script>

<svelte:head>
<title>recoil.org - {$page.status}</title>
</svelte:head>

<section class="viz-container">
    <div class="viz-background" />
    <div class="flex h-screen">
        <div class="recoil-huge">{$page.status}</div>
    </div>
</section>

