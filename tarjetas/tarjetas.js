function craerTarjetas() {

    let contenido = "";
    let divTartejas = document.getElementById("divTartejas");

    for (let i = 1; i <= 8; i++) {
        contenido = contenido + "<div class='item'>" + i + "</div>";

    }
    divTartejas.innerHTML = contenido;
    }