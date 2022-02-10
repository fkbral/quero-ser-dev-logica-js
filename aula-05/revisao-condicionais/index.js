function devolveTurnoDodia() {
  const horas = Number(prompt('Entre com as horas: '))

  if(horas < 6) {
    return 'Boa madrugada!'
  }

  console.log('Passei do primeiro if')

  if(horas >= 6 && horas < 12) {
    return 'Bom dia!'
  }

  console.log('Passei do segundo if')

  if(horas >= 12  && horas < 18) {
    return 'Boa tarde!'
  }

  console.log('Passei do terceiro if')

  if(horas >= 18 && horas < 24) {
    return 'Boa noite!'
  }

  console.log('Passei do quarto if')

  return 'Horário inválido'
}

console.log(devolveTurnoDodia())