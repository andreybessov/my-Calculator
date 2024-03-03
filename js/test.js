// const button = document.querySelector('.button')
// const log = () => {
//     const input1 = document.querySelector('#input1')
//     const input2 = document.querySelector('#input2')
//     return alert(Number(input1.value) + Number(input2.value))
// }
// button.addEventListener("click", log);

const summ = document.querySelector('.summ-button');
const subtraction = document.querySelector('.subtraction-button');
const multiplication = document.querySelector('.multiplication-button');
const division = document.querySelector('.division-button');
const sumLog = () => {
    const input1 = parseFloat(document.querySelector('#input1').value)
    const input2 = parseFloat(document.querySelector('#input2').value)
    const result = input1 + input2;
    document.querySelector('#result').innerText = result;
}
const subtractionLog = () => {
    const input1 = parseFloat(document.querySelector('#input1').value)
    const input2 = parseFloat(document.querySelector('#input2').value)
    const result = input1 - input2;
    document.querySelector('#result').innerText = result;
}
const multiplicationLog = () => {
    const input1 = parseFloat(document.querySelector('#input1').value)
    const input2 = parseFloat(document.querySelector('#input2').value)
    const result = input1 * input2;
    document.querySelector('#result').innerText = result;
}
const divisionLog = () => {
    const input1 = parseFloat(document.querySelector('#input1').value)
    const input2 = parseFloat(document.querySelector('#input2').value)
    const result = input1 / input2;
    document.querySelector('#result').innerText = result;
}

summ.addEventListener("click", sumLog);
subtraction.addEventListener("click", subtractionLog);
multiplication.addEventListener("click", multiplicationLog);
division.addEventListener("click", divisionLog);