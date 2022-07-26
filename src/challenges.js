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
function catAndMouse(mouse, cat1, cat2) {
  let catPosition1 = mouse - cat1;
  let catPosition2 = mouse - cat2;

  if (Math.abs(catPosition1) > Math.abs(catPosition2)) {
    return 'cat2';
  } else if (Math.abs(catPosition2) > Math.abs(catPosition1)) {
    return 'cat1';
  } else if (Math.abs(catPosition1) === Math.abs(catPosition2))
    return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let arrayStrings= []

  for(let index of arrayNumeros){
    if (index % 5 === 0 && index % 3 === 0) {
        arrayStrings.push('fizzBuzz');
    } else if (index % 3 === 0) {
       arrayStrings.push('fizz');
    } else if (index % 5 === 0) {
       arrayStrings.push('buzz');
    }else{
      arrayStrings.push('bug!');
    }
  }
  return arrayStrings;
}

// Desafio 9
function encode(phrase) {
  let palavra = ""
  
  for (let index =0;index < phrase.length;index++) {
    if(phrase[index] === 'a'){
      palavra += "1"
    }else if(phrase[index] === 'e'){
      palavra += "2"
    }else if(phrase[index] === 'i'){
      palavra += "3"
    }else if(phrase[index] === 'o'){
      palavra += "4"
    }else if(phrase[index] === 'u'){
      palavra += "5"
    }else{
      palavra += phrase[index]
    }
  }
  return palavra
}
function decode(phrase) { 
  let palavra = ""
  
  for (let index =0;index < phrase.length;index++) {
    if(phrase[index] === '1'){
      palavra += "a"
    }else if(phrase[index] == 2){
      palavra += "e"
    }else if(phrase[index] == 3){
      palavra += "i"
    }else if(phrase[index] == 4){
      palavra += "o"
    }else if(phrase[index] == 5){
      palavra += "u"
    }else{
      palavra += phrase[index]
    }
  }
  return palavra
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
