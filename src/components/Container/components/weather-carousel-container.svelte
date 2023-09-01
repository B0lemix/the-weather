<script>
	import WeatherCarousel from './weather-carousel.svelte';
	import WeatherTempCard from './weather-temp-card.svelte';
	export let forecastDays;
	export let selected = 0;
	export let selectedOption;

	// Asegúrate de que el componente WeatherCarouselContainer tenga acceso a selectedOption
	$: {
		console.log(selectedOption); // Esto debería mostrar el valor actual de selectedOption

		switch (selectedOption) {
			case 'Today':
				selected = 0;
				break;
			case 'Tomorrow':
				selected = 1;
				break;
			default:
				selected = 0;
				break;
		}

		console.log(selected);
		console.log(forecastDays[selected]);
	}
</script>

<WeatherCarousel autoplay="500000">
	{#each forecastDays[selected].hour as forecastHour, index (index)}
		<div>
			<WeatherTempCard {forecastHour} />
		</div>
	{/each}
	<span slot="left-control">Left</span>
	<span slot="right-control">Right</span>
</WeatherCarousel>

<style>
	div {
		height: 8rem;
		width: 8rem;
	}

	span {
		display: inline-block;
		margin-top: 6rem;
	}
</style>
