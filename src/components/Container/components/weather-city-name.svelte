<script>
	export let name, country, date;

	// Fecha en formato ISO 8601
	// Crear un objeto de fecha
	var fecha = new Date(date);

	// Días de la semana en español
	var diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

	// Meses en español
	var meses = [
		'Enero',
		'Febrero',
		'Marzo',
		'Abril',
		'Mayo',
		'Junio',
		'Julio',
		'Agosto',
		'Septiembre',
		'Octubre',
		'Noviembre',
		'Diciembre'
	];

	// Obtener el día de la semana y el mes
	var diaSemana = diasSemana[fecha.getDay()];
	var mes = meses[fecha.getMonth()];

	// Obtener el día del mes
	var diaMes = fecha.getDate();

	// Formatear la fecha como "Día de la semana, Día Mes"
	var fechaFormateada = diaSemana + ', ' + diaMes + ' ' + mes;

	console.log(fechaFormateada); // Salida: "Miércoles, 30 Agosto"
</script>

<div class="w-full flex flex-col px-6 self-stretch">
	<div class="font-semibold text-3xl text-zinc-700">
		<h1>{name},</h1>
		<h1>{country}</h1>
	</div>

	<h3 class="text-zinc-500 text-md font-normal mt-2">{fechaFormateada}</h3>
</div>

<style lang="postcss"></style>
