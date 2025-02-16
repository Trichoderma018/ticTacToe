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
//let matriz = ["","","","","","","","",""] //poner comillas vacias y hacer el push
let matriz = [["","",""],["","",""],["","",""]] //poner comillas vacias y hacer el push
//console.log(matriz[1][1]);
jugador() //Es la manera en que los usuarios marcan ´x´ o ´O´

reset.addEventListener("click",reiniciar) //Reinicia el juego limpiando el tablero
/*
function jugador() {
    cuadriculas.forEach((element, index) => element.addEventListener("click", function(){
        if (matriz[index] === "") {
            matriz[index] = turnos[0];
            element.textContent = turnos[0];
            maquina();
            ganador();
        }    
    }))
}*/

function jugador() {
    for (let index = 0; index < cuadriculas.length; index++) {
        cuadriculas[index].addEventListener("click", function () {
            if (matriz.flat()[index] === "") {  //Convierte la matriz en una lista temporal
                matriz[Math.floor(index / 3)][index % 3] = turnos[0] //actualiza la matriz
                cuadriculas[index].textContent = turnos[0] // Actuliza la interfaz
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
    }, 500);
}
function reiniciar () {
    cuadriculas.forEach((element) => {
        element.innerHTML = ""
    })
}
function ganador() {
    for (let i = 0; i < 3; i++) {  
        let filaGana = true;
        let columnaGana = true;
        
        for (let j = 1; j < 3; j++) {  
            // Verificar fila
            if (matriz[i][j] !== matriz[i][0] || matriz[i][0] === "") {
                filaGana = false;
            }

            // Verificar columna
            if (matriz[j][i] !== matriz[0][i] || matriz[0][i] === "") {
                columnaGana = false;
            }
        }

        if (filaGana) {
            alert(`Jugador ${matriz[i][0]} Gana (Fila ${i})`);
            return true;
        }

        if (columnaGana) {
            alert(`Jugador ${matriz[0][i]} Gana (Columna ${i})`);
            return true;
        }
    }

    // Revisar diagonales
    if (matriz[0][0] !== "" && matriz[0][0] === matriz[1][1] && matriz[0][0] === matriz[2][2]) {
        alert(`Jugador ${matriz[0][0]} Gana (Diagonal principal)`);
        return true;
    }
    if (matriz[0][2] !== "" && matriz[0][2] === matriz[1][1] && matriz[0][2] === matriz[2][0]) {
        alert(`Jugador ${matriz[0][2]} Gana (Diagonal secundaria)`);
        return true;
    }

    return false; // Si nadie ha ganado
}


/*
function ganador() {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i][0]);
        
        if (matriz[i][0].textContent !== "" && matriz[i][0].textContent === matriz[i][1].textContent && matriz[i][0].textContent === matriz[i][2].textContent) {
            alert(`Jugador ${matriz[i][0].textContent} Gana`); 
            return true; 
        }
    }

    //HACER UNA VARIABLE QUE OBTENGA EL CONTENIDO DE LA POSICION QUE GANO
}*/
