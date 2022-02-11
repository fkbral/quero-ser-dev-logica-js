// const calculaBonus = (salario, anosDeTrabalho) => {
function calculaBonus(salario, anosDeTrabalho) {
  // - menos de 1 ano: 0% do salário
  if (anosDeTrabalho < 1) {
    return 0
  }
  // - entre 1 e 4 anos: 5% do salário
  if (anosDeTrabalho >= 1 && anosDeTrabalho < 4) {
    // return salario * (5/100)
    return salario * 0.05
  }
  // - de 4 a 7 anos: 10% do salário
  if (anosDeTrabalho >= 4 && anosDeTrabalho <= 7) {
    return salario * 0.1
  }
  // - mais de 7 anos: 15% do salário
  if(anosDeTrabalho > 7) {
    return salario * 0.15
  }
}

const salarioDoTrabalhador = 2000
const tempoDeTrabalho = 7.5

// const bonus = calculaBonus(salarioDoTrabalhador, tempoDeTrabalho)
const bonus = calculaBonus(1000, 2)

console.log('O bônus do trabalhador é de: R$ ' + bonus )