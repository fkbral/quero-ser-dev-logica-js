const clientes = [
  {
    id: "b9979564-5ce8-4bea-b000-69e82d46d7ee",
    nome: "Zé",
    idade: 20,
    cpf: "123.456.789-01",
    email: "ze@uol.com.br",
    dependente: {
      id: "b9979564-5ce8-4bea-b000-69e82d46d7ee",
      nome: "Zé Filho",
      idade: 3,
      email: "zefilho@gmail.com",
    },
  },
  {
    id: "2ec84514-0060-48c6-8118-2a3ebd5f5226",
    nome: "Maria",
    idade: 27,
    cpf: "123.456.789-02",
    email: "maria@outlook.com",
  },
]

console.log(clientes)
console.log(clientes[0].dependente)