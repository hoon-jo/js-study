var list = document.querySelectorAll("li")
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    console.log(i + "번째 리스트 입니다.")
  })
}
// 위와 같이 작성하게 되면 모두 마지막 번째 i만을 출력하게 된다.

var list = document.querySelectorAll("li")
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    console.log(i + "번째 리스트 입니다.")
  })
}

// 클로저 변수를 let으로 바꿔주면 쉽게 고칠 수 있다.
