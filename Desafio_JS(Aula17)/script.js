function calc(){ //função que é ativada quando o usuário clica no botão
    var n1 = parseFloat (document.getElementById('n1').value); //o número digitado no n1 vem para ca
    var n2 = parseFloat (document.getElementById('n2').value); //o número digitado no n2 vem para ca

    var soma = somaValue(n1, n2); //a operação de soma é puxada nessa variavel
    var sub = subValue(n1, n2); //a operação de subtração é puxada nessa variavel
    var mult = multValue(n1, n2); //a operação de mutiplicação é puxada nessa variavel
    var div = diValue(n1, n2); //a operação de divisão é puxada nessa variavel

    var select = document.getElementById('op'); //essa váriavel pega tudo que tem dentro do Select
	var op = select.options[select.selectedIndex].value; // a OP pegea o 'value' de dentro do Select,
    //fazendo mais a frente uma validação e a escolha do calculo que foi escolhido pelo usuário

    // aq é feito a verificação, dependendo do que o usuário marcar no campo "select"
    // uma conta é feita
    if(op == '+'){ //caso o OP for igual a "+" uma soma entre o primeiro número e o segundo é feita
        document.getElementById('res').innerHTML = `<br>O resultado da soma é ${soma}`
    } else if(op == '-'){ //caso o OP for igual a "-" uma subtração entre o primeiro número e o segundo é feita
        document.getElementById('res').innerHTML = `<br>O resultado da subtração é ${sub}`;
    } else if(op == '*'){ //caso o OP for igual a "*" uma multiplicação entre o primeiro número e o segundo é feita
        document.getElementById('res').innerHTML = `<br>O resultado da multiplicação é ${mult}`;
    } else if(op == '/'){ //caso o OP for igual a "/" uma divisão entre o primeiro número e o segundo é feita
        document.getElementById('res').innerHTML = `<br>O resultado da divisão é ${div}`; 
    }
}


//funções utilizadas para realizar os calculos, ela são puxadas para dentro da function Calc
function somaValue(p1, p2){
    return p1 + p2;
}

function subValue(p1, p2){
    return p1 - p2;
}

function multValue(p1, p2){
    return p1 * p2;
}

function diValue(p1, p2){
    return p1 / p2;
}











