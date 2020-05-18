export function threeNumberSum(array, targetSum) {
  array = array.sort((a,b)=> (a-b));
  var triplets = [];

  for (var i = 0; i < array.length - 2; i++) {
    var it = array[i];
    var left = i + 1;
    var right = array.length - 1;

    while (left < right) {
      var currentSum = it + array[left] + array[right];

      if (currentSum == targetSum) {
        triplets.push([it, array[left], array[right]]);
        right--;
        left++;
      } 
			else if (currentSum < targetSum) left++;
      else if (currentSum > targetSum) right--;
    }
  }

  return triplets;
}
