function print() {
  let list = document.querySelectorAll("li")
  let listArray = Array.from(list)
  let eArray = listArray.filter(function (v) {
    return v.innerHTML.includes("e")
  })
  return eArray
}

console.log(print())
