function partidas(vitorias, derrotas){
    let saldoDevitorias = vitorias - derrotas
    return saldoDevitorias
}

let saldoDevitorias = partidas(41,30)
let nivel = ""

if(saldoDevitorias <=10){
    nivel = "Ferro "
}

else if (saldoDevitorias <=20){
    nivel = "Bronze "
}

else if(saldoDevitorias <=50){
    nivel ="Prata "
}

else if(saldoDevitorias <=80){
    nivel = "Ouro "
}

else if(saldoDevitorias <=100){
    nivel = "Lendario "
}

else if(saldoDevitorias >=100){
    nivel = "Imortal"
}

console.log(`o Herói tem saldo de ${saldoDevitorias} está no nivel ${ nivel }`);