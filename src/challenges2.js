// Desafio 11
function generatePhoneNumber(array) {
  let mens;

  if (array.length !== 11) {
    mens = 'Array com tamanho incorreto.';
    return mens;
  }
  for (let i = 0; i < array.length; i++) {
    let cont = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        cont++;
        if (cont >= 3) {
          mens = 'não é possível gerar um número de telefone com esses valores';
          return mens;
        }
      }
    }
  }
  for (let i = 0; i < array.length; i++)
    if (array[i] > 9 || array[i] < 0) {
      mens = 'não é possível gerar um número de telefone com esses valores';
      return mens;
    }
  mens = '(' + array[0] + array[1] + ')' + ' ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
  return mens;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC))) {
    return true;
  } else if (lineA > lineB + lineC) {
    return false;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(texto) {
    let fun = /\d+/g;
    let array = texto.match(fun);
    let soma = 0;
    for (let a = 0; a < array.length; a++) {
      soma += parseInt(array[a], 10);
    }
    if (soma > 1) {
      return soma + ' copos de água';
    } else {
      return soma + ' copo de água';
    }
  }
module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
