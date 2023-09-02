<script>
	import Separate from './separate.svelte';
	export let selectedOption = 'Today';

	export let toggleView;
</script>

<section class="flex flex-row mt-1 px-4 justify-center self-stretch items-center">
	<div>
		<div class="flex flex-row justify-between gap-6 self-stretch items-center">
			<button
				class={` text-[#313341] font-bold leading-normal cursor-pointer ${
					selectedOption === 'Today' ? 'opacity-90' : ' opacity-30'
				} `}
				on:click={() => (selectedOption = 'Today')}>Hoy</button
			>
			<button
				class={` text-[#313341] font-bold leading-normal cursor-pointer ${
					selectedOption === 'Tomorrow' ? 'opacity-90' : ' opacity-30'
				} `}
				on:click={() => (selectedOption = 'Tomorrow')}>Mañana</button
			>
			<button
				class={` text-[#313341] font-bold leading-normal cursor-pointer ${
					selectedOption === 'Next 7 Days' ? 'opacity-90' : ' opacity-30'
				} `}
				on:click={() => toggleView()
				}>3 dias</button
			>
		</div>
	</div>
</section>
<Separate {selectedOption} />

<style>
</style>
