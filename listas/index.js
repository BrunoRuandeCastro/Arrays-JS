const notas = [10,1,7,10,4]

let media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) /notas.length 


function imprimeResultado(media){
    if(media >= 7){
        return "Parabéns, você foi aprovado!"
    } else{
        return "Reprovado! Permaneça na mesma série por mais um ano!"
    }
}
imprimeResultado()

console.log(imprimeResultado(media))

