
function cumprimenta(nomeDoUsuario, periodoDoDia="noite") {
  // let nomeDoUsuario = 'Maria'
  // nomeDoUsuario = 'João'
  // console.log(nomeDoUsuario)
  // const horas = 16
  // const minutos = 22

  console.log('Olá ' + nomeDoUsuario)
  console.log('Estamos no período da ' + periodoDoDia)
  // console.log('São ' + horas + ':' + minutos)
}

const cumprimentaArrow = (nomeDoUsuario, periodoDoDia="noite") => {
  console.log('Olá ' + nomeDoUsuario)
  console.log('Estamos no período da ' + periodoDoDia)
}

cumprimenta('Maria', 'manhã')
cumprimentaArrow('Maria', 'manhã')
// qdo chamo a função com o parâmetro 'Maria' o que acontece é que o 
// JS por debaixo dos panos faz a seguinte atribuição
// let nomeDoUsuario = 'Maria'

cumprimenta('João')
cumprimentaArrow('João')

// cumprimentaArrow()