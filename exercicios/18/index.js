const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const checaSeEhPrimo = (numero) => {
  if (numero <= 0) {
    return false
  }

  if (numero === 1 || numero === 2) {
    return true
  }

  let divisor = 2

  while(divisor <= numero/2) {
    if (numero % divisor === 0) {
      return false;
    }
    divisor += 1;
  }

  return true
}

const numerosPrimos = array.filter((numero) => checaSeEhPrimo(numero))

console.log(numerosPrimos)