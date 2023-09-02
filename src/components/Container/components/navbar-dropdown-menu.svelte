<script>
    let isDropdownOpen = false // default state (dropdown close)
  
    const handleDropdownClick = () => {
      isDropdownOpen = !isDropdownOpen // togle state on click
    }
  
    const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
      // use "focusout" event to ensure that we can close the dropdown when clicking outside or when we leave the dropdown with the "Tab" button
      if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return // check if the new focus target doesn't present in the dropdown tree (exclude ul\li padding area because relatedTarget, in this case, will be null) 
      isDropdownOpen = false
    }
  </script>

<div class="flex justify-between items-center">
	<div class=" flex flex-col items-end relative" on:focusout={handleDropdownFocusLoss}>
		<button class=" m-1" on:click={handleDropdownClick} >
		{#if isDropdownOpen}
			<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="inline-block h-6 w-6 stroke-current">
								<title>Close Dropdown</title>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12" />
							</svg>
			{:else}
			<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="inline-block h-6 w-6 stroke-current">
								<title>Open Dropdown</title>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16" />
							</svg>
			{/if}
		</button>
		<ul class=" p-2 shadow-xl rounded-xl w-24 absolute mt-10    text-gray-700 " style:visibility={isDropdownOpen ? 'visible' : 'hidden'}>
			<li><button class="rounded-t w-full bg-gray-200 hover:bg-gray-400 hover:font-semibold py-2 px-4 block whitespace-no-wrap">Inicio</button></li>
			<li><button class=" rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 hover:font-semibold block whitespace-no-wrap">Acerca de</button></li>
		</ul>
	</div>
<!-- 	<p class="text-slate-300">
		isDropdownOpen: {isDropdownOpen}
	</p> -->
</div>