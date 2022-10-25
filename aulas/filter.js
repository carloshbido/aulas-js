const idades = [33, 22, 10, 25, 45, 18, 16, 23, 56, 12, 13, 46];

const arrayMaior18 = [];
for (let index = 0; index < idades.length; index++) {
  if (idades[index] >= 18) {
    arrayMaior18.push(idades[index]);
  }
}
console.log(arrayMaior18);

const podeBeber = idades.filter((idade) => idade >= 18);
console.log(podeBeber);

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
];
// Filtre em um novo array apenas as empresas do ramo "financeiro"
const empresasFin = empresas.filter((empresa) => empresa.ramo === "financeiro");
console.log(empresasFin);

// Filtre em um novo array apenas as empresas que foram fundadas nos anos 80 e 90
const empresas80e90 = empresas.filter(
  (empresa) => empresa.anoFundacao >= 1981 && empresa.anoFundacao <= 2000
);
console.log(empresas80e90);
