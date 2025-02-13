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
let matriz = [[0,1,2],[3,4,5],[6,7,8]]
//console.log(matriz[1][1]);
jugador() //Es la manera en que los usuarios marcan ´x´ o ´O´
reset.addEventListener("click",reiniciar) //Reinicia el juego limpiando el tablero

function jugador() {
    cuadriculas.forEach((element) => element.addEventListener("click", function(){
        if (element !== "") {
            element.innerHTML = turnos[0]
            maquina()
        }
        
            
    }))
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
        
        for (let j = 0; j < matriz.length; j++) {
            //console.log(matriz[index][j])
            if ((matriz[i][j]) !== "" && matriz[0][i] === matriz[1][i] && matriz[1][i] === matriz[2][i]) {
                alert(`has ganado`)
            } else {
                if (condition) {
                    
                } else {
                    if (condition) {
                        
                    }
                }
            }
            
        }
    }
    
}