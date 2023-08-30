<script>
	import WeatherContainer from '../components/Container/weather-container.svelte';
	import { getWeatherFrom } from '../services/weather.js';

	export let weatherPromise = getWeatherFrom();
</script>

{#await weatherPromise then weather}
	<main
		class=" w-full min-h-screen m-auto bg-gradient-to-tl from-yellow-300 via-red-300 to-neutral-100 flex flex-row items-center"
	>
		<WeatherContainer {weather} {weatherPromise} />
	</main>
{/await}

<style lang="postcss">
</style>
