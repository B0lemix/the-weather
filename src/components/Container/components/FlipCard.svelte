<script>
	export let temperature, text, code, sunrise, sunset;

	let flipped = false;

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

	function getDayText(code) {
		switch (code) {
			case 1000:
				return 'Soleado';
			case 1003:
				return 'Llovizna a intervalos';
			case 1153:
				return 'Llovizna helada';
			case 1171:
				return 'Fuerte llovizna helada';
			case 1180:
				return 'Lluvias ligeras a intervalos';
			case 1189:
				return 'Lluvia moderada';
			case 1192:
				return 'Periodos de fuertes lluvias';
			case 1195:
				return 'Fuertes lluvias';
			case 1198:
				return 'Ligeras lluvias heladas';
			case 1201:
				return 'Lluvias heladas fuertes o moderadas';
			case 1204:
				return 'Ligeras precipitaciones de aguanieve';
			case 1207:
				return 'Aguanieve fuerte o moderada';
			case 1210:
				return 'Nevadas ligeras a intervalos';
			case 1213:
				return 'Nieve moderada';
			case 1222:
				return 'Nevadas intensas';
			case 1225:
				return 'Fuertes nevadas';
			case 1237:
				return 'Granizo';
			case 1240:
				return 'Ligeras precipitaciones';
			case 1243:
				return 'Lluvias fuertes o moderadas';
			case 1246:
				return 'Lluvias torrenciales';
			case 1249:
				return 'Ligeros chubascos de aguanieve';
			case 1252:
				return 'Chubascos de aguanieve fuertes o moderados';
			case 1255:
				return 'Ligeras precipitaciones de nieve';
			case 1258:
				return 'Chubascos de nieve fuertes o moderados';
			case 1261:
				return 'Ligeros chubascos acompañados de granizo';
			case 1264:
				return 'Chubascos fuertes o moderados acompañados de granizo';
			case 1273:
				return 'Intervalos de lluvias ligeras con tormenta en la región';
			case 1276:
				return 'Lluvias con tormenta fuertes o moderadas en la región';
			case 1279:
				return 'Nieve moderada con tormenta en la región';
			case 1282:
				return 'Nieve moderada o fuertes nevadas con tormenta en la región';
			default:
				return 'Código no encontrado';
		}
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
