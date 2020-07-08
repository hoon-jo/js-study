// const의 특성
const testObject = { name: "Kim", age: 20 }
testObject.name = "Park" // const는 객체 자체를 재할당 하는 것은 불가능하지만 객체의 값을 바꾸는것은 가능하다.

const testArray = ["A", "B", "C"]
testArray.push("D") // 위와 동일

// immutable array
// 기존의 값은 불변성을 유지하고 값이 바뀔 때 완전히 새로운 객체(배열)을 만들어낸다.

const list = ["a", "b", "c"]
list2 = [].concat(list, "banana")
console.log(list === list2) // false
