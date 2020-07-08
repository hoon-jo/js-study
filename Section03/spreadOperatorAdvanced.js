let toMergeArray = [4, 5, 6, 7]

let data = [1, 2, 3, ...toMergeArray, 8, 9, 10]

console.log(data)

// 1,2,3,4,5,6,7,8,9,10

function sum(first, second, third) {
  return first + second + third
}
let numbers = [100, 200, 300]

console.log(sum(...numbers))

// 600
