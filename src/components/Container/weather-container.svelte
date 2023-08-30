<script>
	import CurrentWeather from './components/current-weather.svelte';
	import Separate from './components/separate.svelte';
	import WeatherCityName from './components/weather-city-name.svelte';
	import WeatherSelectorDays from './components/weather-selector-days.svelte';
	import WeatherNavbar from './components/weather-navbar.svelte';
	import WeatherRows from './components/weather-rows.svelte';
	import WeatherTempDays from './components/weather-temp-days.svelte';

	export let weather;

	console.log(weather);
	export let weatherPromise;
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
	class="relative mx-auto border-gray-800 dark:border-gray-800 bg-transparent border-[14px] rounded-xl h-[700px] w-[400px] shadow-xl"
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
		<WeatherNavbar bind:weather />
		<WeatherCityName name={weather.name} country={weather.country} date={weather.localtime} />
		<CurrentWeather
			temperature={weather.temperature}
			text={weather.conditionText}
			icon={weather.conditionIcon}
			code={weather.conditionCode}
		/>
		<WeatherRows humidity={weather.humidity} rain={weather.rain} wind={weather.windSpeed} />
		<WeatherSelectorDays />
		<Separate />
		<WeatherTempDays />
	</div>
</div>
