# Destructuring

## Destructuring Array

배열에 들어있는 값들을 새로운 이름의 변수로 할당해 뽑아낼 수 있다.

```js
let data = ["name1", "name2", "name3", "name4"]
let [aka1, aka2, , aka3]

console.log(aka1, aka2, aka3)
```

2번째 줄에서 중간에 빈 값을 넣어두었기 때문에 name3을 건너뛰고 aka3에 name4가 들어간 걸 확인할 수 있다.

## Destructuring Array

객체에서 원하는 키의 값을 빼내 변수로 사용할 수 있다.

```js
let obj = {
  name: "kim",
  age: 15,
}

let { name, age } = obj

console.log(name, age)
```

name과 age라는 프로퍼티를 변수로 만들어 빼내었다.

```js
let { name: myName } = obj
```

위의 경우는 name의 프로퍼티를 변수로 만들었지만 myName이라는 변수명으로 빼낸다는 선언이다.

### Destructuring 활용 \_Event 객체 전달

```js
document.querySelector("div").addEventListener('click', function({type, tartget.tagName}){
  console.log(type,target.tagName)
})
```

위와같이 이벤트 리스너를 등록하면 매개변수로 event가 오지만 event 안에 있는 type과 target을 따로 빼와 사용할 수 있다.
