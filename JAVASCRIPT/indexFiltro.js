function mostrarResultado() {
    const seleccion = document.getElementById("filtroSeleccion").value;
    const resultado = document.getElementById("resultadoFiltro");

    if (seleccion === "donantes") {
        resultado.innerHTML = "Mostrando resultados para <strong>Donantes</strong>.";
    } else if (seleccion === "voluntarios") {
        resultado.innerHTML = "Mostrando resultados para <strong>Voluntarios</strong>.";
    } else {
        resultado.innerHTML = "";
    }
}