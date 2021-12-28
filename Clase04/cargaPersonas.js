var persona = { nombre: "", edad: 0 };
function cambioNombre(cuadroTexto) {
    persona.nombre = cuadroTexto.value;
    mostrarPersona();
}
function cambioEdad(cuadroTexto) {
    persona.edad = Number(cuadroTexto.value);
    mostrarPersona();
}
function mostrarPersona() {
    document.getElementById("spanNombre").innerText = persona.nombre;
    document.getElementById("spanEdad").innerText = String(persona.edad);
}
