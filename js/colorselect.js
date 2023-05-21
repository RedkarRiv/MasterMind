const colorPicked = document.querySelector("#pickerColor");
const selectedColors = document.querySelectorAll(".selectedColor");
let lvlMode = sessionStorage.getItem("nivelSeleccionado");
let colorMode;
let colorCounter = 1;


// COLOR SELECTED REMARKED

const colorSelections = document.querySelectorAll('.selectedColor');

colorSelections.forEach((colorSelection) => {
    colorSelection.addEventListener('click', () => {
        colorSelections.forEach((colorSel) => {
            colorSel.classList.remove('selectedC');
        });
        colorSelection.classList.add('selectedC');
    });
});

// COLORS SESSIONSTORAGE SAVE COUNTER

switch (lvlMode) {
    case "easy":
        colorMode = 4;
        break;
    case "medium":
        colorMode = 5;
        break;
    case "hard":
        colorMode = 6;
        break;
    default:
        colorMode = 4;
        break;
}

// COLORS SESSIONSTORAGE SAVE

const colorSave = (colorValue) => {
    const colorKey = `ColorSelected${colorCounter}`;
    sessionStorage.setItem(colorKey, colorValue);
    colorCounter++;
    if (colorCounter > colorMode) {
        colorCounter = 1;
    }
};

// SET AND DISPLAY FOR SELECTED COLOR PICKER

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
