<!-- 

    active

    <div class="w-8 h-14 px-1 py-2 bg-white bg-opacity-70 rounded-[20px] shadow flex-col justify-center items-center inline-flex">
  <div class="text-center text-zinc-700 text-[7px] font-normal">now</div>
  <div class="w-6 h-6 relative">
    <div class="w-3.5 h-3.5 left-[2px] top-[3px] absolute bg-yellow-400 bg-opacity-20 rounded-full shadow shadow-inner"></div>
  </div>
  <div class="text-center text-zinc-700 text-[7px] font-bold">19 °</div>
</div>



no active
<div class="w-8 h-14 px-1 py-2 bg-white bg-opacity-30 rounded-[20px] flex-col justify-center items-center inline-flex">
  <div class="text-center text-zinc-400 text-[7px] font-normal">13:00</div>
  <div class="w-6 h-6 relative">
    <div class="w-3.5 h-3.5 left-[5px] top-[5px] absolute bg-yellow-400 bg-opacity-20 rounded-full shadow shadow-inner"></div>
  </div>
  <div class="text-center text-zinc-700 text-[7px] font-bold">21 °</div>
</div>
 -->

<script>
	export let forecastHour;
	function obtenerHora(fechaHora) {
		// Dividir la cadena en espacios
		const partes = fechaHora.split(' ');

		// Tomar la segunda parte (la hora)
		const hora = partes[1];

		return hora;
	}
</script>

<div class="relative flex justify-center">
	<div
		class=" w-16 h-[110px] px-1 py-6 bg-white bg-opacity-30 rounded-full flex-col justify-center items-center inline-flex"
	>
		<div class="text-center text-zinc-400 text-sm font-bold">{obtenerHora(forecastHour.time)}</div>

		<img class="w-12 h-12" src={forecastHour.condition.icon} alt="" />

		<div class="text-center text-zinc-700 text-md font-extrabold">{forecastHour.feelslike_c} °</div>
	</div>
</div>
