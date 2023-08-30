<script>
	import WeatherSearch from './weather-search.svelte';
	export let weather;

	export let onSearch = false;
	export let visibleButtonSearch = true;
	import { fade } from 'svelte/transition';

	console.log(onSearch, 'hey');
</script>

<nav class=" w-full flex flex-row mt-1 p-4 justify-between items-center self-stretch">
	{#if visibleButtonSearch}
		<button
			on:click={() => {
				onSearch = !onSearch;
				visibleButtonSearch = !visibleButtonSearch;
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="h-5 w-5"
			>
				<path
					fill-rule="evenodd"
					d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
					clip-rule="evenodd"
				/>
			</svg></button
		>
	{/if}

	{#if onSearch && !visibleButtonSearch}
		<div transition:fade>
			<WeatherSearch bind:visibleButtonSearch bind:onSearch bind:weather />
		</div>
	{/if}

	<button>Menu</button>
</nav>
