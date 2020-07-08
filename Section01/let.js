var varGlobal = "global test for var"
let letGlobal = "global test for let"

function varScopeTest() {
  console.log(varGlobal) // 전역변수 잘 불러옴
  for (var i = 0; i < 15; i++) {
    console.log("for inside", i) // i 값들 출력
  }
  console.log("for outside", i) // 스코프 밖인데도 i 값 출력
}

function letScopeTest() {
  console.log(letGlobal) // 전역변수 잘 불러옴
  for (let i = 0; i < 10; i++) {
    console.log("for inside", i) // i 값들 출력
  }
  // console.log("for outside", i) // 스코프 밖이기 때문에 에러 출력

  if (true) {
    let letTest = "is called"
    console.log(letTest) // 스코프 안에서 선언된 let 변수이기 때문에 스코프 안에서는 출력
  }
  console.log(letTest) // {} 블락 밖에서는 스코프가 적용되지 않는다.
}

varScopeTest()
letScopeTest()
