const nomes = ['Bruninho', 'Joana', 'Bernadete', 'São São']
const notas = [10, 2, 5, 7]

const reprovados = nomes.filter((alunos,indice)=>notas[indice] <=6 )

console.log(reprovados)