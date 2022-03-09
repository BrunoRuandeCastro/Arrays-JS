const salaPython = ['Juliana', 'Roberto', 'Sandra', 'Eliandra', 'Jorge', 'Bruno', 'Janderson',
'Cesar', 'Ruan', 'Benedito']

const salaJava = ['Humberto', 'Samanta', 'Amanda', 'Flavio', 'Francisco',
'Rafhaela', 'Elisa', 'Joana', 'Pedro', 'Juan']

let salasPalestra = salaPython.concat(salaJava)
console.log(salasPalestra)


// array com dois elementos, um número e um array
// este método não extrai os elementos do array de forma recursiva; 
// ou seja, não vai extrair os elementos de arrays que estejam “aninhados”. 
// Dessa forma, 80 foi extraído do array com sucesso, porém 90 e 100 não,
//  o método considerou [90, 100] como um único elemento.

const arrayOriginal = [50, 60, 70]
const arrayConcat = arrayOriginal.concat([80, [90, 100]])

console.log(arrayConcat)
console.log(arrayOriginal)