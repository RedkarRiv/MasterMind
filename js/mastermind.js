let A = sessionStorage.getItem("ColorSelected1") ?? "#fc0303";
let B = sessionStorage.getItem("ColorSelected2") ?? "#0602ed";
let C = sessionStorage.getItem("ColorSelected3") ?? "#3ff90b";
let D = sessionStorage.getItem("ColorSelected4") ?? "#c240d4";
let E = sessionStorage.getItem("ColorSelected5") ?? "#04f1ed";
let F = sessionStorage.getItem("ColorSelected6") ?? "#dc6f09";


let lvlMode = sessionStorage.getItem("nivelSeleccionado");
let jugador = sessionStorage.getItem("usuario");
const arrayCode = (lvlMode === "easy") ? [A, B, C, D] : (lvlMode === "medium") ? [A, B, C, D, E] : [A, B, C, D, E, F];


console.log(A);
console.log(B);
console.log(C);
console.log(D);
console.log(jugador);

// SECRET CODE GENERATOR WITH ARRAY

function arrayRandom(defaultCode) {
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




console.log(Code1);
console.log(Code2);
console.log(Code3);
console.log(Code4);
console.log(winnerCode);

// WINNER CODE SHOW

const codeWin1 = document.querySelector("#winCode1");
const codeWin2 = document.querySelector("#winCode2");
const codeWin3 = document.querySelector("#winCode3");
const codeWin4 = document.querySelector("#winCode4");

codeWin1.style.backgroundColor = Code1;
codeWin2.style.backgroundColor = Code2;
codeWin3.style.backgroundColor = Code3;
codeWin4.style.backgroundColor = Code4;