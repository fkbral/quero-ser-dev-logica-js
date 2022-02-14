const alunas = ["Joana", "Karina", "Ana", "Luana"]
// alunas = ["Joana", "Karina", "Ana", "Luana", "Gabriella"]

const novaAluna = prompt("Entre com um nome de aluna:")

alunas.push(novaAluna)
// alunas.push("Gabriella")
// alunas.push("Hellen")

console.log(alunas)
console.log(alunas[0])
console.log(alunas[1])
console.log(alunas[2])
console.log(alunas[3])

// se tentarmos exibir uma aluna que não existe, não dá erro no meu código,
// porém traz undefined
console.log(alunas[4])
console.log(alunas[5])
console.log(alunas[5000])