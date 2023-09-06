<script>
    export let activityURL = '';
    export let profileAvatarURL = '';
    export let profileName = '';
    export let activityText = '';
</script>

<a href="{activityURL}" class="flex flex-col items-start bg-white rounded-lg md:flex-row hover:bg-gray-100 p-4">
    <img class="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-20 md:rounded-full" src="{profileAvatarURL}" alt="{profileAvatarURL}" />
    <div class="flex flex-col content-start px-4 leading-normal border md:border-none">
        <h5 class="mb-2 text-lg font-inter font-medium tracking-tight text-gray-900">{profileName}</h5>
        
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {@html activityText}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {profileName}
        </p>
    </div>
</a>
