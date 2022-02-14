let opcaoEscolhida

do {
  let usuario

  while(!usuario || usuario.length < 2) {
    usuario = prompt('Entre com o nome do usuário:')
  }

  alert(usuario)

  opcaoEscolhida = prompt('Deseja continuar (S/N)').toUpperCase()
} while(opcaoEscolhida === 'S')
