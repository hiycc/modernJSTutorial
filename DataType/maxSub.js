function getMaxSubSum(arr) {
  let result = [];
  for(let i = 0 ; i < arr.length; i++) {
    let j = i + 1;
    for(let k = 0; k < j; k++) {
      result[i+k*3] += arr[i]; 
    }
  }
  return result;
}

arr = [1,2,3,4]
console.log(getMaxSubSum(arr));