const salaJS = [10,10,9]
const salaJava = [10,10,9,1]
const salaPython = [10,10,9,7,8]

function mediaSala(notasDaSala){                      //começando com o valor zero"0"
    const somaDasNotas = notasDaSala.reduce((acum, atual) => {
    return acum + atual},0)
    return somaDasNotas/notasDaSala.length
}

console.log(`A média da sala de JS é: ${mediaSala(salaJS)}`)
console.log(`A média da sala de Java é: ${mediaSala(salaJava)}`)
console.log(`A média da sala de Python é: ${mediaSala(salaPython)}`)



const notas = [3,9,10]

const media = notas.reduce((acum, atual)=>{
    return atual + acum
}, 0)/notas.length
console.log(`A média é: ${media}`)

