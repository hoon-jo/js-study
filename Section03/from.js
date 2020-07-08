function addMark() {
  let argArray = Array.from(arguments)
  // from을 이용해 배열로 변경함
  let newData = argArray.map(function (value) {
    return value + "!"
  })
  // from으로 바꾼 arguments array를 기반으로 느낌표를 붙인다.

  console.log(newData)
}

addMark(1, 2, 3, 4, 5)

// 정상적으로 출력된다
