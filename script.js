var parImparDigitado = document.querySelector('#nInteiro');
const btnParImpar = document.querySelector('#par__impar');
const btnMaior = document.querySelector('#qualMaior');

btnParImpar.addEventListener('click', () => {

    var value = parImparDigitado.value;

    value = value%2;

    if(value == 0){
        console.log("Par")
    }
    else if(value == 1){
        console.log("Impar")
    }
    else{
        console.log("Valor invalido")
    }
})

btnMaior.addEventListener('click', () => {
    var num1 = document.querySelector('#nMM1').value;
    var num2 = document.querySelector('#nMM2').value;

    if(num1 < num2){
        console.log("O segundo número é maior")
    }
    else if(num1 > num2){
        console.log("O primeiro número é maior")
    }
    else if(num1 == num2){
        console.log("Os valores são iguais")
    }
    else{
        console.log("Valor invalido")
    }
})

