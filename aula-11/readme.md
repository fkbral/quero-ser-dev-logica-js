# Funções de alta ordem:

## Características comuns
- Nenhum deles pode retornar um array maior do que o original

## forEach
- percorre todos elementos do array
- não tem retorno (undefined, ou seja não consigo atribuí-lo a uma variável)
```js
// NÃO pode ser feito algo como a linha abaixo
const array = arrayOriginal.forEach(() => {})
```

## find
- retorna um único elemento
- a função passada como parâmetro retorna booleano
- pára a execução no primeiro valor encontrado

## filter
- retorna um array
- a função passada como parâmetro retorna booleano
- tamanho do array retornado: será igual ou menor que o do array orginal
- agrupa todos os retornos verdadeiros (true) da função passada por parâmetro em um novo array
- percorre todos elementos do array

## map
- retorna um array
- percorre todos elementos do array
- tamanho do array retornado: será o mesmo do array orginal
- seus elementos terão o mesmo tipo e formato (propriedades e métodos: se forem objetos) que o retorno da função passada como parâmetro

```js
const numeros = [1, 3, 8]
const numerosDobrados = numeros.map((numero) => {
  return numero * 2 // estou dizendo que os novos elementos também serão do tipo number
})

const carros = [
  {
    marca: 'Ford',
    modelo: 'Fiesta',
  },
  {
    marca: 'Honda',
    modelo: 'Civic', 
  },
]
const carrosComIdentificacaoECor = carros.map((carro) => {
  return  {
    ...carro,
    id: Math.random() * 1000,
    cor: 'prata',
  } // estou dizendo que os novos elementos também serão do tipo number
})
```

## reduce
- retorna um único elemento
- percorre todos elementos do array
- caso de uso ideal: somar valores (ex: preços, notas, números)