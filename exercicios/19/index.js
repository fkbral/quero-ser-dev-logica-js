const esportes = [
	{
		nome: 'futebol',
		individual: false,
    duracaoEstimadaEmMinutos: 90,
	},
  {
		nome: 'volei',
		individual: false,
    duracaoEstimadaEmMinutos: 120,
	},
  {
		nome: 'cricket',
		individual: true,
    duracaoEstimadaEmMinutos: 50,
	},
  {
		nome: 'esgrima',
		individual: true,
    duracaoEstimadaEmMinutos: 20,
	},
  {
		nome: 'squash',
		individual: true,
    duracaoEstimadaEmMinutos: 70,
	},
  {
		nome: '100m rasos',
		individual: true,
    duracaoEstimadaEmMinutos: 1,
	},
]

// a. Encontre um esporte que é individual
// com função anônima
// const esporteIndividual = esportes.find(function(esporte) {
//   return esporte.individual === true
// })

// com arrow function e corpo da função
// const esporteIndividual = esportes.find((esporte) => {
//   return esporte.individual === true
// })

// retornando imediatamente
// const esporteIndividual = esportes.find(
//   (esporte) => esporte.individual === true
// )

// retornando imediatamente e tirando a comparação com true já que 
// o atributo individual já é booleano
const esporteIndividual = esportes.find((esporte) => esporte.individual)

console.log(esporteIndividual)

// b. Encontre um esporte cuja duração estimada é abaixo de 40 mins
const esporteComMenosDe40Mins = esportes.find((esporte) => {
  return esporte.duracaoEstimadaEmMinutos < 40
})

console.log(esporteComMenosDe40Mins)

// c. Encontre todos esportes individuais com duração superior a 20 mins
const esportesIndividuaisComMaisDe20Mins = esportes.filter(esporte =>
  esporte.individual && esporte.duracaoEstimadaEmMinutos > 20
)

console.log(esportesIndividuaisComMaisDe20Mins)
