let item0 = document.getElementById("item0")
let item1 = document.getElementById("item1")
let item2 = document.getElementById("item2")
let item3 = document.getElementById("item3")
let item4 = document.getElementById("item4")
let item5 = document.getElementById("item5")
let item6 = document.getElementById("item6")
let item7 = document.getElementById("item7")
let item8 = document.getElementById("item8")
let reset = document.getElementById("reinicio")

cuadriculas = [item0, item1, item2, item3, item4, item5, item6, item7, item8]
//let jugadorActual = "X"
const turnos = ["X","O"]
let matriz = [["X","X","X"],[3,4,5],[6,7,8]] //poner comillas vacias y hacer el push
//console.log(matriz[1][1]);
jugador() //Es la manera en que los usuarios marcan ´x´ o ´O´

reset.addEventListener("click",reiniciar) //Reinicia el juego limpiando el tablero

function jugador() {
    for (let index = 0; index < cuadriculas.length; index++) {
        cuadriculas[index].addEventListener("click", function () {
            if (cuadriculas[index] !== "") {
                cuadriculas[index].innerHTML = turnos[0]
                console.log(index);
                
                maquina();
                ganador();
            }
        })
    }
}
function maquina() {
    const filtro = cuadriculas.filter((item) => item.textContent === "") //Se filtran las cuadriculas vacias
    const aleatorio = Math.floor(Math.random() * filtro.length) //se realiza un numero aleatorio segun la cantiadad de cuadriculas vacias
    setTimeout(() => {
        filtro[aleatorio].innerHTML = turnos[1] //Despues 
    }, 1500);
}
function reiniciar () {
    cuadriculas.forEach((element) => {
        element.innerHTML = ""
    })
}
function ganador() {
    for (let i = 0; i < matriz.length; i++) {
        let filaCompleta = true;
        let columnaCompleta = true;
        console.log(matriz[i][0]);
        
        if (matriz[i][0].textContent !== "" && matriz[i][0].textContent === matriz[i][1].textContent && matriz[i][0].textContent === matriz[i][2].textContent) {
            alert(`Jugador ${matriz[i][0].textContent} Gana`); 
            return true; 
        }
    }

    //HACER UNA VARIABLE QUE OBTENGA EL CONTENIDO DE LA POSICION QUE GANO
}
