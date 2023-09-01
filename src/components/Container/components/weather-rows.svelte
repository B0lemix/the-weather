<script>
	import WeatherRow from './weather-row.svelte';
	export let humidity, rain, wind;
</script>

<section class="flex flex-col self-stretch px-6 gap-2">
	<WeatherRow icon={'/icons/lluvia.svg'} type={'Lluvia'} typeValue={rain} unit={'mm'} />
	<WeatherRow icon={'/icons/viento.svg'} type={'Viento'} typeValue={wind} unit={'%'} />
	<WeatherRow icon={'/icons/humedad.svg'} type={'Humedad'} typeValue={humidity} unit={'%'} />
</section>
