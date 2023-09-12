<script>
    export let activityURL = '';
    export let profileAvatarURL = '';
    export let profileName = '';
    export let activityText = '';
</script>

<a href="{activityURL}" class="flex items-start bg-white rounded-lg flex-row hover:bg-gray-100 p-4">
    <img class="h-auto w-20 rounded-full" src="{profileAvatarURL}" alt="{profileName}" />
    <div class="flex flex-col content-start px-4 leading-normal border-none">
        <h5 class="mb-2 text-lg font-inter font-medium tracking-tight text-gray-900">{profileName}</h5>
        
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {@html activityText}
        </p>
    </div>
</a>
