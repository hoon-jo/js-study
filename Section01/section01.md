# Scope

## 목차

1. let
2. let과 closure
3. const - 선언된 변수 지키기
4. const 특성과 immutable array

## **1. let**

**1. var**

- 함수 안에서 var로 선언된 변수가 전역변수보다 우선시 된다. => scope chain
- 함수 안에서 var로 선언된 변수는 함수 밖에서도 호출했을 시에도 동작한다.

```js
function home() {
  for (var i = 0; i < 100; i++) {
    console.log(i) // 당연히 잘 출력됨
  }
  console.log(i) // for문 밖에 있는데도 불구하고 출력됨
}
```

**2. let**

- 함수 안에서 let을 선언하고 밖에서 호출하게 되면 에러가 난다.
- 오로지 함수 안에서만 유효한 변수

```js
function home() {
  for (let i = 0; i < 100; i++) {
    // 변수 i를 let으로 변경
    console.log(i) // 당연히 잘 출력됨
  }
  console.log(i) // for문의 Scope를 벗어났기 때문에 에러 출력
}
```

## **2. let과 closure**

closure라는 scope가 존재한다. 그 scope 밖에 있는 변수를 가져와 사용할 때 그것을 클로저 변수라고 말한다.

클로저 변수는 콜백 밖에 있는 변수를 참조 하면서 실행된다.

```js
var list = document.querySelectorAll("li")
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    console.log(i + "번째 리스트 입니다.")
  })
}
```

위에서 let이 아닌 var로 클로저 변수를 선언 했을 때 for문의 가장 마지막 값인 4를 4개의 이벤트리스너들이 가지고 있게 된다.

이 문제는 var를 let으로 변경해주면 쉽게 고칠 수 있다.

> (closure에 대한 설명이 부족하여 나중에 따로 공부하고 추가 예정.)

## **3. const - 선언된 변수 지키기**

변경이 필요한 값과 변경이 필요하지 않은 변수를 구별하여 let과 const를 구별하여 var는 더이상 사용하지 않는다.

> 각 상황에 맞춰 const와 let을 사용하는 것이 중요하다.

1. let

- let으로 만들어진 변수는 값을 변경 (재할당)할 수 있다.

```js
let name = "Kim"
name = "Park" // 재할당 가능
```

2. const

- const로 만들어진 변수는 변경이 일어날 수 없다. (재할당 불가)

```js
const name = "Kim"
name = "Park" // 재할당 불가능하기 때문에 에러 출력

const constArray = ["1", "2", "3"]
constArray = ["4", "5", "6"] // 배열도 재할당은 불가능

const constObject = { name: "Kim", id: 1 }
constObject = { name: "Park", id: 2 } // 객체도 재할당은 불가능
```

## **4. const 특성과 immutable array**

### **const의 특성**

const를 사용하더라도 배열과 오브젝트의 `값`을 변경하는 것은 가능하다.

```js
const list = ["a", "b", "c"]
list.push("banana") // 변수 자체를 재할당 하는 것이 아닌 값을 추가하는 것이기때문에 가능하다.
```

### **immutable array**

어떤 기능을 만들 때, 뒤로가기 및 앞으로가기, 삭제하기 및 되돌리기 등 어떠한 값을 바꾸고 나중에 바꾸기 전의 값이 필요할 경우를 위해 객체 및 배열의 `불변성`을 유지한다.

> React redux를 사용하게 되면 reducer에서 상태가 바뀐 새로운 state를 반환하게 되는데 이것 또한 immutable 객체이다.

```js
const list = ["a", "b", "c"]
list2 = [].concat(list, "banana")
console.log(list === list2)
```

위와 같이 기존의 list라는 배열를 변경하지 않고 새로운 배열을 만들어 banana라는 값을 추가하였다.
