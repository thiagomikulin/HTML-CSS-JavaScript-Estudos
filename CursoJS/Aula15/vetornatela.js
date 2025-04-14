let num = [5, 8, 2, 9, 3]

for(var pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num){
    console.log(`A posição ${pos} tem o valor de ${num[pos]}`)
}