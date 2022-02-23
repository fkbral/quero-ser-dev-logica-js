const nomesDeProfessores = ["Felipe", "Richard", "Larissa", "David"]

const nomesDeProfessoresComPronome = nomesDeProfessores.map((nome) => {
  return "Prof. " + nome
})

console.log(nomesDeProfessoresComPronome)