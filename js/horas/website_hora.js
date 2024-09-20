let creartabla = function (lista) {
    let stringTabla = "<tr><th>nro</th><th>unidad</th><th>didactica</th><th>fechaclases</th><th>inicio</th><th>fin</th><th>duracion(min)</th><th>duracion(hora)</th><th>moneda</th><th>estado</th><th>mespagado</th><th>seccion</th><th>periodoacademico</th><th>producto</th></tr>";
    for (let hora of lista) {
        let fila = "<tr> <td>"
        fila += hora.nro;
        fila += "</td>";

        fila += "<td>";
        fila += hora.unidad;
        fila += "</td>";

        fila += "<td>";
        fila += hora.didactica;
        fila += "</td>";

        fila += "<td>";
        fila += hora.fechaclases;
        fila += "</td>";

        fila += "<td>";
        fila += hora.inicio;
        fila += "</td>";

        fila += "<td>";
        fila += hora.fin;
        fila += "</td>";

        fila += "<td>";
        fila += hora.duracionmin;
        fila += "</td>";

        fila += "<td>";
        fila += hora.duracionhr;
        fila += "</td>";

        fila += "<td>";
        fila += hora.moneda;
        fila += "</td>";

        fila += "<td>";
        fila += hora.estado;
        fila += "</td>";


        fila += "<td>";
        fila += hora.mespagado;
        fila += "</td>";

        fila += "<td>";
        fila += hora.seccion;
        fila += "</td>";

        fila += "<td>";
        fila += hora.periodoacademico;
        fila += "</td>";

        fila += "<td>";
        fila += hora.producto;
        fila += "</td>";

        fila += "</tr>";
        stringTabla += fila;
        console.log(stringTabla);
    }
    return stringTabla;

}


document.getElementById("containertabla").innerHTML = creartabla(horario);

