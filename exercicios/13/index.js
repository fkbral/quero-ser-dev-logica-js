function checaSeEhPrimo(numeroDeTeste) {
  // if(numeroDeTeste % 2 === 0) {
  //   return false
  // }
  // if(numeroDeTeste % 3 === 0) {
  //   return false
  // }
  // if(numeroDeTeste % 4 === 0) {
  //   return false
  // }
  if(numeroDeTeste < 1) {
    return false
  }

  if(numeroDeTeste === 1 || numeroDeTeste === 2) {
    return true
  }

  let divisorDeTeste = 2

  while (divisorDeTeste < numeroDeTeste/2) {
    console.log(divisorDeTeste)
    if(numeroDeTeste % divisorDeTeste === 0) {
      return false
    }
    divisorDeTeste += 1
  }

  return true
}

console.log(checaSeEhPrimo(53))
