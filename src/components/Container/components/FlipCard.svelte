<script>
	import { getDayText } from '../../../services/code';
	export let temperature, text, code, sunrise, sunset;

	let flipped = true;

	function flip(node, { delay = 0, duration = 1500 }) {
		return {
			delay,
			duration,
			css: (t, u) => `
				transform: rotateY(${1 - u * 180}deg);
				opacity: ${1 - u};
			`
		};
	}

	function convertirAMPMa24Horas(horaAMPM) {
		// Divide la hora en partes: horas, minutos y AM/PM
		const partesHora = horaAMPM.split(' ');

		// Divide la parte de las horas en horas y minutos
		const [hora, minutos] = partesHora[0].split(':').map(Number);

		// Verifica si es PM y ajusta la hora si es necesario
		if (partesHora[1].toLowerCase() === 'pm' && hora < 12) {
			const hora24 = hora + 12;
			const hora24Str = hora24.toString().padStart(2, '0');
			const minutosStr = minutos.toString().padStart(2, '0');
			return `${hora24Str}:${minutosStr}`;
		} else if (partesHora[1].toLowerCase() === 'am' && hora === 12) {
			const hora24Str = '00';
			const minutosStr = minutos.toString().padStart(2, '0');
			return `${hora24Str}:${minutosStr}`;
		}

		// En caso de ser AM y no requerir cambios
		const horaStr = hora.toString().padStart(2, '0');
		const minutosStr = minutos.toString().padStart(2, '0');
		return `${horaStr}:${minutosStr}`;
	}
</script>

<div class="card-container" on:click={() => (flipped = !flipped)}>
	<div class="card">
		{#if flipped}
			<div class=" side" transition:flip>
				<div class="flex-col justify-center items-center inline-flex">
					<div class="text-zinc-700 text-8xl font-bold">{temperature}</div>
					<div class="text-zinc-700 text-md font-semibold text-center">{getDayText(code)}</div>
				</div>
				<div class="justify-start items-center gap-0.5 flex">
					<div class="text-zinc-700 text-xl font-medium">°</div>
					<div class="text-zinc-700 text-xl font-medium">c</div>
				</div>
			</div>
		{:else}
			<div class="side back" transition:flip>
				<div class="flex-col justify-center gap- items-center">
					<div class="text-zinc-700 text-md font-medium tracking-wide mb-4 flex-row inline-flex">
						<img src="/icons/sunrise.png" alt="" />Salida solar: {convertirAMPMa24Horas(sunrise)}
					</div>
					<div
						class="text-zinc-700 text-md font-medium tracking-wide text-center flex-row inline-flex"
					>
						<img src="/icons/sunset.png" alt="" />Puesta solar: {convertirAMPMa24Horas(sunset)}
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>

<!-- <div class="side back" transition:flip>
    <div class="flex-col justify-center items-center inline-flex">
      <div class="text-blue-700 text-8xl font-bold">{temperature}</div>
      <div class="text-blue-700 text-md font-semibold text-center ">{getDayText(code)}</div>
    </div>
    <div class="justify-start items-center gap-0.5 flex">
      <div class="text-blue-700 text-xl font-medium">°</div>
      <div class="text-blue-700 text-xl font-medium">c</div>
    </div>
</div> -->

<style>
	.card-container {
		position: relative;
		height: 120px;
		width: 600px;
	}

	.card {
		width: 100%;
		height: 100%;
		position: absolute;
		perspective: 600;
	}

	.side {
		position: absolute;
		height: 100%;
		width: 100%;
		/* background-color: orange; */
		overflow: hidden;
		color: #fff;
		display: inline-flex;
		justify-content: center;
		align-items: start;
	}

	.back {
		/* 		background-color: grey; */
	}
</style>
