// const Ressignment Test

const constTest = "Kim"
constTest = "Park"
// const로 만들어진 변수는 재할당이 불가능 하기 때문에 위 부분에서 에러 출력
console.log(constTest)

const constArray = ["1", "2", "3"]
constArray = ["4", "5", "6"] // 배열도 재할당은 불가능

const constObject = { name: "Kim", id: 1 }
constObject = { name: "Park", id: 2 } // 객체도 재할당은 불가능

// let Ressignment Test
let letTest = "Kim"
letTest = "Park"

console.log(letTest)
// let은 재할당이 가능하기 때문에 성공적으로 출력 : Park
