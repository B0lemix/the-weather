<script>
	import CurrentWeather from './current-weather.svelte';

	import WeatherSelectorDays from './weather-selector-days.svelte';
	import WeatherNavbar from './weather-navbar.svelte';
	import WeatherRows from './weather-rows.svelte';
	import WeatherCarouselContainer from './weather-carousel-container.svelte';
	import WeatherCityName from './weather-city-name.svelte';

	export let weather;
	export let forecast;
	export let selectedOption;
	export let visible3days;
	export let toggleView;
</script>

<WeatherNavbar bind:weather bind:forecast />
<WeatherCityName name={weather.name} country={weather.country} date={weather.localtime} />
<CurrentWeather
	temperature={weather.temperature}
	text={weather.conditionText}
	icon={weather.conditionIcon}
	code={weather.conditionCode}
	sunrise={forecast[0].astro.sunrise}
	sunset={forecast[0].astro.sunset}
/>
<WeatherRows humidity={weather.humidity} rain={weather.rain} wind={weather.windSpeed} />
<WeatherSelectorDays bind:selectedOption bind:visible3days {toggleView} />
<WeatherCarouselContainer forecastDays={forecast} {selectedOption} />
