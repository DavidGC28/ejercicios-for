function crearTarjetas() {
    let desde = Number(document.getElementById("txtDesde").value);
    let hasta = Number(document.getElementById("txtHasta").value);
    let salto = Number(document.getElementById("txtSalto").value);
    
    let contenido = "";
    let divTartejas = document.getElementById("divTartejas");

    
    if (salto <= 0) { salto = 1; }

    // PASO CLAVE: El incremento ahora es i += salto
    for (let i = desde; i <= hasta; i += salto) {
        contenido = contenido + "<div class='item'>" + i + "</div>";
    }

    divTartejas.innerHTML = contenido;

   
    saltarTarjetas(); 
}

function saltarTarjetas() {
    let items = document.getElementsByClassName("item");

    
    for (let i = 0; i < items.length; i++) {
        items[i].onclick = function() {
            this.style.backgroundColor = "aqua";
        };
    }
}