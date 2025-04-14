function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano || fano.value.length == null || fano.value.length == undefined){
        window.alert('ERRO! Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 12){
                // Criança homem
                img.setAttribute('src', 'img/Criança/Menino.png')
            }else if(idade >= 12 && idade <18){
                // Jovem homem
                img.setAttribute('src', 'img/Jovem/Homem.png')
            }else if(idade >= 18 && idade <60){
                // Adulto homem
                img.setAttribute('src', 'img/Adulto/Homem.png')
            }else{
                // Idoso homem
                img.setAttribute('src', 'img/Idoso/Homem.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                // Criança mulher
                img.setAttribute('src', 'img/Criança/Menina.png')
            }else if(idade >= 12 && idade <18){
                // Jovem mulher
                img.setAttribute('src', 'img/Jovem/Mulher.png')
            }else if(idade >= 18 && idade <60){
                // Adulto mulher
                img.setAttribute('src', 'img/Adulto/Mulher.png')
            }else{
                // Idoso mulher
                img.setAttribute('src', 'img/Idoso/Mulher.png')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}