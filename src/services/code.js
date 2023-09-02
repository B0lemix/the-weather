
export function getDayText(code) {
    switch (code) {
        case 1000:
            return 'Soleado';
        case 1003:
            return 'Llovizna a intervalos';
        case 1006:
            return 'Nublado';
        case 1009:
            return 'Cielo cubierto';
        case 1030:
            return 'Neblina';
        case 1060:
            return 'Lluvia  moderada a intervalos';
        case 1066:
            return 'Nieve moderada a intervalos en las aproximaciones';
        case 1063:
            return 'Lluvia  moderada a intervalos';

        case 1069:
            return "Llovizna helada a intervalos en las aproximaciones";
        case 1087:
            return "Cielos tormentosos en las aproximaciones";
        case 1114:
            return "Chubascos de nieve";
        case 1117:
            return "Ventisca";
        case 1135:
            return "Niebla moderada";
        case 1147:
            return "Niebla helada";
        case 1150:
            return "Llovizna a intervalos";
        case 1168:
            return "Llovizna helada";

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