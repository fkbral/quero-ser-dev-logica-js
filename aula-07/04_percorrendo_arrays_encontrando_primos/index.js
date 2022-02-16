import { checaSeEhPrimo, mensagem } from "../../exercicios/13/index.js"

const numerosDeTeste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 21, 53, 83]
const numerosPrimos = []

for (let numeroDeTeste of numerosDeTeste) {
  if(checaSeEhPrimo(numeroDeTeste)) {
    numerosPrimos.push(numeroDeTeste)
  }
}

console.log(numerosPrimos)
console.log(mensagem)