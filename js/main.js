
// Crea una función que reciba 2 números y un callback e invoque ese
// callback tras 1 segundo con la suma de los números como argumento.


const sumar = (a,b,cb()) => {
setTimeout(() => {
    callback()
}, 1000);

};

const callback = (a,b) => {
    console.log(a+b);
}