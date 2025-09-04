/*let nome = "Thierry";
let idade = "24";
console.log("Ola, meu nome e " + nome +", tenho "+ idade +" anos.")

let mensagem = `Ola ], meu nome e ${nome}`
//alert(mensagem);

console.log(typeof mensagem); //string
console.log(typeof idade); //number


let profissao;
console.log(typeof profissao)

let endereco = null;
console.log(typeof endereco)

//IF / ELSE

let temperatura = 12;

if(temperatura > 25){
    console.log("Esta calor!")
}
else{
    console.log("Esta frio!")
}

let nomeUsuario = prompt("Digite seu nome: ")
alert("Seu nome e : " + nomeUsuario) 

//IF / ELSE IF / ELSE
let nota = parseInt(prompt("Digite sua nota : "))

if(nota > 6){
    console.log("Aprovado(a)!")
}
else if(nota >= 5){
    console.log("Esta de recuperação.")
}
else{
    console.log("Reprovado(a)!")
}

// IF TERNARIO

let saldo = 90

letpodeComprar = saldo >= 100 ? "Compra aprovada!" : "Saldo insuficiente"

console.log(podeComprar)

else{
    console.log()
}

//CONDICIONAL ANINHADA
//Multiplas verificações

let hora = 13
let diaDaSemana = "terça"

if (hora >= 6 && hora < 12) {
    console.log("Bom dia!")
}
else {
    if (hora >= 12 && hora < 18) {
        if (diaDaSemana == "segunda") {
            console.log("Boa tarde! Otima semana!")
        }
        else{
            console.log("Boa tarde!")
        }
    }
}*/

let dia = 2

switch (dia) {
    case 1:
        console.log("Domingo");
        break;

    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("terca");
        break;
    case 4:
        console.log("quarta");
        break;
    case 5:
        console.log("quinta");
        break;
    case 6:
        console.log("sexta");
        break;
    case 7:
        console.log("sabado");
        break;

    default:
        console.log("dia invalido")
        break;
}