let gameResult = sessionStorage.getItem("game result");
let jugador = sessionStorage.getItem("usuario");
let secretMode = sessionStorage.getItem("secret mode");


if (gameResult == 0) {
    document.getElementById("finalMessage").innerText = `LO SIENTO\n ${jugador}\n ¡HAS PERDIDO!`
    document.getElementById("finalAnimation").classList.add("finalAnimationLose");
    document.getElementById("finalOption1").classList.add("inputLvl");
    document.getElementById("finalOption2").classList.add("inputLvl");


}
else {
    document.getElementById("finalMessage").innerText = `ENHORABUENA\n  ${jugador}\n  ¡HAS GANADO!`
    document.getElementById("finalAnimation").classList.add("finalAnimationWin");
    document.getElementById("finalOption1").classList.add("inputLvl");
    document.getElementById("finalOption2").classList.add("inputLvl");
    if (secretMode == 1) {
        document.getElementById("secretMode").classList.add("inputLvl2");
        document.getElementById("secretMode").innerText = "Secret LvL";

    }
}

const saveSecretMode = () => {
    sessionStorage.setItem("nivelSeleccionado", "extreme");
    window.location.href = './mastermind.html';
}