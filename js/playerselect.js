const nameSave = () => {
    let valor = document.getElementById("inputName").value;
    if (!valor) {
        valor = "El/La jugador/a";
    }
    localStorage.setItem("usuario", valor);
    window.location.href = "./levelselect.html";
};


