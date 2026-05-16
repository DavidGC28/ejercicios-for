function generarTablas() {
  
    let inputTabla = document.getElementById("txtTabla");
    let contenedor = document.getElementById("contenedorTabla");
    let titulo = document.getElementById("tituloTabla");

  
    let num = inputTabla.value;

  
    if (num === "") {
        alert("Por favor, ingresa un número para generar la tabla.");
        return;
    }

    titulo.innerText = "Tabla del " + num;

    
    let contenidoHTML = "";

    for (let i = 1; i <= 10; i++) {
        let resultado = num * i;

        
        contenidoHTML += `
            <div class="fila">
                <span>${num} x ${i}</span> 
                <span>=</span> 
                <span>${resultado}</span>
            </div>
        `;
    }

    contenedor.innerHTML = contenidoHTML;
}