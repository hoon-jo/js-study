const SETTING = {
  name: "LUCKY LOTTO",
  count: 6,
  max: 45,
  min: 1,
}
const { name, count, max, min } = SETTING
const lottoNumbers = new Set()

function getLottoNumber() {
  let check = true
  let number = 0

  while (check == true) {
    number = Math.floor(Math.random() * (max - min + 1)) + min
    if (!lottoNumbers.has(number)) {
      lottoNumbers.add(number)
      check = false
    }
  }
}

console.log(name)

for (let i = 0; i < count; i++) {
  getLottoNumber()
}

console.log(
  Array.from(lottoNumbers).sort(function (a, b) {
    return a - b
  })
)
