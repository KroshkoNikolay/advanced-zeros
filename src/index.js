module.exports = function getZerosCount(number, base) {
  if (number < 1 || number != Math.floor(number)) {
    return {error: 'Wrong income data! Number must be positive integer'}
  }

  if (base < 1 || base != Math.floor(base)) {
    return {error: 'Wrong income data! Base must be positive integer'}
  }

  const splittedBase = splitBase(base);
  const times = countTime(number, splittedBase)
  return Math.min(...times);
}

function splitBase(base){
  const resp = {}
  let temp = base;
  let divider = 2;
  do {
    if (temp % divider == 0) {
      resp[divider] = (resp[divider] || 0) + 1;
      temp /= divider;
      divider = 2;
    } else {
      divider++;
    }
  }
  while(temp != 1)
  return resp
}

function countTime(number, split){
  const resp = [];
  for (const key in split) {
    let times = 0;
    let degree = 1
    do {
      divider = Math.pow(key, degree);
      if (divider > number)
        break;
      times += Math.floor(number / divider);
      degree++;
    }
    while(true)
    resp.push(Math.floor(times / split[key]))
  }
  return resp
}
