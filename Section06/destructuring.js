const data = {
  name: "kim",
  age: 15,
  mail: {
    id: 1,
    address: "abc@com.com",
  },
}

const { name, age, mail } = data
console.log(name, age, mail) // 잘 가져온다.

// 매개변수에서 destructuring할 수 있음
function getEmailAddress({ name, mail }) {
  const { address } = mail
  console.log(name, "의 이메일 주소는", address)
}

getEmailAddress(data)

document.querySelector("div").addEventListener("click", function (event) {
  console.log(event.target.innerText) // Destructuring 사용 전
})

document.querySelector("div").addEventListener("click", function ({ target }) {
  console.log(target.innerText) // Destructuring 사용 후
})
