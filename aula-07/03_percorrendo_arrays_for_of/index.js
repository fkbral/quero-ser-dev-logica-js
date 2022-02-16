const clientes = ["Zé", "Maria", "Celso", "Ana"]

clientes.push("Paula")

const texto = "Aluno"

// for of pode ser utilizado para percorrer arrays e strings
for (let cliente of clientes) {
  console.log(cliente)
}

for (let letra of texto) {
  console.log(letra)
}