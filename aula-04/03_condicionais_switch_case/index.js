  // const turno = prompt('Entre com um turno: ').toUpperCase()
  
  // switch (turno) {
  //   // if(turno === "M"){}
  //   case "M": {
  //     console.log("Bom Dia!")
  //     break
  //   }

  //   case "V": {
  //     console.log("Boa tarde!")
  //     break
  //   }

  //   case "N": {
  //     console.log("Boa Noite!")
  //     break
  //   }

  //   default: {
  //     console.log("Digite um turno válido")
  //     break
  //   }
  // }

  function cumprimentaDeAcordoComTurno() {
    const turno = prompt('Entre com um turno: ').toUpperCase()

    switch (turno) {
      // if(turno === "M"){}
      case "M": {
        return "Bom Dia!"
      }

      case "V": {
        return "Boa tarde!"
      }

      case "N": {
        return "Boa Noite!"
      }
    }

    return "Digite um turno válido"
  }


  const mensagem = cumprimentaDeAcordoComTurno()
  console.log(mensagem)