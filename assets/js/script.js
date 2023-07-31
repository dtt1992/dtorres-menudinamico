// Seleccionamos la clase del menu principal navigation
const navigation = document.querySelector(".navigation")
// Seleccionamos la clase del menu principal menuToggle
const menuToggle = document.querySelector(".menuToggle")

menuToggle.onclick = function() {
    // Esto mapea todas las clases y el toggle reconoce el open, se crea una clase a traves de js
    navigation.classList.toggle("open")    
}
// Seleccionamos todas las clases con clase list
const list = document.querySelectorAll(".list")
// Con esta funcion quitamos la clase active de todos los links y añadiremos la clase active al boton que pulsemos
function activarLink() {
    list.forEach((item) =>{
        item.classList.remove("active")
    })
    this.classList.add("active")
}

// Recorremos todos los item(lista) y le activamos la funcion activarLink
list.forEach((item)=>{
    item.addEventListener("click", activarLink)
})
