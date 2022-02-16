const numeros = [12, 5, 8, 130, 44]
const numerosMenoresQueDez = []

//exercício a
for (let numero of numeros) {
  if(numero < 10) {
    numerosMenoresQueDez.push(numero)
  }
}

console.log(numerosMenoresQueDez)

//exercício b
let indice = 0
while (indice < numeros.length) {
  if (numeros[indice] < 10) {
    numeros.splice(indice, 1)
    indice -= 1
  }

  indice += 1
}

console.log(numeros)