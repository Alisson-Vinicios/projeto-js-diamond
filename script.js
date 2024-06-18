var parImparDigitado = document.querySelector('#nInteiro');
const btnParImpar = document.querySelector('#par__impar');
const btnMaior = document.querySelector('#qualMaior');
const btnVotar = document.querySelector('#podeVotar');
const btnCalculadoraSalario = document.querySelector('#calculadorSalario');
const btnCalcularDia = document.querySelector('#calcularDia');
const btnChecarNumeros = document.querySelector('#checarNumeros');
const btnSomarAnteriores = document.querySelector('#somarAnterioresNumeros');
const btnMostrarAnterioresImpares = document.querySelector('#imparAnteriores');
const btnSepararSomar30 = document.querySelector('#separarNumeros');
const btnSepararNumerosMaior50 = document.querySelector('#separarNumerosMaior50');

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

btnVotar.addEventListener('click', () => {
    var anoNasc = document.querySelector('#dataNascimento').value;
    console.log(anoNasc);
    var [ano, mes, dia] = anoNasc.split('-').map(Number);
    var votacao = 2024 - ano;
    if(votacao >= 18){
        console.log("Apto a votar");
    }
    else{
        console.log("Você ainda não tem idade suficiente para votar");
    }
})

btnCalculadoraSalario.addEventListener('click', () => {
    var valorSalarioAtual = document.querySelector('#salarioAtual').value;
    var porcentagemAplicada = document.querySelector('#porcentagemReajuste').value;

    var porcentagem = porcentagemAplicada/100;
    var salarioPorcentagem = porcentagem * valorSalarioAtual;
    var salarioTotal = parseFloat(valorSalarioAtual) + parseFloat(salarioPorcentagem);
    
    console.log(salarioTotal);
})

btnCalcularDia.addEventListener('click', () => {
    let listaDiasSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    let diaMenos = document.querySelector('#numero17').value;
    let dia = parseInt(diaMenos) - 1;
    console.log(listaDiasSemana[dia]);
})

btnChecarNumeros.addEventListener('click', () => {
    let numeroDesejado = document.querySelector('#numeroParaChegar').value;
    parseInt(numeroDesejado);
    console.log(numeroDesejado)
    for(var i = 0; i <= numeroDesejado; i++){
        console.log(i);
    }
})

btnSomarAnteriores.addEventListener('click', () => {
    let numeroEscolhido = document.querySelector('#numeroParaSomar').value;
    var aux = 0;
    parseInt(numeroEscolhido);
    console.log(numeroEscolhido);
    for(var i = 0; i <= numeroEscolhido - 1; i++){
        aux = parseInt(aux) + parseFloat(i);
    }
    console.log(aux);
})

btnMostrarAnterioresImpares.addEventListener('click', () => {
    let numeroDesejado8 = document.querySelector('#numeroInteiro8').value;
    for(var i = 0; i <= numeroDesejado8 - 1; i++){
        parseInt(i);
        if((i%2) === 1){
            console.log(i);
        }
    }
})

btnSepararSomar30.addEventListener('click', () => {
    var stringSeparada = document.querySelector('#numeroComTraco').value;
    var arrayStringSeparada = stringSeparada.split('-');
    var soma = 0;
    console.log(arrayStringSeparada);
    for(var i = 0; i < arrayStringSeparada.length; i++){
        
        if(soma + parseInt(arrayStringSeparada[i]) <= 30){
            soma += parseInt(arrayStringSeparada[i]);
        }  
    }
    console.log(soma);
})

btnSepararNumerosMaior50.addEventListener('click', () => {
    var stringComBarra = document.querySelector('#numeroComBarra').value;
    var arrayStringComBarra = stringComBarra.split('/');
    var contador = 0;
    console.log(arrayStringComBarra);

    for(var i = 0; i < arrayStringComBarra.length; i++){
        if(parseInt(arrayStringComBarra[i]) >= 50){
            contador++;
            console.log(arrayStringComBarra[i]);
        }  
    }
    console.log('Existem essa quantidade de números maiores que 50:', contador);
})
