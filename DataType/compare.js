// let arr = [ 1, 2, 15, 8 ];

// arr.sort(function(a, b) { return b - a; });

// console.log(arr);  // 1, 2, 15

console.log([1, -2, 15, 2, 0, 8].sort(function(a, b) {
  console.log( a + " <> " + b );
  return a - b;
}));