
// {
//   pais: 'BR',
//   numero: '99235790',
// }
const telefones = [
  {
    pais: 'BR',
    numero: '99235790',
  },
  {
    pais: 'BR',
    numero: '94342678',
  },
  {
    pais: 'FR',
    numero: '90357790',
  },
  {
    pais: 'FIN',
    numero: '99342578',
  },
  {
    pais: 'MX',
    numero: '88215857',
  },
  {
    pais: 'LUX',
    numero: '37654864',
  },
  {
    pais: 'CL',
    numero: '43647344',
  },
  {
    pais: 'FR',
    numero: '34646346',
  },
  {
    pais: 'EG',
    numero: '32632864',
  },
]

const ddi = {
  'BR': 55,
  'CL': 56,
  'EG': 20,
  'FIN': 358,
  'FR': 33,
  'LUX': 352,
  'MX': 52,
}

const telefonesComDDI = telefones.map((telefone) => {
  return {
    ...telefone,
    numero: '+' + ddi[telefone.pais] + telefone.numero
  }
})

console.log(telefonesComDDI)