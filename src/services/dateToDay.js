export function dateToDay(fechaString ) {

   
// Crear un objeto Date a partir de la cadena de fecha
const fecha = new Date(fechaString);

// Obtener el número del día de la semana (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
const numeroDiaSemana = fecha.getDay();

// Crear un array con los nombres de los días de la semana
const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

// Obtener el nombre del día de la semana
    const nombreDiaSemana = diasSemana[numeroDiaSemana];
    

    return nombreDiaSemana

    
}