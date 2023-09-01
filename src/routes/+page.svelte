<script>
	import WeatherContainer from '../components/Container/weather-container.svelte';
	import { getWeatherFrom } from '../services/weather.js';
	import { getForecastFrom } from '../services/forecast.js';

	export let weatherPromise = getWeatherFrom();
	export let forecastPromise = getForecastFrom();
</script>

{#await weatherPromise then weather}
{#await forecastPromise  then forecast }
<main
class=" w-full min-h-screen m-auto bg-gradient-to-tl from-yellow-300 via-red-300 to-neutral-100 flex flex-row items-center"
>
<WeatherContainer weather={weather} weatherPromise={weatherPromise} forecastPromise={forecastPromise} forecast={forecast} />
</main>
{/await}
	
{/await}

<style lang="postcss">
</style>
