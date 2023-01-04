let arr = [5, 2, 1, -10, 8];

// ……你的代码以降序对其进行排序

arr.sort((a, b) => {
  return a>b? -1: 1;
})

console.log( arr ); // 8, 5, 2, 1, -10