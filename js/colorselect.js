const colorPicked = document.querySelector("#pickerColor");
const selectedColors = document.querySelectorAll(".selectedColor");
let lvlMode = sessionStorage.getItem("nivelSeleccionado");
let colorMode;

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
        colorMode = 4; // Valor por defecto cuando no se encuentra una dificultad válida
        break;
}

let colorCounter = 1;
console.log(colorMode);
console.log(colorCounter);

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
    if (colorCounter > colorMode) {
        colorCounter = 1;
    }
};


















// const colorPicked = document.querySelector("#pickerColor");
// const selectedColors = document.querySelectorAll(".selectedColor");
// let colorMode;
// let lvlMode = sessionStorage.getItem("nivelSeleccionado")

// switch (colorMode) {
//     case "easy":
//         colorMode = 4;
//         break;
//     case "medium":
//         colorMode = 5;
//         break;
//     case "hard":
//         colorMode = 6;
//         break;
//     default: colorMode = 4;
//         break;
// }

// let colorCounter = colorMode;
// console.log(colorMode)
// console.log(colorCounter)

// selectedColors.forEach((selectedColor) => {
//     selectedColor.addEventListener("click", () => {
//         colorPicked.value = "#000000";
//         colorPicked.style.display = "block";
//         colorPicked.oninput = () => {
//             const colorValue = colorPicked.value;
//             selectedColor.style.backgroundColor = colorValue;
//             colorPicked.style.display = "none";
//             colorSave(colorValue);

//         };
//     });
// });


// const colorSave = (colorValue) => {
//     const colorKey = `ColorSelected${colorCounter}`;
//     sessionStorage.setItem(colorKey, colorValue);
//     colorCounter++;
//     if (colorCounter > lvlMode) {
//         colorCounter = 1;
//     }

// };