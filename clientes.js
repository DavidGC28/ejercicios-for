let listaClientes = [];

function encontrarClientePorCedula(cedula) {
    for (let i = 0; i < listaClientes.length; i++) {
        if (listaClientes[i].cedula === cedula) {
            return listaClientes[i];
        }
    }
    return null;
}

function crearClientes() {
    let cedulaInput = recuperaraTexto("txtCedula");
    let nombreInput = recuperaraTexto("txtNombre");
    let edadInput = recuperarInt("txtEdad");

    if (cedulaInput === "" || nombreInput === "" || isNaN(edadInput)) {
        alert("Por favor, llene todos los campos con datos válidos.");
        return; 
    }

    let clienteExistente = encontrarClientePorCedula(cedulaInput);
    if (clienteExistente !== null) {
        alert("Esta cédula ya está registrada.");
        return;
    }

    let nuevoCliente = {
        cedula: cedulaInput,
        nombre: nombreInput,
        edad: edadInput
    };

    listaClientes.push(nuevoCliente);
    alert("Cliente agregado con éxito.");

    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtEdad", "");
}

function guardarCambios() {
    let cedulaInput = recuperaraTexto("txtCedula");
    let nombreInput = recuperaraTexto("txtNombre");
    let edadInput = recuperarInt("txtEdad");

    if (cedulaInput === "" || nombreInput === "" || isNaN(edadInput)) {
        alert("Por favor, llene todos los campos con datos válidos para actualizar.");
        return;
    }

    let clienteEncontrado = encontrarClientePorCedula(cedulaInput);

    if (clienteEncontrado !== null) {
        clienteEncontrado.nombre = nombreInput;
        clienteEncontrado.edad = edadInput;
        alert("Cambios guardados con éxito.");
        
        mostrarTextoEnCaja("txtCedula", "");
        mostrarTextoEnCaja("txtNombre", "");
        mostrarTextoEnCaja("txtEdad", "");
        
        mostrarClientes();
    } else {
        alert("No se puede modificar. La cédula " + cedulaInput + " no está registrada.");
    }
}

function mostrarClientes() {
    if (listaClientes.length === 0) {
        mostrarTexto("tablaClientes", "No hay clientes registrados.");
        return;
    }

    let tablaHTML = "<table>";
    tablaHTML += "<tr><th>Cédula</th><th>Nombre</th><th>Edad</th></tr>";

    for (let i = 0; i < listaClientes.length; i++) {
        tablaHTML += "<tr>";
        tablaHTML += "<td>" + listaClientes[i].cedula + "</td>";
        tablaHTML += "<td>" + listaClientes[i].nombre + "</td>";
        tablaHTML += "<td>" + listaClientes[i].edad + "</td>";
        tablaHTML += "</tr>";
    }

    tablaHTML += "</table>";

    document.getElementById("tablaClientes").innerHTML = tablaHTML;
}

function buscarClientes() {
    let cedulaBuscar = recuperaraTexto("txtCedulaBusqueda");
    
    if (cedulaBuscar === "") {
        alert("Escriba una cédula para buscar.");
        return;
    }

    let clienteEncontrado = encontrarClientePorCedula(cedulaBuscar);

    if (clienteEncontrado !== null) {
        alert("Cliente Encontrado:\nNombre: " + clienteEncontrado.nombre + "\nEdad: " + clienteEncontrado.edad);
        
        mostrarTextoEnCaja("txtCedula", clienteEncontrado.cedula);
        mostrarTextoEnCaja("txtNombre", clienteEncontrado.nombre);
        mostrarTextoEnCaja("txtEdad", clienteEncontrado.edad);
    } else {
        alert("No se encontró ningún cliente con la cédula: " + cedulaBuscar);
    }
    
    mostrarTextoEnCaja("txtCedulaBusqueda", "");
}