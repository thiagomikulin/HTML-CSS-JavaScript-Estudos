
//inserindo um texto no parágrafo

/*
Comento aqui
em várias linhas
*/

function Verificacao() {
    var texto = document.getElementById("texto").value;


    if (texto == "" || texto == null) {
        var mensagem = document.getElementById("mensagem");
        mensagem.innerHTML = "O campo não pode ser vazio";
        mensagem.style.color = "red";
    } else {
        var mensagem = document.getElementById("mensagem");
        mensagem.innerHTML = "Tudo certo";
        mensagem.style.color = "green";
    }
}

function verificaCor() {
    var cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();

    switch (cor) {
        case "azul":
            document.body.style.backgroundColor = "blue"
            break;
        case "vermelho":
            document.body.style.backgroundColor = "red"
            break;
        case "verde":
            document.body.style.backgroundColor = "green"
            break;
        default:
            document.body.style.backgroundColor = "white"
            break;

    }
}

function diaDaSemana() {
    var dia = new Date().getDay();
}

for (let i = 0; i < 101; i++) {
    document.getElementById("100").innerHTML += i + ", "
}



function ativarContagem() {
    document.getElementById('tempo').innerHTML = "Começou a contar!"

    // ATIVA A FUNÇÃO APENAS 1 VEZ QUANDO DER O TEMPO ESPECIFICADO
    tempo = setTimeout(function () {
        document.getElementById('tempo').innerHTML = "Executou o setTimeout";
    }, 5000);
}

function pararContagem() {
    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML = "Parou a contagem";
}

function ativarContagem1() {
    tempo1 = setInterval(function () {
        var cronometro = document.getElementById('tempo1').innerHTML;
        var soma = parseInt(cronometro) + 1
        document.getElementById('tempo1').innerHTML = soma;
}, 1000)
}

function pararContagem1() {
    clearInterval(tempo1);
    
}



function buscarCEP() {
    let input = document.getElementById('cep').value;

     const ajax = new XMLHttpRequest();
     ajax.open('GET', 'https://viacep.com.br/ws/'+ input +'/json/');
     ajax.send();

     ajax.onload = function () {
        // document.getElementById('texto1').innerHTML = this.responseText;


        let obj = JSON.parse(this.responseText);
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;

        document.getElementById("texto1").innerHTML = "Logradouro: " + logradouro+"<br> Cidade: "+cidade+"<br> Estado: "+estado;
     }

}