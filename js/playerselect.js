const nameSave = () => {
    let valor = document.getElementById("inputName").value;
    if (!valor) {
        valor = "EL/LA JUGADOR/A";
    }
    sessionStorage.setItem("usuario", valor);
    window.location.href = "./levelselect.html";
};


