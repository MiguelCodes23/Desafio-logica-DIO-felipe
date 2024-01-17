let nomeDoHeroi = "Max"
let xp = 1
let nivelDoheroi = ""

if (xp <= 1000) {
    nivelDoheroi = "Ferro "
}

else if (xp <= 2000) {
    nivelDoheroi = "Bronze "
}

else if (xp <=5000) {
    nivelDoheroi = "Prata "
}

else if (xp <= 7000) {
    nivelDoheroi = "Ouro "
}

else if (xp <= 8000) {
    nivelDoheroi = "Platina "
}

else if (xp <= 9000) {
    nivelDoheroi = "Imortal "
}

else if (xp <= 10000) {
    nivelDoheroi = "Ascendente "
}

else if ( xp >= 10001) {
    nivelDoheroi = "Radiante "
}

console.log ("O heroi " + nomeDoHeroi + " está no nivel " + nivelDoheroi )

