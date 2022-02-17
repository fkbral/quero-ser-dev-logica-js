Não devemos utilizar for .. in para arrays, vide exemplo abaixo:

Pois podemos declarar um elemento em uma posição aleatória do array e ele será percorrido

```js
const alunos = ['Felipe', 'Maria']
alunos[1000] = "Jonas"

for (let indice in alunos) {
  console.log(alunos[indice])
  console.log(indice)
}
```

Podemos utilizar for .. in para percorrer strings ou propriedades de objetos como visto no <a href="./index.js">index.js</a> 
```js
const texto = "Qualquer coisa"

for (let indice in texto) {
  console.log(texto[indice])
}
```