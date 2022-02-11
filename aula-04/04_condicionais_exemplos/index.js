function cumprimentaDeAcordoComTurno() {
  const horas = Number(prompt("Entre com um horário: "))
  
  if (horas < 6) {
    return "Boa madrugada!"
  }

  // para colocar múltiplas condições em um if devemos utilizar o && (AND)
  if (horas >= 6 && horas < 12) {
    return "Bom dia!"
  }

  if (horas >= 12 && horas < 18) {
    return "Boa Tarde!"
  }

  if (horas >= 18 && horas < 24) {
    return "Boa Noite!"
  }

  return "Horário inválido"
}

console.log(cumprimentaDeAcordoComTurno())