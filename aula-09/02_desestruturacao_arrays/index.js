  // const alunas = ['Carla', 'Joaquina', 'Maria', 'Juliana']
  // const [primeiraAluna, segundaAluna, terceiraAluna, quartaAluna, quintaAluna] = alunas
  // console.log(alunas)
  // console.log(primeiraAluna)
  // console.log(segundaAluna)
  // console.log(terceiraAluna)
  // console.log(quartaAluna)
  // console.log(quintaAluna)

const pessoas = [
  "Ana Peres",
  "Fulano de Almeida",
  "Maria Silva",
  "Carla Silva",
  "Carlos de Almeida",
  "Zé Silva",
]

const contagemDeSobrenomes = {}

for (let pessoa of pessoas) {
  const pessoaArray = pessoa.split(" ") // transforma string em array
  const [nome, ...sobrenomeArray] = pessoaArray

  const sobrenome = sobrenomeArray.join(" ")  // transforma array em string

  // if (!contagemDeSobrenomes[sobrenome]) {
  //   contagemDeSobrenomes[sobrenome] = 1
  // }
  // else {
  //   contagemDeSobrenomes[sobrenome] += 1
  // }

  // condição ternária
  // condição separada por ? e atribuição em caso verdadeiro 
  // separada por : e atribuição em caso falso
  // condição ? valorEmCasoVerdadeiro : valorEmCasoFalso

  // const condicao = contagemDeSobrenomes[sobrenome]
  // const valorEmCasoVerdadeiro = contagemDeSobrenomes[sobrenome] + 1
  // const valorEmCasoFalso = 1

  // contagemDeSobrenomes[sobrenome] = 
  // condicao ? valorEmCasoVerdadeiro : valorEmCasoFalso

  contagemDeSobrenomes[sobrenome] = 
  contagemDeSobrenomes[sobrenome]         //condição
  ? contagemDeSobrenomes[sobrenome] + 1   // caso verdadeiro
  : 1                                     // caso falso

  console.log(contagemDeSobrenomes[sobrenome])
}

console.log(contagemDeSobrenomes)

// console.log(primeiraPessoa)
// console.log(segundaPessoa)
// console.log(terceiraPessoa)