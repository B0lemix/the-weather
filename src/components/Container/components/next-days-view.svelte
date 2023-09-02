<script>
	import { getDayText } from '../../../services/code';
	import { dateToDay } from '../../../services/dateToDay';
	export let toggleView;
	export let forecast;
	console.log(forecast);
</script>

<!-- <button on:click={toggleView}>Volver a Inicio </button> -->
<main class="h-full w-full flex flex-col self-stretch gap-6">
	<section class="flex flex-row justify-center py-12 self-stretch items-center">
		<svg
			on:click={toggleView}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 14 11"
			fill="none"
		>
			<path
				d="M1.99634 5.6049L5.88543 1.71581M5.88543 10.2011L1.99634 6.31201M1.63543 6.0114L12.3873 6.0114"
				stroke="black"
				stroke-width="1.6"
				stroke-linecap="round"
			/>
		</svg>
		<h4 class="text-xl font-semibold px-16">Proximos 3 dias</h4>
	</section>

	<section
		class="  text-xs flex flex-col w-3/4 mx-auto px-3 h-56 bg-white bg-opacity-60 rounded-lg shadow-2xl border border-white border-opacity-80 justify-center items-center hover:scale-110 transition-all duration-300"
	>
		<div class="w-full flex flex-row justify-between items-center gap-14">
			<h4 class="font-bold text-sm tracking-wide">Mañana</h4>
			<div class=" flex flex-row items-center">
				<p class="tracking-widest text-base font-semibold">{forecast[0].day.avgtemp_c}°C</p>
				<div class="flex flex-col items-center">
					<img class="w-14 h-14" src={forecast[0].day.condition.icon} alt="" />
					<h5 class="leading-3 text-center">{getDayText(forecast[0].day.condition.code)}</h5>
				</div>
			</div>
		</div>

		<div class=" flex flex-row items-center">
			<div class="w-1/2 flex flex-col items-center justify-center opacity-90 font-medium">
				<img class="h-20 w-20" src="/icons/lluvia.svg" alt="" />
				<p class="">{forecast[0].day.daily_chance_of_rain} %</p>
			</div>

			<div class="w-1/2 flex flex-col items-center justify-center opacity-90 font-medium">
				<img class="h-20 w-20" src="/icons/viento.svg" alt="" />
				<p>{forecast[0].day.maxwind_kph} km/h</p>
			</div>

			<div class="w-1/2 flex flex-col items-center justify-center opacity-90 font-medium">
				<img class="h-20 w-20" src="/icons/humedad.svg" alt="" />
				<p>{forecast[0].day.avghumidity} %</p>
			</div>
		</div>
	</section>

	<section class="flex flex-col items-center mt-12 gap-8">
		<div
			class=" flex flex-row w-3/4 mx-auto px-4 h-20 py-2 bg-white bg-opacity-30 rounded-lg border border-white border-opacity-80 justify-between items-center gap-8 hover:scale-110 transition-all duration-300 shadow-xl"
		>
			<h4 class="font-bold text-sm tracking-wide">{dateToDay(forecast[1].date)}</h4>
			<div class="flex flex-row justify-end items-center gap-4">
				<p class="tracking-widest font-semibold">{forecast[1].day.avgtemp_c}°C</p>
				<img class="w-14 h-14" src={forecast[1].day.condition.icon} alt="" />
			</div>
		</div>

		<div
			class=" flex flex-row w-3/4 mx-auto px-4 h-20 py-2 bg-white bg-opacity-30 rounded-lg border border-white border-opacity-80 justify-between items-center gap-8 hover:scale-110 transition-all duration-300 shadow-xl"
		>
			<h4 class="font-bold text-sm tracking-wide">{dateToDay(forecast[2].date)}</h4>
			<div class="flex flex-row justify-end items-center gap-4">
				<p class="tracking-widest font-semibold">{forecast[2].day.avgtemp_c}°C</p>
				<img class="w-14 h-14" src={forecast[2].day.condition.icon} alt="" />
			</div>
		</div>
	</section>
</main>

<style>
</style>
