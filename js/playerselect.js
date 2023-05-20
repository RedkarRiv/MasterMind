const nameSave = () => {

    let valor = document.getElementById("inputName").value;
    sessionStorage.setItem("usuario", valor);
    window.location.href = "./levelselect.html";
}



