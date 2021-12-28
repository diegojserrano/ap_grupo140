let persona = { nombre: "", edad: 0 }

function cambioNombre(cuadroTexto: HTMLInputElement): void {
    
    persona.nombre = cuadroTexto.value
    mostrarPersona()
}


function cambioEdad(cuadroTexto: HTMLInputElement): void {
    persona.edad = Number(cuadroTexto.value)
    mostrarPersona()
    
}


function mostrarPersona(): void {
    document.getElementById("spanNombre").innerText = persona.nombre
    document.getElementById("spanEdad").innerText = String(persona.edad)
}