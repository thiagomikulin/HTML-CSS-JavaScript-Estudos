

function carregar(){
    var hora = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    var horaEMinuto = horas + ":" + data.getMinutes()
    hora.innerHTML = `Agora são ${horaEMinuto} da `

    if (horas >= 6 && horas <12){
        img.src = 'img/manhaOficial.jpg'
        document.body.style.backgroundColor = "#82A838"
        hora.innerHTML += "manhã"
    }else if(horas >= 12 && horas < 18){
        img.src = 'img/tardeoficial.jpg'
        document.body.style.backgroundColor = "rgb(236, 142, 66)"
        hora.innerHTML += "tarde"
    }else if (horas >=18 && horas <=24){
        img.src = 'img/noiteoficial.jpg'
        document.body.style.backgroundColor = "#060502"
        hora.innerHTML += "noite"
    }else{
        img.src = 'img/noiteoficial.jpg'
        document.body.style.backgroundColor = "gray"
        hora.innerHTML += "madrugada"
    }

}
