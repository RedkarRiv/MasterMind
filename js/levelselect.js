
const levelSave = (level) => {
    sessionStorage.setItem("nivelSeleccionado", level);
    window.location.href = './colorselect.html';
}