let contador = []
var input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista')
//Esse valor é SÓ pro texto embaixo(Senão não poderiam haver 2 textos iguais)

var x = 0



function addTarefa(){
    var valorInput = input.value;

    if(valorInput !== "" && valorInput !== null && valorInput !== undefined){
        
            //Criação do novo elemento para o main
var novoItem = document.createElement('div')
novoItem.setAttribute('id', `${x}`)
novoItem.setAttribute('class', 'item')
    //icone
var icone = document.createElement('div')
    icone.setAttribute('onclick', `marcarTarefa(${x})`)
    icone.setAttribute('class', 'item-icone')
    //imagem no icone
        var imagem = document.createElement('img')
        imagem.setAttribute('id', `icone_${x}`)
        imagem.setAttribute('src', 'imagens/circle-outline.png')
        imagem.setAttribute('class', 'whatever')
    //tarefa
var nome = document.createElement('div')
    nome.setAttribute('onclick', `marcarTarefa(${x})`)
    nome.setAttribute('class', 'item-nome')
    nome.innerHTML = `${valorInput}`
    //botao delete
var botao = document.createElement('div')
    botao.setAttribute('class', 'item-botao')
        var deleta = document.createElement('button')
        deleta.setAttribute('onclick', `deletar(${x})`)
        deleta.setAttribute('class', 'delete')
        var para = document.createElement('p')
        para.innerHTML = 'Deletar'
            var clica = document.createElement('img')
            clica.setAttribute('src', 'imagens/delete.png')
            

//Appends de cada elemento entre si (cada elemento terá um elemento-pai)

novoItem.appendChild(icone)
icone.appendChild(imagem)
novoItem.appendChild(nome)
novoItem.appendChild(botao)
botao.appendChild(deleta)
deleta.appendChild(clica)
deleta.appendChild(para)
        
        //Valor input tá no contador matriz
        contador.push(x)
        x++


        //Adiciona novo item ao main
        main.appendChild(novoItem)

        input.value= ''
        input.focus()
        
    }else{
        window.alert('Por favor, escreva uma tarefa')
        }
    }
            
        function marcarTarefa(id){
        
        var novoItemClica = document.querySelector(`div.item`)
            novoItemClica.setAttribute('class', 'item-clicado')
        var nomeClica = document.querySelector(`div.item-nome`)
            nomeClica.setAttribute('class', 'txtclicado')
            nomeClica.setAttribute('onclick', `desmarcarTarefa(${x})`)
        var imagemClica = document.querySelector(`img.whatever`)
            imagemClica.setAttribute('src', 'imagens/check-circle.png')
            imagemClica.setAttribute('class', 'check')
        var iconeClica = document.querySelector(`div.item-icone`)
            iconeClica.setAttribute('class', 'item-icone-check')
            iconeClica.setAttribute('onclick', `desmarcarTarefa(${x})`)
            
        }
    

    function deletar(id){
        var tarefa = document.getElementById(id)
        tarefa.remove(id)
    }

    

    function desmarcarTarefa(id){

        var esseItem = document.getElementById(id)
        if(esseItem == x){
        
        var novoItemDesclica = document.querySelector(`div.item-clicado`)
            novoItemDesclica.setAttribute('class', 'item')
        var nomeDesclica = document.querySelector(`div.txtclicado`)
            nomeDesclica.setAttribute('class', 'item-nome')
            nomeDesclica.setAttribute('onclick', `marcarTarefa(${x})`)
        var imagemDesclica = document.querySelector(`img.check`)
            imagemDesclica.setAttribute('src', 'imagens/circle-outline.png')
            imagemDesclica.setAttribute('class', 'whatever')
        var iconeDesclica = document.querySelector(`div.item-icone-check`)
            iconeDesclica.setAttribute('class', 'item-icone')
            iconeDesclica.setAttribute('onclick', `marcarTarefa(${x})`)
        }
    }

    