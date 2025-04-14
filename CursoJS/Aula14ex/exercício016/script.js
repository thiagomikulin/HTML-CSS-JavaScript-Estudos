
// FUNÇÃO CONTAR
function contar(){

    // VAR DE CONEXÃO COM HTML
let inicio = document.getElementById('inicio')
let fim = document.getElementById('fim')
let passo = document.getElementById('passo')
var res = document.getElementById('res')




    // SE QUALQUER NÚMERO FOR INVÁLIDO
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('ERRO! Faltam dados')
        res.innerHTML = "Impossível contar"
    }else {
        res.innerHTML = "Contando: <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        //CONTAGEM CRESCENTE
        if (i < f){
        for(let c = i; c <= f; c+=p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
        }else {
            //CONTAGEM DECRESCENTE
        for(let c = i; c >= f; c-=p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
        }
    }
    res.innerHTML += `\u{1F3C1}`
    }
