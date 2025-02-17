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
let mensaje = document.getElementById("mensaje")
let marcadorUsuario = document.getElementById("marcadorUsuario") 
let marcadorMaquina = document.getElementById("marcadorMaquina") 

contandoUsuario = JSON.parse(localStorage.getItem("scoreUser")) || [];
contandoMaquina = JSON.parse(localStorage.getItem("scoreMachine")) || [];

let  = [];

cuadriculas = [item0, item1, item2, item3, item4, item5, item6, item7, item8]
const turnos = ["X","O"]
let matriz = [["","",""],["","",""],["","",""]] //poner comillas vacias y hacer el push
jugador() //Es la manera en que los usuarios marcan ´x´ o ´O´

reset.addEventListener("click",reiniciar) //Reinicia el juego limpiando el tablero

function jugador() {
    for (let index = 0; index < cuadriculas.length; index++) {
        cuadriculas[index].addEventListener("click", function () {
            if (matriz.flat()[index] === "") {  
                matriz[Math.floor(index / 3)][index % 3] = turnos[0]; 
                cuadriculas[index].textContent = turnos[0]; 

                console.log(index);

                // Primero verifica si el jugador ha ganado
                if (ganador()) return; 

                maquina(); // La máquina juega después
            }
        });
    }
}

function maquina() {
    const filtro = cuadriculas.filter((item) => item.textContent === ""); // Filtra las casillas vacías
    if (filtro.length === 0) return; // Evita errores si no hay espacios disponibles

    const aleatorio = Math.floor(Math.random() * filtro.length); // Selecciona una casilla al azar
    const casillaSeleccionada = filtro[aleatorio];

    setTimeout(() => {
        casillaSeleccionada.textContent = turnos[1]; // Coloca la "O" en la interfaz
        let index = cuadriculas.findIndex(item => item === casillaSeleccionada); // Encuentra el índice correcto
        matriz[Math.floor(index / 3)][index % 3] = turnos[1]; // Actualiza la matriz
        ganador(); // Verifica si la máquina ganó
    }, 500);
}
function reiniciar () {
    cuadriculas.forEach((element) => {
        element.innerHTML = ""
        window.location.reload();
    })
}
function ganador() {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            // Verifica si una fila tiene tres iguales y no está vacía
            if (matriz[i][0] !== "" && matriz[i][0] === matriz[i][1] && matriz[i][0] === matriz[i][2]) {
                let div = document.createElement("div")
                let p = document.createElement("p")
                p.innerHTML = (`Jugador ${matriz[i][0]} Gana`)
                p.setAttribute("class","textoGanador")
                div.appendChild(p)
                mensaje.appendChild(div);
                score()
                return true; // Retorna true si alguien gana
            }
            // Verifica si una columna tiene tres iguales y no está vacía
            if (matriz[0][j] !== "" && matriz[0][j] === matriz[1][j] && matriz[0][j] === matriz[2][j]) {
                let div = document.createElement("div")
                let p = document.createElement("p")
                p.innerHTML = (`Jugador ${matriz[0][i]} Gana`);
                p.setAttribute("class","textoGanador")
                div.appendChild(p)
                mensaje.appendChild(div); 
                score()
                return true;
            }
        }
    }
    // Verifica la diagonal principal
    if (matriz[0][0] !== "" && matriz[0][0] === matriz[1][1] && matriz[0][0] === matriz[2][2]) {
        let div = document.createElement("div")
        let p = document.createElement("p")
        p.innerHTML = (`Jugador ${matriz[0][0]} Gana`);
        p.setAttribute("class","textoGanador")
        div.appendChild(p)
        mensaje.appendChild(div);
        score()
        return true;
    }

    // Verifica la diagonal secundaria
    if (matriz[0][2] !== "" && matriz[0][2] === matriz[1][1] && matriz[0][2] === matriz[2][0]) {
        let div = document.createElement("div")
        let p = document.createElement("p")
        p.innerHTML = (`Jugador ${matriz[0][2]} Gana`);
        p.setAttribute("class","textoGanador")
        div.appendChild(p)
        mensaje.appendChild(div);
        score()
        return true;
    }
    console.log(matriz);
    return false; // Si nadie gana, retorna false
    
}

function score() {
    if ((matriz[i][0])=== "X" || (matriz[0][i])=== "X" || (matriz[0][0])=== "X" || (matriz[0][2])=== "X") {
        contandoUsuario.push(+1);
        localStorage.setItem("scoreUser",JSON.stringify(contandoUsuario));
        marcadorUsuario.innerHTML=contandoUsuario++;
    } if ((matriz[i][0])=== "O" || (matriz[0][i])=== "O" || (matriz[0][0])=== "O" || (matriz[0][2])=== "O") {
        marcadorMaquina.innerHTML=contandoMaquina++;
    } else {
        alert("Error en la matrix")
    }
}
