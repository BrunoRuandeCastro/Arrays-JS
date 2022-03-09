const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0


// i ira retornar o indice de cada uma das listas
// j ira retornar o indice de cada elemento da lista do indice i
// notasGerais ira somar médias das litas de notas
for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}
        //24   //3
media = media/notasGerais.length

console.log(media)