const equipamentoPadrao = {
  nome: 'genérico',
  fabricante: '3M',
  tipo: 'epi',
  dataDeValidade: 2,
}

// const fabricante = equipamentoPadrao.fabricante
// const tipo = equipamentoPadrao.tipo
// const nome = equipamentoPadrao.nome
// const dataDeValidade = equipamentoPadrao.dataDeValidade

const { fabricante, tipo, ...demaisAtributos } = equipamentoPadrao

// console.log(fabricante)
// console.log(tipo)
// console.log(demaisAtributos)

const equipamento1 = {
  fabricante,
  tipo,
  ...demaisAtributos
}

const equipamento2 = {
  nome: 'luvas',
  fabricante,
  tipo,
}

const equipamento3 = {
  ...equipamento2, // spread operator
  tipo: 'vestimenta',
}


const equipamento4 = {
  nome: 'pé de pato',
  fabricante: 'Bayard',
  tipo: 'lazer',
}

// console.log(equipamento1)
// console.log(equipamento2)
console.log(equipamento3)