
let Pitbull = document.getElementById('Pitbull')
let Chiuaua = document.getElementById('Chiuaua')
let Rotweiller = document.getElementById('Rotweiller')
let btnMascotaJugador = document.getElementById('botonMascota')
let spanJugador = document.getElementById('mascota-jugador')
let spanEnemigo = document.getElementById('mascota-enemigo')
let botonOreja = document.getElementById('botonOreja')
let botonCola = document.getElementById('botonCola')
let botonPata = document.getElementById('botonPata')
let resultado = document.getElementById('resultado')
let mordidaJugador = document.getElementById('mordida-jugador')
let mordidaEnemigo = document.getElementById('mordida-enemigo')
let spanVidaJugador = document.getElementById('vida-jugador')
let spanVidaEnemigo = document.getElementById('vida-enemigo')
let reiniciar = document.getElementById('botonReiniciar')
let sectionSeleccionarAtaque = document.getElementById('selecAtaque')
let sectionSeleccionarMascota = document.getElementById('selecMascota')
let sectionReiniciar = document.getElementById('reiniciar')
let vidasJugador = 3
let vidasEnemigo = 3
let ataqueJugador
let ataqueEnemigo
let empates = 0
let victorias = 0
let derrotas = 0

function iniciarJuego(){

    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    btnMascotaJugador.addEventListener('click', MascotaJugador)
    botonOreja.addEventListener('click',ataqueOreja)
    botonCola.addEventListener('click',ataqueCola)
    botonPata.addEventListener('click',ataquePata)
    reiniciar.addEventListener('click',reiniciarJuego)
 
}

function MascotaJugador(){
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionSeleccionarMascota.style.display ='none'
    
    if(Pitbull.checked){
       spanJugador.innerHTML= 'Pitbull '
    }else if(Chiuaua.checked){
        spanJugador.innerHTML= 'Chiuaua '
    }else if(Rotweiller.checked){
        spanJugador.innerHTML= 'Rotweiller '
    }else {
        alert('Selecciona una mascota')
    }
    MascotaEnemigo()
}

function MascotaEnemigo(){
    let mascotaAleatoriaEnemigo =  aleatorio(1,3)
    if(mascotaAleatoriaEnemigo == 1){
       spanEnemigo.innerHTML= 'Pitbull '
    }else if(mascotaAleatoriaEnemigo == 2){
        spanEnemigo.innerHTML= 'Chiuaua '
    }else if(mascotaAleatoriaEnemigo == 3){
        spanEnemigo.innerHTML= 'Rotweiller'
    }
}

function ataqueOreja(){
    ataqueJugador = 'Oreja'
    ataqueAleatorioEnemigo()
}

function ataqueCola(){
    ataqueJugador = 'Cola'
    ataqueAleatorioEnemigo()
}

function ataquePata(){
    ataqueJugador = 'Pata'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio =  aleatorio(1,3)
    if(ataqueAleatorio == 1){
      ataqueEnemigo = 'Oreja'
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'Cola'
    }else if(ataqueAleatorio == 3){
        ataqueEnemigo = 'Pata'
    }
    batalla()
}

function batalla(){
    if ( ataqueJugador == ataqueEnemigo ) {
        crearMensaje('¡EMPATARON! 🤼')
        empates = empates + 1;
    } else if ( ataqueJugador == 'Oreja' && ataqueEnemigo == 'Pata' ) {
       crearMensaje('GANO TU MORDIDA! 🥳 ')
        victorias = victorias + 1;
        vidasEnemigo--
        spanVidaEnemigo.innerHTML = vidasEnemigo

    } else if ( ataqueJugador == 'Cola' && ataqueEnemigo == 'Oreja' ) {
        crearMensaje('GANO TU MORDIDA! 🥳 ')
        victorias = victorias + 1;
        vidasEnemigo--
        spanVidaEnemigo.innerHTML = vidasEnemigo
    } else if ( ataqueJugador == 'Pata' && ataqueEnemigo == 'Cola' ) {
        crearMensaje('GANO TU MORDIDA! 🥳 ')
        victorias = victorias + 1;
        vidasEnemigo--
        spanVidaEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje(' TE MORDIERON MAS FUERTE... 😢 ')
        derrotas = derrotas + 1;
        vidasJugador--
        spanVidaJugador.innerHTML = vidasJugador
}
revisarVidas()
}

function revisarVidas(){
    if (vidasEnemigo == 0) {
        mensajeFinal('GANO TU MASCOTA!!!!' ) 
    } else if (vidasJugador== 0 ) {
        mensajeFinal('A TU MASCOTA LA MORDISQUEARON....')
    }
}

function crearMensaje(mensaje){

    resultado.innerHTML = mensaje
    let nuevaMordidaJugador  = document.createElement('p')
    let nuevaMordidaEnemigo = document.createElement('p')
    nuevaMordidaJugador.innerHTML = ataqueJugador
    nuevaMordidaEnemigo.innerHTML= ataqueEnemigo
    mordidaEnemigo.appendChild(nuevaMordidaEnemigo)
    mordidaJugador.appendChild(nuevaMordidaJugador)

}

function mensajeFinal(mensajeResultado){
    resultado.innerHTML= mensajeResultado
    botonOreja.disabled = true
    botonCola.disabled = true
    botonPata.disabled = true 
    sectionReiniciar.style.display = 'block'
}



function resultadoBatalla(){
    function mostrarResultados() {
        alert("Has acumulado " + 
            victorias + " victorias, " + 
            derrotas + " derrotas y " + 
            empates + " empates.");
    
        if ( victorias == 2 ) {
            alert( "TÚ eres el GANADOR" );
            resetearVariables();
        } else if ( derrotas == 2 ) {
            alert( "EL ENEMIGO es el GANADOR" );
            resetearVariables();
        } else {
            alert( "Hubo un error... 🙃");
            resetearVariables();
        }
    }
}

function resetearVariables() {
    victorias = 0;
    derrotas  = 0;
    empates   = 0;
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min , max){
    return Math.floor(Math.random() * ( max - min + 1) + min)
}

window.addEventListener('load',iniciarJuego)