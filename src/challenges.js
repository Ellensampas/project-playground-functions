// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 && param2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(splitString) {
  return splitString.split(' ');
}

// Desafio 4
function concatName(arrayStrings) {
  return arrayStrings[arrayStrings.length-1] + "," + ' ' + arrayStrings[0]
}
// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(arrayInteiros) {
  let maiorNumero = arrayInteiros[0];
  let quantasVezesRepete = 0;

  for (let key in arrayInteiros) {
    for (let key in arrayInteiros) {
      if (arrayInteiros[key] > maiorNumero) {
        maiorNumero = arrayInteiros[key];
      }
    }
    if (maiorNumero === arrayInteiros[key]) {
      quantasVezesRepete++;
    }
  }
  return quantasVezesRepete;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
