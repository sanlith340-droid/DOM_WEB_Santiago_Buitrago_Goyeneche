
document.addEventListener("DOMContentLoaded", () => {

    const textoContador = document.getElementById("contador");
    const boton = document.getElementById("btn-like");
    const cuerpoTabla = document.getElementById("registros");
    const mensajeVacio = document.getElementById("mensaje-vacio");

    let clics = 0;

    boton.addEventListener("click", () => {

        clics++;

        textoContador.textContent = clics;

        const ahora = new Date();

        const hora = ahora.toLocaleTimeString("es-CO", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        });

        const fila = document.createElement("tr");

        const celdaNumero = document.createElement("td");
        const celdaHora = document.createElement("td");

        celdaNumero.textContent = clics;
        celdaHora.textContent = hora;

        fila.appendChild(celdaNumero);
        fila.appendChild(celdaHora);

        cuerpoTabla.prepend(fila);

        mensajeVacio.hidden = true;

    });

});
