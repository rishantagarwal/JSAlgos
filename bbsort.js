/**
 * Bubble Sort Algorithm
 * Time Complexity = O(n^2), In-place, Can be made stable
 * Best case: Array already sorted (O(n))
 *
 * @param {*[]} list Items to sort through. * 
 * @return {sortedArray} The sorted array.
*/
const bubbleSort = (arr) => {
  let swapped
  do {
    swapped = false
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] && arr[i + 1] && arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true
      }
    }
  } while(swapped)
  return arr;
}

export default bubbleSort
