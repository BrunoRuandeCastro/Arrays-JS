const notas = [10, 9, 8 ,3, 4]
notas.pop()
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length
console.log(`A média do aluno é: ${media}.`)