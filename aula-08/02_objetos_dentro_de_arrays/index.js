// const aluno1 = {
//   nome: "Zé",
//   idade: 25,
//   cpf: "123.456.789-01"
// }

// const aluno2 = {
//   nome: "Maria",
//   idade: 27,
//   cpf: "123.456.789-02"
// }

// const alunos = [aluno1, aluno2]

const alunos = [
  {
    nome: "Zé",
    // fortemente desencorajado de criar propriedades com caracteres
    // especiais (ç, acentos, espaços) como visto abaixo
    // "endereço residencial": "Rua X",
    idade: 20,
    cpf: "123.456.789-01",
  }, 
  {
    nome: "Maria",
    idade: 27,
    cpf: "123.456.789-02",
  },
]

alunos.push(
  {
    nome: "Carla",
    idade: 31,
    cpf: "123.456.789-03",
  },
)

for (let aluno of alunos) {
  const chave = "nome"
  
  console.log(aluno)
  // console.log(aluno.nome)
  console.log(aluno[chave])
  // console.log(aluno["endereço residencial"])
}