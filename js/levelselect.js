
const levelSave = (level) => {
    console.log(level);
    sessionStorage.setItem("nivelSeleccionado", level);
    window.location.href = "./colorselect.html";
}