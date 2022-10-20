// Utilizado quando você quer obter um novo array com MESMA quantidade de itens do array orginal, mas com os itens modificados de alguma forma.
const arrayNumeros = [10, 20, 30]
const empresas = [
      { nome: "Empresa A", ramo: "financeiro", anoFundacao: 1995 },
      { nome: "Empresa B", ramo: "alimentício", anoFundacao: 2000 },
      { nome: "Empresa C", ramo: "financeiro", anoFundacao: 2005 },
      { nome: "Empresa D", ramo: "educação", anoFundacao: 1998 },
      { nome: "Empresa E", ramo: "alimentício", anoFundacao: 1985 },
      { nome: "Empresa F", ramo: "financeiro", anoFundacao: 1981 },
      { nome: "Empresa G", ramo: "tecnologia", anoFundacao: 2006 },
      { nome: "Empresa H", ramo: "educação", anoFundacao: 1986 },
      { nome: "Empresa I", ramo: "tecnologia", anoFundacao: 1990 },
   ]

// const novoArrayNumero = arrayNumeros.map(item => item * 2)
// console.log(novoArrayNumero)

function setIdade(numero) {
  return new Date().getFullYear() - numero
}

const empresasComIdade = empresas.map(item => {
  const idade = new Date().getFullYear() - item.anoFundacao
  return { ...item, idade }
})

const empresasComIdade1 = empresas.map(item => ({ ...item, idade: setIdade(item.anoFundacao) }))

console.log(empresasComIdade)
console.log(empresasComIdade1)


