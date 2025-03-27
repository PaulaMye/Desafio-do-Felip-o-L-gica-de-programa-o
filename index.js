let nomeHeroi = "Kratos"

let nivelHeroi = 3500

let nivelFerro = 1000
let nivelBronze = 2000
let nivelPrata = 5000
let nivelOuro = 7000
let nivelPlatina = 8000
let nivelAscendente = 9000
let nivelImortal = 10000
let nivelRadiante = 10001


switch (nivelHeroi){
    case (nivelHeroi):
    if (nivelHeroi <= 1000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível Ferro")}
    else if (nivelHeroi <= 2000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível Bronze")  
    }
    else if (nivelHeroi <= 5000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível Prata")  
    }
    else if (nivelHeroi <= 7000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível Ouro")  
    }
    else if (nivelHeroi <= 8000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível Platina")  
    }
    else if (nivelHeroi <= 9000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível Ascendente")  
    }
    else if (nivelHeroi <= 10000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível Imortal")  
    }
    else if(nivelHeroi >= 10001){
        console.log("O Herói de nome " + nomeHeroi + " está no nível Radiante")  
    }
}

