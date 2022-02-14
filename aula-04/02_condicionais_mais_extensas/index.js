// const turno = "V"

function cumprimentaDeAcordoComTurno() {
  const turno = prompt('Entre com um turno: ').toUpperCase()
  
  if (turno === "M") {
    return "Bom Dia!"
  }

  if (turno === "V") {
    return "Boa Tarde!"
  }

  if (turno === "N") {
    return "Boa Noite!"
  }

  return "Digite um turno válido"
}

// if (turno === "M") {
//   console.log("Bom Dia!")
// }
// else {
//   if (turno === "V") {
//     console.log("Boa Tarde!")
//   }
//   else {
//     if (turno === "N") {
//       console.log("Boa Noite!")
//     } 
//     else {
//       console.log("Digite um turno válido")
//     }
//   }
// }

// if (turno === "M") {
//   console.log("Bom Dia!")
// } else if (turno === "V") {
//   console.log("Boa Tarde!")
// } else if (turno === "N") {
//   console.log("Boa Noite!")
// } else {
//   console.log("Digite um turno válido")
// }


const mensagem = cumprimentaDeAcordoComTurno()

console.log(mensagem)