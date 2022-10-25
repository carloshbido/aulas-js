const idades = [33, 22, 10, 25, 45, 18, 16, 23, 56, 12, 13, 46];
const numeros = [10, 20, 30];

const soma = numeros.reduce(function (acc, item) {
  return acc + item;
}, 0);
// console.log(soma);

// Mostrar na tela a mensagem
// maça amarga, morango amargo, banana amarga, amora amarga, abacaxi amargo, abacate amargo, caju amargo
const frutas = [
  "maça",
  "morango",
  "banana",
  "amora",
  "abacaxi",
  "abacate",
  "caju",
];

const novaString = frutas.reduce(function (acc, fruta, index, array) {
  const palavraCorreta = fruta[fruta.length - 1] === "a" ? "amarga" : "amargo";

  if (index === array.length - 1) {
    return (acc += `${fruta} ${palavraCorreta}`);
  }

  return (acc += `${fruta} ${palavraCorreta}, `);
}, "");

console.log(novaString);
