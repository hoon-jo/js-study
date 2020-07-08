// for in

const arrayA = [1, 2, 3, 4, 5, 6, 8]
Array.prototype.getIndex = function () {}

for (const value in arrayA) {
  console.log(value)
}

// for in 의 문제점은 prototype에 정의된 부모 value들도 가져와 순회하는 문제가 있다.

// for of

for (const value of arrayA) {
  console.log(value)
}

// 그 점을 보완한 for of는 주어진 배열만을 순회한다.
