const clientes = ["Zé", "Maria", "Celso", "Ana"]

clientes.push("Paula")

// loop while
let indice = 0
// precisamos saber o tamanho do array para percorré-lo até o final
const tamanhoDoArray = clientes.length

while(indice < tamanhoDoArray) {
  console.log(clientes[indice])
  indice += 1
}

// loop for tradicional

for (let indice = 0; indice < tamanhoDoArray; indice++){
  console.log(clientes[indice])
}