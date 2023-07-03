let Hipodoge = document.getElementById('Hipodoge')
let Capipepo = document.getElementById('Capipepo')
let Ratigueya = document.getElementById('Ratigueya')
let btnMascotaJugador = document.getElementById('botonMascota')
let spanJugador = document.getElementById('spanJugador')
let spanEnemigo = document.getElementById('spanEnemigo')
let botonFuego = document.getElementById('botonFuego')
let botonAgua = document.getElementById('botonAgua')
let botonTierra = document.getElementById('botonTierra')
let mensaje
let ataqueJugador
let ataqueEnemigo
let empates = 0
let victorias = 0
let derrotas = 0
function iniciarJuego(){
    btnMascotaJugador.addEventListener('click', MascotaJugador)
    botonFuego.addEventListener('click',ataqueFuego)
    botonAgua.addEventListener('click',ataqueAgua)
    botonTierra.addEventListener('click',ataqueTierra)
}


function MascotaJugador(){
    if(Hipodoge.checked){
       spanJugador.innerHTML= 'Hipodoge '
    }else if(Capipepo.checked){
        spanJugador.innerHTML= 'Capipepo '
    }else if(Ratigueya.checked){
        spanJugador.innerHTML= 'Ratigueya '
    }else {
        alert('Selecciona una mascota')
    }
    MascotaEnemigo()
}

function MascotaEnemigo(){
    let mascotaAleatoriaEnemigo =  aleatorio(1,3)
    if(mascotaAleatoriaEnemigo == 1){
       spanEnemigo.innerHTML= 'Hipodoge '
    }else if(mascotaAleatoriaEnemigo == 2){
        spanEnemigo.innerHTML= 'Capipepo '
    }else if(mascotaAleatoriaEnemigo == 3){
        spanEnemigo.innerHTML= 'Ratigueya '
    }
}
function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio =  aleatorio(1,3)
    if(ataqueAleatorio == 1){
      ataqueEnemigo = 'FUEGO'
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    }else if(ataqueAleatorio == 3){
        ataqueEnemigo = 'TIERRA'
    }
    batalla()
    crearMensaje()
}


function batalla(){
    if ( ataqueJugador == ataqueEnemigo ) {
        mensaje = '¡EMPATE! 🤼'
        empates = empates + 1;
    } else if ( ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA' ) {
       mensaje = '¡GANASTE! 🥳 '
        victorias = victorias + 1;
    } else if ( ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO' ) {
        mensaje = '¡GANASTE! 🥳 '
        victorias = victorias + 1;
    } else if ( ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA' ) {
        mensaje = '¡GANASTE! 🥳 '
        victorias = victorias + 1;
    } else {
        mensaje = ' PERDISTE... 😢 '
        derrotas = derrotas + 1;
    }
 
}


function crearMensaje(){
    let parrafo = document.createElement('p')
    parrafo = 'Tu mascota atacó con ' + ataqueJugador, '...la mascota del enemigo atacó con ' + ataqueEnemigo + '...Resultado :  ' + mensaje + ' ...'
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

function aleatorio(min , max){
    return Math.floor(Math.random() * ( max - min + 1) + min)
}

window.addEventListener('load',iniciarJuego)
