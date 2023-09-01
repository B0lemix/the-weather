<script>
	import FlipCard from './FlipCard.svelte';
	import WeatherIcon from './weather-icon.svelte';
	export let temperature, text, icon, code, sunrise, sunset;

	console.log(code, 'code');
</script>

<section class="flex flex-row items-center justify-start self-stretch mx-8">
	<WeatherIcon {icon} />

	<FlipCard {temperature} {text} {code} {sunrise} {sunset} />
</section>

