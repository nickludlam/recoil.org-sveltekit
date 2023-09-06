<script>
    export let serviceName = '';
    export let serviceLink = '';
    export let serviceLinkName = '';
</script>
  
<li class="p-4 hover:bg-gray-100 hover:text-red-700 rounded-lg border-none">
    <a href="{serviceLink}">
        <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
                <slot name="icon" />
            </div>
            <div class="flex-1 min-w-0">
                <p class="text-lg font-inter font-medium truncate">
                 {serviceName}
                </p>
                <p class="text-md font-inter font-light text-gray-500 truncate">
                 {serviceLinkName}
                </p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-500">
                &#10132;
            </div>
        </div>
    </a>
</li>
