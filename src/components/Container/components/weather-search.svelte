<script>
	export let onSearch, visibleButtonSearch, dataSearch;
	import { getWeatherFrom } from '../../../services/weather';
	import { getForecastFrom } from '../../../services/forecast';
	export let forecast;
	export let weather;

	const handleSubmit = async (e) => {
		// getting the action url
		/*  console.log(e.target[0].value); */
		weather = await getWeatherFrom(e.target[0].value.toString());
		forecast= await getForecastFrom(e.target[0].value.toString());
		/*    weather = await response.json() */
		console.log(weather);
		console.log(forecast);
		/*      console.log(weather); */
		/*    getWeatherFrom("Madrid") */
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<div class="flex w-full h-2">
		<div class="relative flex w-full flex-wrap items-stretch">
			<input
				type="search"
				class="relative m-0 -mr-0.5 block w-[150px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-nonerounded-2xl items-center justify-between self-stretch bg-white bg-opacity-40 shadow-2xl active:scale-105"
				placeholder="Buscar"
				aria-label="Buscar"
				aria-describedby="button-addon1"
				bind:value={dataSearch}
			/>

			<!--Search button-->
			<button
				class="relative z-[2] flex items-center rounded-r bg-stone-400 px-6 py-2.5 text-xs font-bold uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg hover:scale-110"
				type="submit"
				id="button-addon1"
				data-te-ripple-init
				data-te-ripple-color="light"
				on:click={() => {
					onSearch = !onSearch;
					visibleButtonSearch = !visibleButtonSearch;
					handleSubmit;
				}}
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" class="h-5 w-5">
					<path
						fill-rule="evenodd"
						d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		</div>
	</div>
</form>
