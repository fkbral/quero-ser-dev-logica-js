# Facilidades trazidas pelo ES6 (ES2015)

# Desestruturação

## O que é?
É uma forma de pegarmos propriedades dos objetos ou posições de arrays de uma forma mais simples

```js
const equipamento = {
  nome: 'Óculos de proteção',
  fabricante: '3M',
  tipo: 'epi'
}

// const fabricante = equipamento.fabricante
const { fabricante, tipo } = equipamento

console.log(fabricante)
console.log(tipo)
```


```js
const equipamento2 = {
  nome: 'pé de pato',
  fabricante: 'Bayard',
  tipo: 'lazer'
}
```
