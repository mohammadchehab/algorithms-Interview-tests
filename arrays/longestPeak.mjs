export function longestPeak(array) {
    let longestPeak = 0;
    let index = 1;
    
    while (index < array.length - 1) {
      const isPeak = array[index - 1] < array[index] && array[index+1] < array[index];
  
      if (!isPeak) {
        index++;
        continue;
      }
  
      let leftIdx = index - 2;
      while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
          leftIdx--;
      }
  
      let rightIdx = index + 2;
  
      while( rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]){
          rightIdx++;
      }
  
      const currentPeakLength = rightIdx - leftIdx - 1;
      longestPeak = Math.max( longestPeak, currentPeakLength );
      index = rightIdx;
    }
  
    return longestPeak;
}
