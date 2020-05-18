let swap = function (array, x, y) {
  var tmp = array[y];
  array[y] = array[x];
  array[x] = tmp;
};

export function moveElementToEnd(array, toMove) {
  let right = 0;
  let left = array.length - 1;
  while (right < left) {
    while (right < left && array[left] === toMove) left--;
    if (array[right] === toMove) swap(array, right, left);
    right++;
  }
  return array;
}
