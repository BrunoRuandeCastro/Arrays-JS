const notas = [ 1, 3 ,10]

const notasAtualizadas = notas.map(nota =>{
    if(nota == 10){
        return nota
    } else {
        return ++nota
    }
})

console.log(notasAtualizadas)