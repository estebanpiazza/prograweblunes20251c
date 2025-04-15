console.log("Hola")



let botonUsuario = document.querySelector("#inicioSesion")

botonUsuario.addEventListener("click", function (){
    let nombreUsuario = document.getElementById("nombreUsuario").value
    document.getElementById("saludo").innerHTML=`<h1> Hola ${nombreUsuario}</h1> <br> <img src="https://placehold.co/100" alt="como te dice tu mama, aca hay un error">`
})

let boton = document.getElementById("boton2").addEventListener("click", function(){

})

let usuario={
    asd:"a0",
    dsa:"asdsad"
}




// querySelector(".unaClase")