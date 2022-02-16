let opcaoEscolhida = 'S'

while(opcaoEscolhida === 'S') {
  let usuario

  // while(usuario === "" || usuario === null) {
  while(!usuario || usuario.length < 2) {
    usuario = prompt('Entre com o nome do usuário:')
  }

  alert(usuario)

  opcaoEscolhida = prompt('Deseja continuar (S/N)').toUpperCase()
} 

// falsy "", undefined, null
// truthy "a", "abc", 10
