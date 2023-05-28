let A = sessionStorage.getItem("ColorSelected1") ?? "#fc0303";
let B = sessionStorage.getItem("ColorSelected2") ?? "#0602ed";
let C = sessionStorage.getItem("ColorSelected3") ?? "#38a01b";
let D = sessionStorage.getItem("ColorSelected4") ?? "#cce816";
let E = sessionStorage.getItem("ColorSelected5") ?? "#dc25c1";
let F = sessionStorage.getItem("ColorSelected6") ?? "#dc6f09";

let puntuacionAct, posicion1, posicion2, posicion3, posicion4, fullTry, checkButton;
let resultadoArray = [undefined, undefined, undefined, undefined];
let lvlModeCount = 10;

// DINAMIC BOARD HARD AND MEDIUM
let lvlMode = sessionStorage.getItem("nivelSeleccionado");
let mediumModeBlock = document.querySelectorAll('.mediumMODE');
let mediumModeTryBlock = document.querySelectorAll('.mediumTRY')
let hardModeBlock = document.querySelectorAll('.hardMODE')
let hardModeTryBlock = document.querySelectorAll('.hardTRY')
let extremeModeBlock = document.querySelectorAll('.extremeMODE')
let extreModeTryBlock = document.querySelectorAll('.extremeTRY')

switch (lvlMode) {
    case "medium":
        mediumModeBlock.forEach((element) => {
            element.classList.add('filaBlock');
        });
        mediumModeTryBlock.forEach((element) => {
            element.classList.add('tiradaBlock');
        });
        lvlModeCount = 8;
        break;
    case "hard":
        hardModeBlock.forEach((element) => {
            element.classList.add('filaBlock');
        });
        hardModeTryBlock.forEach((element) => {
            element.classList.add('tiradaBlock');
        });
        lvlModeCount = 6;
        break;
    case "extreme":
        extremeModeBlock.forEach((element) => {
            element.classList.add('filaBlock');
        });
        extreModeTryBlock.forEach((element) => {
            element.classList.add('tiradaBlock');
        });
        lvlModeCount = 4;
        break;
    default:
        lvlModeCount = 10;
        break;
}

// SECRET CODE GENERATOR WITH ARRAY
let arrayCode = (lvlMode === "easy") ? [A, B, C, D] : (lvlMode === "medium") ? [A, B, C, D, E] : (lvlMode === "hard") ? [A, B, C, D, E] : [A, B, C, D, E, F];

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

let Code1 = secretCode[0].toString();
let Code2 = secretCode[1].toString();
let Code3 = secretCode[2].toString();
let Code4 = secretCode[3].toString();
let winnerCode = Code1 + Code2 + Code3 + Code4;
console.log(winnerCode)
// WINNER CODE SHOW

let codeWin1 = document.querySelector("#winCode1");
let codeWin2 = document.querySelector("#winCode2");
let codeWin3 = document.querySelector("#winCode3");
let codeWin4 = document.querySelector("#winCode4");

const codeWinnerShow = () => {
    codeWin1.classList.remove("SolucionLogo");
    codeWin2.classList.remove("SolucionLogo");
    codeWin3.classList.remove("SolucionLogo");
    codeWin4.classList.remove("SolucionLogo");
    codeWin1.style.backgroundColor = Code1;
    codeWin2.style.backgroundColor = Code2;
    codeWin3.style.backgroundColor = Code3;
    codeWin4.style.backgroundColor = Code4;
}

// // CHECKING PLAYER MOVE
const checkingPlayerMove = (puntuacionAct, posicion1, posicion2, posicion3, posicion4, fullTry) => {
    const scoreMove = puntuacionAct.querySelectorAll(".score");
    console.log("La posicion 1 es:" + posicion1);
    console.log("La posicion 2 es:" + posicion2);
    console.log("La posicion 3 es:" + posicion3);
    console.log("La posicion 4 es:" + posicion4);
    if (!posicion1 || !posicion2 || !posicion3 || !posicion4) {
        return;
    }

    if (fullTry === winnerCode) {
        codeWinnerShow();
        sessionStorage.setItem("game result", 1)
        if (lvlMode == "hard") {
            sessionStorage.setItem("secret mode", 1);
        } else {
            sessionStorage.setItem("secret mode", 0);
        }
        scoreMove[0].style.backgroundColor = "red";
        scoreMove[1].style.backgroundColor = "red";
        scoreMove[2].style.backgroundColor = "red";
        scoreMove[3].style.backgroundColor = "red";

        setTimeout(() => {
            window.location.href = "./final.html";
        }, 500);
        return;
    }
    else {
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
            // console.log("El array del codigo es: " + arrayCode)
            // console.log("El array resultante es: " + resultadoArray);
        });
    });
}
const rowsArray = Array.from(document.querySelectorAll('.fila')).reverse();
console.log(rowsArray);
let rowsArrayIndex = 0;

const performIteration = () => {
    if (rowsArrayIndex < lvlModeCount) {
        if (fullTry !== winnerCode) {


            const idIndex = rowsArrayIndex + 1;
            // console.log("El indice actual es " + rowsArrayIndex);
            // console.log("El elemento actual es " + element);

            // Asignar clases
            document.getElementById(`fila${idIndex}`).classList.remove("tiradaNull");
            document.getElementById(`tiradas${idIndex}`).classList.remove("tiradaInactiva");
            document.getElementById(`tiradas${idIndex}`).classList.add("tiradaActiva");
            document.getElementById(`puntuacion${idIndex}`).classList.add("puntuacionActiva");
            let checkButton = document.getElementById(`comprobacion${idIndex}`);
            puntuacionAct = document.querySelector(".puntuacionActiva")
            const jugadaActiva = document.querySelector(".tiradaActiva");

            playerSelcFun(jugadaActiva);

            checkButton.addEventListener('click', () => {
                if (!posicion1 || !posicion2 || !posicion3 || !posicion4) {
                    return;
                } else {
                    // Eliminar clases antes de pasar a la siguiente iteración
                    const idIndex = rowsArrayIndex;
                    document.getElementById(`fila${idIndex}`).classList.add("tiradaNull");
                    document.getElementById(`tiradas${idIndex}`).classList.add("tiradaInactiva");
                    document.getElementById(`tiradas${idIndex}`).classList.remove("tiradaActiva");
                    document.getElementById(`puntuacion${idIndex}`).classList.remove("puntuacionActiva");

                    // Actualizar puntuaciones
                    checkingPlayerMove(puntuacionAct, posicion1, posicion2, posicion3, posicion4, fullTry);
                    posicion1 = undefined;
                    posicion2 = undefined;
                    posicion3 = undefined;
                    posicion4 = undefined;
                    resultadoArray = [undefined, undefined, undefined, undefined];
                    arrayCode = (lvlMode === "easy") ? [A, B, C, D] : (lvlMode === "medium") ? [A, B, C, D, E] : [A, B, C, D, E, F];
                    // Avanzar a la siguiente iteración
                    performIteration();
                }
            });
            rowsArrayIndex++;
            console.log(rowsArrayIndex);
        }
    }

    else {
        checkingPlayerMove(puntuacionAct, posicion1, posicion2, posicion3, posicion4, fullTry);
        codeWinnerShow();
        sessionStorage.setItem("game result", 0);
        sessionStorage.setItem("secret mode", 0);
        setTimeout(() => {
            window.location.href = "./final.html";
        }, 1000); // Se establece un retraso mínimo de 0 milisegundos

        return;
    }
}
performIteration(); // Iniciar la primera iteración al cargar el HTML
