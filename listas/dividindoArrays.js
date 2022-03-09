const nomes = ['Juliana', 'Roberto', 'Sandra', 'Eliandra', 'Jorge', 'Bruno', 'Janderson',
'Cesar', 'Ruan', 'Benedito', 'Humberto', 'Samanta', 'Amanda', 'Flavio', 'Francisco',
'Rafhaela', 'Elisa', 'Joana', 'Pedro', 'Juan']

console.log(nomes.length)

const turmaPrimeiroA = nomes.slice(10,nomes.length/2)
const turmaPrimeiroB = nomes.slice(nomes.length/2)


console.log(`O 1º Ano A é composto por: ${turmaPrimeiroA}`)
console.log(`O 1º Ano B é composto por: ${turmaPrimeiroB}`)


