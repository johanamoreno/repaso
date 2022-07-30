function Agregar(){

    let pendiente = document.getElementById('pendiente').value
    document.getElementById('agregar').innerHTML += `<li>${pendiente}</li>`
}