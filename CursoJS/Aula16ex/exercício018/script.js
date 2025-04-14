let num = document.getElementById('txtn')
let sel = document.getElementById('sel')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n,l) {
    if (l.indexOf(Number(n)) != -1){
       return true 
    }else{
        return false
    }
}

function adicionar(){
    if (num.value.length == 0){
        window.alert('Favor preencha um número')
    }else if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var numero = Number(num.value)
        var add = document.createElement('option')
        add.innerHTML = `Valor ${numero} adicionado`
        sel.appendChild(add)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }

    num.value = ""
    num.focus()
}

function analisar(){
    
    var maior = valores[0]
    var menor = valores[0]
    var soma = 0
    var media = 0

    for(let pos in valores) {
        soma += valores[pos]
        if (valores[pos] > maior)
        maior = valores[pos]
        if (valores[pos] < menor)
        menor = valores[pos]
    }
    
    media = soma / valores.length

    if(valores.length == 0){
        window.alert("Adicione valores antes de finalizar")
    }else if(valores.length == 1){
        window.alert("Favor preencha mais um número")
    }else{
    res.innerHTML = `No total, há ${valores.length} números cadastrados<br>
    O maior número é ${maior}<br>
    O menor número é ${menor}<br>
    A soma dos valores é ${soma}<br>
    A média dos valores é ${media}`
}
}