const alunos = ['Juliana', 'Roberto', 'Sandra', 'Eliandra']
const notas = [1,10,2,4]

let notasEAlunos = [alunos,notas]

const retornaNotaDeAlunos = (nomeDeAluno) =>{
    //  verifica se o nome requerido existe
    if (notasEAlunos[0].includes(nomeDeAluno)){
        // entao guarda o indice do nome requerido.
        let indice = notasEAlunos[0].indexOf(nomeDeAluno)

        return `${notasEAlunos[0][indice]} sua nota final é: ${notasEAlunos[1][indice]}.`
    } else{
        return 'Este aluno não está cadastrado! Verifique o nome.'
    }
}

console.log(retornaNotaDeAlunos('Eliandra'))