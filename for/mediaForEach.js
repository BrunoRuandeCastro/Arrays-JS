const notas = [10, 10, 3, 5]

let somaDasNotas = 0;

notas.forEach (nota =>{
    somaDasNotas += nota
})

let media = somaDasNotas/notas.length

console.log(media)