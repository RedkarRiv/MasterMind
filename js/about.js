const colors = ['#fb0303', '#c503fb', '#0b03fb', '#03fb28', '#d6fb03', '#fb9c03'];
let currentIndex = 0;
const lootText = document.getElementById('aboutTitle');

const changeColors = () => {
    const color = colors[currentIndex % colors.length];
    lootText.style.color = color;
    currentIndex++;
};

// Llamada inicial a la función changeColors()
changeColors();

// Temporizador para cambiar de color cada 3 segundos (3000 milisegundos)
setInterval(changeColors, 2000);