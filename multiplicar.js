function generarTablas(){
    let contenedor = document.getElementById("contenedorTabla")
    contenedor.innerHTML = "<h1/>PROBANDO</h1>";
    let contenido = "";
    for(let i = 1; i <= 10; i++){
        contenido=contenido + "<p>"+"3 x "+i+" = "+(3*i)+"</p>";
    }
    contenedor.innerHTML = contenido;

}