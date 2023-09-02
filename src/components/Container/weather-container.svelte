<script>
	import { fade } from 'svelte/transition';
	import NextDaysView from './components/next-days-view.svelte';
	import PrimaryView from './components/primary-view.svelte';
	const views = [PrimaryView, NextDaysView];

	let viewportComponent = null;

	export let weather;
	export let forecast;
	export let selectedOption;
	export let visible3days = 0;

	export let toggleView = () => {
		visible3days = visible3days == 0 ? 1 : 0;
		console.log(visible3days);
	};

	function updateViewportComponent() {
		viewportComponent = views[visible3days];
	}
	updateViewportComponent();

	$: {
	}
</script>

<!-- 
    <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl">
        <div class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
        <div class="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
        <div class="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div class="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div class="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        <div class="rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
           <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="dark:hidden w-[272px] h-[572px]" alt="">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt=""> 
        </div>
    </div>
    
 -->

<div
	class="h-screen w-[400px]  md:h-[700px] relative m-auto  md:mx-auto border-gray-800 dark:border-gray-800 bg-transparent border-[14px] rounded-xl  shadow-xl"
>
	<div
		class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"
	/>
	<div class="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg" />
	<div class="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" />
	<div class="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" />
	<div class="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" />
	<div
		class="rounded-xl overflow-hidden w-[370px] h-[670px] bg-opacity-30 bg-white flex flex-col items-center gap-1 flex-shrink-0"
	>
		<!-- 	<button on:click={toggleView}>Toggle view</button> -->
		{#if viewportComponent == views[visible3days]}
			<div
				class="w-full h-full"
				id="viewport"
				on:outroend={updateViewportComponent}
				transition:fade
			>
				<svelte:component
					this={viewportComponent}
					{weather}
					{forecast}
					{selectedOption}
					{toggleView}
				/>
			</div>
		{/if}
		<!-- <PrimaryView {weather} {forecast} {selectedOption}/> -->
		<!--  <NextDaysView/> -->
	</div>
</div>
