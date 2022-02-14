// console.log(false && false)
// console.log(false && true)
// console.log(true && false)
// console.log(true && true)

// exemplo de true && true
// console.log(0 > -1 && 6 <= 7)

// console.log(false || false)
// console.log(false || true)
// console.log(true || false)
// console.log(true || true)

// const CNH = "B"
const idade = 12
const CNH = "B"

const podeDirigirCarro = 
(idade >= 18) &&
(CNH === "B" || CNH === "C" || CNH === "D" || CNH === "E")

// idade = 12, CNH = "C"
// false && (false || true || false || false)
// false && (true || false || false)
// false && (true || false)
// false && (true)
// false

console.log(podeDirigirCarro)