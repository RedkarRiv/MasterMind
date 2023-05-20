const colorPicked = document.querySelector("#pickerColor");
const selectedColors = document.querySelectorAll(".selectedColor");
let colorCounter = 1;

selectedColors.forEach((selectedColor) => {
    selectedColor.addEventListener("click", () => {
        colorPicked.value = "#000000";
        colorPicked.style.display = "block";
        colorPicked.oninput = () => {
            const colorValue = colorPicked.value;
            selectedColor.style.backgroundColor = colorValue;
            colorPicked.style.display = "none";
            colorSave(colorValue);

        };
    });
});


const colorSave = (colorValue) => {
    const colorKey = `ColorSelected${colorCounter}`;
    sessionStorage.setItem(colorKey, colorValue);
    colorCounter++;
    if (colorCounter > 4) {
        colorCounter = 1;
    }

};