let A = sessionStorage.getItem("ColorSelected1") ?? "#fc0303";
let B = sessionStorage.getItem("ColorSelected2") ?? "#0602ed";
let C = sessionStorage.getItem("ColorSelected3") ?? "#3ff90b";
let D = sessionStorage.getItem("ColorSelected4") ?? "#c240d4";
let E = sessionStorage.getItem("ColorSelected5") ?? "#04f1ed";
let F = sessionStorage.getItem("ColorSelected6") ?? "#dc6f09";
let jugador = sessionStorage.getItem("usuario");
let puntuacionAct, posicion1, posicion2, posicion3, posicion4, fullTry, checkButton;
let resultadoArray = [undefined, undefined, undefined, undefined];


// DINAMIC BOARD HARD AND MEDIUM
let lvlMode = sessionStorage.getItem("nivelSeleccionado");
let mediumModeBlock = document.querySelectorAll('.mediumMODE')
let mediumModeTryBlock = document.querySelectorAll('.mediumTRY')
let hardModeBlock = document.querySelectorAll('.hardMODE')
let hardModeTryBlock = document.querySelectorAll('.hardTRY')

switch (lvlMode) {
    case "medium":
        mediumModeBlock.forEach((element) => {
            element.classList.add('filaBlock');
        });
        mediumModeTryBlock.forEach((element) => {
            element.classList.add('tiradaBlock');
        });
        break;
    case "hard":
        hardModeBlock.forEach((element) => {
            element.classList.add('filaBlock');
        });
        hardModeTryBlock.forEach((element) => {
            element.classList.add('tiradaBlock');
        });
        break;
    default:
        break;
}

// SECRET CODE GENERATOR WITH ARRAY
const arrayCode = (lvlMode === "easy") ? [A, B, C, D] : (lvlMode === "medium") ? [A, B, C, D, E] : [A, B, C, D, E, F];

const arrayRandom = (defaultCode) => {
    const arrayRandomFinal = [];
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * defaultCode.length);
        const randomValue = defaultCode[randomIndex];
        arrayRandomFinal.push(randomValue);
    }
    return arrayRandomFinal;
}

const secretCode = arrayRandom(arrayCode);
console.log(secretCode);

// SECRET CODE CONVERTED IN SIMPLE CODE STRING AND WINNER CODE STRING

const Code1 = secretCode[0].toString();
const Code2 = secretCode[1].toString();
const Code3 = secretCode[2].toString();
const Code4 = secretCode[3].toString();
const winnerCode = Code1 + Code2 + Code3 + Code4;

// WINNER CODE SHOW

const codeWin1 = document.querySelector("#winCode1");
const codeWin2 = document.querySelector("#winCode2");
const codeWin3 = document.querySelector("#winCode3");
const codeWin4 = document.querySelector("#winCode4");

codeWin1.style.backgroundColor = Code1;
codeWin2.style.backgroundColor = Code2;
codeWin3.style.backgroundColor = Code3;
codeWin4.style.backgroundColor = Code4;

// // CHECKING PLAYER MOVE
const checkingPlayerMove = (puntuacionAct, posicion1, posicion2, posicion3, posicion4, fullTry) => {
    const scoreMove = puntuacionAct.querySelectorAll(".score");

    if (!posicion1 || !posicion2 || !posicion3 || !posicion4) {
        return;
    }

    if (fullTry === winnerCode) {
        alert("YOU WIN!!");
    } else {
        if (posicion1 == Code1) {
            scoreMove[3].style.backgroundColor = "red";
        } else if (winnerCode.includes(posicion1)) {
            scoreMove[3].style.backgroundColor = "white";
        } else {
            scoreMove[3].style.backgroundColor = "black";
        }

        if (posicion2 == Code2) {
            scoreMove[2].style.backgroundColor = "red";
        } else if (winnerCode.includes(posicion2)) {
            scoreMove[2].style.backgroundColor = "white";
        } else {
            scoreMove[2].style.backgroundColor = "black";
        }

        if (posicion3 == Code3) {
            scoreMove[1].style.backgroundColor = "red";
        } else if (winnerCode.includes(posicion3)) {
            scoreMove[1].style.backgroundColor = "white";
        } else {
            scoreMove[1].style.backgroundColor = "black";
        }

        if (posicion4 == Code4) {
            scoreMove[0].style.backgroundColor = "red";
        } else if (winnerCode.includes(posicion4)) {
            scoreMove[0].style.backgroundColor = "white";
        } else {
            scoreMove[0].style.backgroundColor = "black";
        }
    }
};

// PLAYER SELECTOR
const playerSelcFun = (jugadaActiva) => {
    const jugada = jugadaActiva.querySelectorAll(".tirada");
    jugada.forEach((element, index = 0) => {
        let currentIndex = 0;
        element.addEventListener("click", (event) => {
            const posicion = currentIndex % arrayCode.length;
            currentIndex--;

            if (currentIndex < 0) {
                currentIndex = arrayCode.length - 1;
            }

            element.style.backgroundColor = arrayCode[posicion];
            resultadoArray[index] = arrayCode[posicion];
            posicion1 = resultadoArray[0];
            posicion2 = resultadoArray[1];
            posicion3 = resultadoArray[2];
            posicion4 = resultadoArray[3];
            fullTry = resultadoArray.join("");
            console.log("El array del codigo es: " + arrayCode)
            console.log("El array resultante es: " + resultadoArray);
            console.log("La posicion 1 es:" + posicion1);
            console.log("La posicion 2 es:" + posicion2);
            console.log("La posicion 3 es:" + posicion3);
            console.log("La posicion 4 es:" + posicion4);
            console.log("La posicion 4 es:" + posicion4);

        });
    });
}
const rowsArray = Array.from(document.querySelectorAll('.fila')).reverse();
console.log(rowsArray);
let rowsArrayIndex = 0;

function performIteration() {
    if (rowsArrayIndex < rowsArray.length) {
        const element = rowsArray[rowsArrayIndex];
        const idIndex = rowsArrayIndex + 1;
        console.log("El indice actual es " + rowsArrayIndex);
        console.log("El elemento actual es " + element);

        // Asignar clases
        document.getElementById(`fila${idIndex}`).classList.remove("tiradaNull");
        document.getElementById(`tiradas${idIndex}`).classList.remove("tiradaInactiva");
        document.getElementById(`tiradas${idIndex}`).classList.add("tiradaActiva");
        document.getElementById(`puntuacion${idIndex}`).classList.add("puntuacionActiva");
        let checkButton = document.getElementById(`comprobacion${idIndex}`);
        puntuacionAct = document.querySelector(".puntuacionActiva")
        const jugadaActiva = document.querySelector(".tiradaActiva");
        const jugada = document.querySelectorAll(".tirada");
        console.log("Esto es la jugada Activa " + jugadaActiva);
        console.log("Esto es la jugada " + jugada.length)
        playerSelcFun(jugadaActiva);

        checkButton.addEventListener('click', () => {
            // Eliminar clases antes de pasar a la siguiente iteración
            const idIndex = rowsArrayIndex;
            document.getElementById(`fila${idIndex}`).classList.add("tiradaNull");
            document.getElementById(`tiradas${idIndex}`).classList.add("tiradaInactiva");
            document.getElementById(`tiradas${idIndex}`).classList.remove("tiradaActiva");
            document.getElementById(`puntuacion${idIndex}`).classList.remove("puntuacionActiva");

            // Actualizar puntuaciones
            checkingPlayerMove(puntuacionAct, posicion1, posicion2, posicion3, posicion4, fullTry);

            // Avanzar a la siguiente iteración
            performIteration();
        });

        rowsArrayIndex++;
        console.log(rowsArrayIndex);
    }
}

performIteration(); // Iniciar la primera iteración al cargar el HTML


// const puntuacionAct = document.querySelector(".puntuacionActiva");
// const posicion1 = resultadoArray[0];
// const posicion2 = resultadoArray[1];
// const posicion3 = resultadoArray[2];
// const posicion4 = resultadoArray[3];
// const fullTry = resultadoArray.join("");
// checkingPlayerMove(posicion1, posicion2, posicion3, posicion4, fullTry,);




// console.log("el codigo1 ganador es:" + Code1);
// console.log("el codigo2 ganador es:" + Code2);
// console.log("el codigo3 ganador es:" + Code3);
// console.log("el codigo4 ganador es:" + Code4);
// console.log("el codigo ganador es:" + winnerCode);

// console.log("el codigo1 jugado es:" + arrayCode[0]);
// console.log("el codigo2 jugado es:" + arrayCode[1]);
// console.log("el codigo3 jugado es:" + arrayCode[2]);
// console.log("el codigo4 jugado es:" + arrayCode[3]);
// console.log("el codigo jugado es:" + result);

// //CHANGING LINE OF MOVE
// const tiradaMove = document.querySelectorAll(".tiradaInactiva")
// const tryMove = document.querySelectorAll(".tirada")
// const ptoMove = document.querySelectorAll(".pto")
