const minhasNotas = [9.4, 4.4, 10, 0, 2]

let somaDasNotas = 0;

/* o valor do indice de cada elemento da lista "minhasNotas"
é somado e atribuido repetidamente, com o indice "i", a variavel "somaDasNotas" */

for (let i = 0; i < minhasNotas.length; i++){
    somaDasNotas += minhasNotas[i];
}

let media = somaDasNotas/minhasNotas.length

console.log(`Sua média da matéria é: ${media}`)


function imprimeResultado (media){
if (media >= 7){
    return "Você passou, seu pragão!"
}else {
    return "Infelizmente... Você está reprovado!"
}
}

imprimeResultado()

console.log(imprimeResultado(media))

