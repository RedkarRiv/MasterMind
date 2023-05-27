let A = sessionStorage.getItem("ColorSelected1") ?? "#fc0303";
let B = sessionStorage.getItem("ColorSelected2") ?? "#0602ed";
let C = sessionStorage.getItem("ColorSelected3") ?? "#3ff90b";
let D = sessionStorage.getItem("ColorSelected4") ?? "#c240d4";
let E = sessionStorage.getItem("ColorSelected5") ?? "#04f1ed";
let F = sessionStorage.getItem("ColorSelected6") ?? "#dc6f09";
let jugador = sessionStorage.getItem("usuario");


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

// // SALTO DE FILA



// for (let i = 0; i < rowsArrayClass.length; i++) {
//     let row = rowsArrayClass[i];


// PLAYER MOVE SELECTOR
let resultadoArray = [];
let posicion1, posicion2, posicion3, posicion4, fullTry;
const jugadaActiva = document.querySelector(".tiradaActiva")
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
        console.log("Esta es la posicion1 " + posicion1);
        console.log("Esta es la posicion2 " + posicion2);
        console.log("Esta es la posicion3 " + posicion3);
        console.log("Esta es la posicion4 " + posicion4);
    });
});
let checkButton = document.getElementById("comprobacion1");

// CHECKING MOVE PLAYER
const checkingPlayerMove = (posicion1, posicion2, posicion3, posicion4, fullTry) => {
    const puntuacionAct = document.querySelector(".puntuacionActiva")
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

const rowsArray = Array.from(document.querySelectorAll('.fila'));
console.log(rowsArray)
// let currentI = rowsArray.length - 1;

for (i = 9; i >= 0; i--) {
    console.log(rowsArray[i]);
}





// checkButton.addEventListener("click", () => {


checkButton.addEventListener('click', () => {
    console.log("Esta es la posicion1 " + posicion1);
    console.log("Esta es la posicion2 " + posicion2);
    console.log("Esta es la posicion3 " + posicion3);
    console.log("Esta es la posicion4 " + posicion4);
    checkingPlayerMove(posicion1, posicion2, posicion3, posicion4, fullTry);
});



// checkButton.addEventListener("click", checkFullTry);

// checkButton.addEventListener('click', activateRows);



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
