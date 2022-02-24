// nome: "Renata",
// area: "Vendas",
// salario: 3000,
const funcionarios = [
  {
      nome: "Renata",
      area: "Vendas",
      salario: 3000,
  },
  {
      nome: "Marcela",
      area: "Dev",
      salario: 8000,
  },
  {
      nome: "Jonas",
      area: "Vendas",
      salario: 3500,
  },
  {
      nome: "Carlos",
      area: "Vendas",
      salario: 2000,
  },
  {
      nome: "Rick",
      area: "Dev",
      salario: 7000,
  },
  {
      nome: "Yara",
      area: "Finanças",
      salario: 6500,
  },
  {
      nome: "Zeca",
      area: "Finanças",
      salario: 5500,
  },
  {
      nome: "Josué",
      area: "RH",
      salario: 4500,
  },
  {
      nome: "Sheila",
      area: "RH",
      salario: 5500,
  },
  {
      nome: "Cleber",
      area: "Finanças",
      salario: 4500,
  },
]

const areaParaAumentarSalario = "Vendas"

const funcionariosComSalarioAjustado = funcionarios.map((funcionario) => {  
  return {
    ...funcionario,
    salario: 
    funcionario.area.toLowerCase() === areaParaAumentarSalario.toLowerCase()
    ? (funcionario.salario) * 1.05
    : funcionario.salario
  }
})

// console.log(funcionariosComSalarioAjustado)

const apenasFuncionariosComReajuste = funcionariosComSalarioAjustado.filter(
  (funcionario) => {
    return funcionario.area === areaParaAumentarSalario
})

console.log(apenasFuncionariosComReajuste)