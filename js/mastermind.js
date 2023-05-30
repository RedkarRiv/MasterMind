let A = sessionStorage.getItem("ColorSelected1") ?? "#fc0303";
let B = sessionStorage.getItem("ColorSelected2") ?? "#0602ed";
let C = sessionStorage.getItem("ColorSelected3") ?? "#38a01b";
let D = sessionStorage.getItem("ColorSelected4") ?? "#cce816";
let E = sessionStorage.getItem("ColorSelected5") ?? "#dc25c1";
let F = sessionStorage.getItem("ColorSelected6") ?? "#dc6f09";

let scoreAct, position1, position2, position3, position4, fullTry, checkButton;
let resultArray = [undefined, undefined, undefined, undefined];
let lvlModeCount = 10;

// DINAMIC BOARD HARD AND MEDIUM (AND A SECRET LVL)
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

// WINNER CODE SHOW

let codeWin1 = document.querySelector("#winCode1");
let codeWin2 = document.querySelector("#winCode2");
let codeWin3 = document.querySelector("#winCode3");
let codeWin4 = document.querySelector("#winCode4");

const codeWinnerShow = () => {
    codeWin1.classList.remove("solutionLogo");
    codeWin2.classList.remove("solutionLogo");
    codeWin3.classList.remove("solutionLogo");
    codeWin4.classList.remove("solutionLogo");
    codeWin1.style.backgroundColor = Code1;
    codeWin2.style.backgroundColor = Code2;
    codeWin3.style.backgroundColor = Code3;
    codeWin4.style.backgroundColor = Code4;
}

// // CHECKING PLAYER MOVE
const checkingPlayerMove = (scoreAct, position1, position2, position3, position4, fullTry) => {
    const scoreMove = scoreAct.querySelectorAll(".score");
    if (!position1 || !position2 || !position3 || !position4) {
        return;
    }
    if (fullTry === winnerCode) {
        codeWinnerShow();
        sessionStorage.setItem("game result", 1);
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
        if (position1 == Code1) {
            scoreMove[3].style.backgroundColor = "red";
        } else if (winnerCode.includes(position1)) {
            scoreMove[3].style.backgroundColor = "white";
        } else {
            scoreMove[3].style.backgroundColor = "black";
        }

        if (position2 == Code2) {
            scoreMove[1].style.backgroundColor = "red";
        } else if (winnerCode.includes(position2)) {
            scoreMove[1].style.backgroundColor = "white";
        } else {
            scoreMove[1].style.backgroundColor = "black";
        }

        if (position3 == Code3) {
            scoreMove[2].style.backgroundColor = "red";
        } else if (winnerCode.includes(position3)) {
            scoreMove[2].style.backgroundColor = "white";
        } else {
            scoreMove[2].style.backgroundColor = "black";
        }

        if (position4 == Code4) {
            scoreMove[0].style.backgroundColor = "red";
        } else if (winnerCode.includes(position4)) {
            scoreMove[0].style.backgroundColor = "white";
        } else {
            scoreMove[0].style.backgroundColor = "black";
        }
    }
};

// PLAYER SELECTOR
const playerSelcFun = (tryActive) => {
    const playerSelectorActive = tryActive.querySelectorAll(".try");
    playerSelectorActive.forEach((element, index = 0) => {
        let currentIndex = 0;
        element.addEventListener("click", (event) => {
            const position = currentIndex % arrayCode.length;
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = arrayCode.length - 1;
            }
            element.style.backgroundColor = arrayCode[position];
            resultArray[index] = arrayCode[position];
            position1 = resultArray[0];
            position2 = resultArray[1];
            position3 = resultArray[2];
            position4 = resultArray[3];
            fullTry = resultArray.join("");
        });
    });
}
const rowsArray = Array.from(document.querySelectorAll('.row')).reverse();
let rowsArrayIndex = 0;

const performIteration = () => {
    if (rowsArrayIndex < lvlModeCount) {
        if (fullTry !== winnerCode) {
            const idIndex = rowsArrayIndex + 1;
            document.getElementById(`row${idIndex}`).classList.remove("tryNull");
            document.getElementById(`tries${idIndex}`).classList.remove("inactiveTry");
            document.getElementById(`tries${idIndex}`).classList.add("activeTry");
            document.getElementById(`puntuation${idIndex}`).classList.add("scoreActive");
            let checkButton = document.getElementById(`comprobation${idIndex}`);
            scoreAct = document.querySelector(".scoreActive")
            const tryActive = document.querySelector(".activeTry");
            playerSelcFun(tryActive);
            checkButton.addEventListener('click', () => {
                if (!position1 || !position2 || !position3 || !position4) {
                    return;
                } else {
                    const idIndex = rowsArrayIndex;
                    document.getElementById(`row${idIndex}`).classList.add("tryNull");
                    document.getElementById(`tries${idIndex}`).classList.add("inactiveTry");
                    document.getElementById(`tries${idIndex}`).classList.remove("activeTry");
                    document.getElementById(`puntuation${idIndex}`).classList.remove("scoreActive");
                    checkingPlayerMove(scoreAct, position1, position2, position3, position4, fullTry);
                    position1 = undefined;
                    position2 = undefined;
                    position3 = undefined;
                    position4 = undefined;
                    resultArray = [undefined, undefined, undefined, undefined];
                    arrayCode = (lvlMode === "easy") ? [A, B, C, D] : (lvlMode === "medium") ? [A, B, C, D, E] : [A, B, C, D, E, F];
                    performIteration();
                }
            });
            rowsArrayIndex++;
        }
    }

    else {
        checkingPlayerMove(scoreAct, position1, position2, position3, position4, fullTry);
        codeWinnerShow();
        sessionStorage.setItem("game result", 0);
        sessionStorage.setItem("secret mode", 0);
        setTimeout(() => {
            window.location.href = "./final.html";
        }, 500); 

        return;
    }
}
performIteration(); 