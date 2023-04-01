/* var calc = document.querySelector(".calcBtn")
calc.addEventListener('click', calcular)

function calcular() {
    let taltura = document.querySelector("#altura")
    let tpeso = document.querySelector("#peso")
    let res = document.querySelector("#resultado")
    let msg = document.querySelector("#msg")

    if (taltura.value.length == 0 || taltura.value < 0 || isNaN(taltura.value)) {
        alert('Por favor, digite uma altura válida!')

    } else if (tpeso.value.length == 0 || tpeso.value < 0 || isNaN(tpeso.value)){
        alert('Por favor, digite um peso válido!')

    } else {
        let altura = Number(taltura.value) / 100
        let peso = Number(tpeso.value)
        res.innerHTML = ''

        // Cálculo IMC

        let imc = (peso / Math.pow(altura, 2)).toFixed(2)

        res.innerHTML = `<p>${imc}</p>`

        if (imc <= 18.4) {
            msg.innerHTML = 'Você está abaixo do peso'
        } else if (imc <= 24.9) {
            msg.innerHTML = 'Você está com o peso normal'
        } else if (imc <= 29.9){
            msg.innerHTML = 'Você está com sobrepeso'
        } else if (imc <= 34.9) {
            msg.innerHTML = 'Você está com obesidade grau I'
        } else if (imc <= 39.9) {
            msg.innerHTML = 'Você está com obesidade grau II'
        } else {
            msg.innerHTML = 'Você está com obesidade grau III'
        }
    }
} */

var calc = document.querySelector(".calcBtn")
calc.addEventListener('click', calcular)

function calcular() {
    let altura = Number(document.querySelector("#altura").value) / 100
    let peso = Number(document.querySelector("#peso").value) 
    let res = document.querySelector("#resultado")
    let msg = document.querySelector("#msg")

    if (altura == '' || altura < 0 || isNaN(altura)) {
        alert('Por favor, digite uma altura válida!')

    } else if (peso == '' || peso < 0 || isNaN(peso)){
        alert('Por favor, digite um peso válido!')

    } else {

        // Cálculo IMC

        let imc = (peso / Math.pow(altura, 2)).toFixed(2)

        // Resultado

        res.innerHTML = `<p>${imc}</p>`

        if (imc <= 18.4) {
            msg.innerHTML = 'Você está abaixo do peso'
        } else if (imc <= 24.9) {
            msg.innerHTML = 'Você está com o peso normal'
        } else if (imc <= 29.9){
            msg.innerHTML = 'Você está com sobrepeso'
        } else if (imc <= 34.9) {
            msg.innerHTML = 'Você está com obesidade grau I'
        } else if (imc <= 39.9) {
            msg.innerHTML = 'Você está com obesidade grau II'
        } else {
            msg.innerHTML = 'Você está com obesidade grau III'
        }
    }
}