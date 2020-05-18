export function isMonotonic(array) {
  let isNonIncreasing = true;
  let isNonDecreasing = true;

  for (let i = 1; i < array.length; i++) {
    let currentInt = array[i];
    let previousInt = array[i - 1];

    if (currentInt < previousInt) isNonDecreasing = false;
    if (currentInt > previousInt) isNonIncreasing = false;

  }
  return isNonIncreasing || isNonDecreasing;
 }
