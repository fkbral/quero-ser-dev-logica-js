const usuarios = [
  {
    nome: "Zé",
    idade: 20,
    cpf: "123.456.789-01",
    email: "ze@uol.com.br",
  },
  {
    nome: "Maria",
    idade: 27,
    cpf: "123.456.789-02",
    email: "maria_meg_costa@outlook.com",
  },
  {
    nome: "Carla",
    idade: 37,
    cpf: "123.456.789-03",
    email: "carla@bol.com.br",
  },
  {
    nome: "Zeca",
    idade: 36,
    cpf: "123.456.789-03",
    email: "zecal3@msn.com",
  },
  {
    nome: "Mel",
    idade: 16,
    cpf: "123.456.789-03",
    email: "melsaf@gmail.com",
  },
]

const emailPesquisado = prompt('Digite um email para retornar os dados')

const usuarioEncontrado = usuarios.find((usuario) => {
  return usuario.email.toLocaleLowerCase() === emailPesquisado.toLocaleLowerCase()
})

if(!usuarioEncontrado) {
  alert('Usuário não encontrado!!')
}
else {
  console.log(usuarioEncontrado)
}
