export function isAwesomeNumber(num) {
  let sum = 0;
  let result = [];
  let avarage = Math.ceil(num / 2);

  while (avarage > 0 && sum < num) {
    sum+= avarage;
    result.push(avarage);
    avarage--;
  }

  return sum === num ? result.sort((a,b)=>a - b) : [];
}