function generadorExcusa() {
    let sujeto = ["El perro", "La abuela", "Un fantasma", " El gobierno"];
    let accion = ["se ha comido", "ha roto", "ha cambiado", "ha perdido"];
    let objeto = ["los deberes", "el router", "mi mochila", "mi bicicleta"];
    let sujetoRandom = sujeto[Math.floor(Math.random() * sujeto.length)];
    let accionRandom = accion[Math.floor(Math.random() * accion.length)];
    let objetoRandom = objeto[Math.floor(Math.random() * objeto.length)];
    let excusa = `${sujetoRandom} ${accionRandom} ${objetoRandom}.`;
    return excusa;
}
console.log(generadorExcusa());
window.onload = function() {
    document.getElementById("excusa").innerText = generadorExcusa();
};