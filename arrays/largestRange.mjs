export function largestRange(array){

  var bestRange = [];
  var longestLength = 0;
  const nums = {};
 
  for ( const num of array ){
     nums[num] = true; 
  }

  for ( const num of array ){
    if(!nums[num]) continue;

    nums[num] = false;
    let left = num - 1;
    let right = num + 1;
    let currentLength = 1;

    while ( right in nums) {
      nums [ right ] = false;
      right ++;
      currentLength ++;
    }

    while ( left in nums){
      nums [ left ] = false;
      left --;
      currentLength ++;
    }

    if( currentLength > longestLength){
      longestLength = currentLength;
      bestRange = [left + 1, right - 1];
    }
  }

  return bestRange;
}