export function smallestDifference(arrayOne, arrayTwo) {
  arrayOne = arrayOne.sort((a, b) => a - b);
  arrayTwo = arrayTwo.sort((a, b) => a - b);

  let idxOne = 0;
  let idxTwo = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let firstNum = arrayOne[idxOne];
    let secondNum = arrayTwo[idxTwo];
    if (firstNum < secondNum) {
      idxOne++;
      current = Math.abs(firstNum - secondNum);
    } else if (firstNum > secondNum) {
      idxTwo++;
      current = Math.abs(firstNum - secondNum);
    } else {
      return [firstNum, secondNum];
    }

    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }

  return smallestPair;
}
