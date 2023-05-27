let gameResult = sessionStorage.getItem("game result");
console.log(gameResult)
let jugador = sessionStorage.getItem("usuario");
console.log(jugador)
let secretMode = sessionStorage.getItem("secret mode");
console.log(secretMode)


if (gameResult == 0) {
    document.getElementById("finalMessage").innerText = `LO SIENTO\n ${jugador}\n ¡HAS PERDIDO!`
    document.getElementById("finalAnimation").classList.add("finalAnimationLose");

}
else {
    document.getElementById("finalMessage").innerText = `ENHORABUENA\n  ${jugador}\n  ¡HAS GANADO!`
    document.getElementById("finalAnimation").classList.add("finalAnimationWin");
    if (secretMode == 1) {

    }

}