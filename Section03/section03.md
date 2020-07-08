# Array

## for of - 순회하기

- for in : for 문을 순회하지만 프로토타입도 포함해서 순회한다.
- for of : 오직 주어진 배열만 순회한다.
  - 배열을 순회하고 문자열도 순회할 수 있다.(한글자씩 순회)

## Spread operator - 배열의 복사

복사를 할 때 Spread 방식으로 복사를 하여 새로운 메모리 공간에 새로운 배열을 복사한다.

```js
let preData = ["apple", "orange", 100]
let newData = [...preData]
```

위에 값은 완전히 동일한 값을 갖는다. 하지만 새로운 메모리 공간에 참조를 하여 만들기 때문에 preData === newData의 결과값은 false가 리턴된다.

## Spread operator - 몇가지 활용

### Spread로 배열에 배열 추가하기

```js
let toMergeArray = [4, 5, 6, 7]

let defaultArray = [1, 2, 3, ...toMergeArray, 8, 9, 10]
```

### Spread로 함수에 인자 전달하기

```js
function sum(first, second, third) {
  return first + second + third
}
let numbers = [100, 200, 300]
```

주어진 세 값 (배열에 있는 값)을 더해서 리턴하는 함수가 있다.  
이럴 경우 Spread가 없을 때 구현한 방식은 아래와 같다.

```js
sum(numbers[0], numbers[1], numbers[2])
// or
sum.apply(null, numbers)
```

첫번째 경우 심각하지만 두번째 경우는 그나마 낫다.
하지만 서브함수를 사용하면 불필요한 null까지 넣어줘야한다.
Spread 방식으로 처리하면 아래와 같다.

```js
sum(...numbers)
```

간단하고 가독성 있게 사용할 수 있다.

## from 메소드로 진짜 배열 만들기

인자로 받은 배열에 느낌표를 추가하는 작업을 만들어보자

```js
function addMark() {
    let newData = [];
    for(let i=0; i<arguments.length; i++){
        newData.push(arguments[i]."!");
    }
}

addMark(1,2,3,4,5);
```

정상 작동 된다. 하지만 map함수를 사용하게 되면 더욱 간단해진다.  
map() 함수는 배열이나 객체를 받아 새로운 객체나 배열을 리턴한다.

```js
function addMark() {
  let newData = arguments.map(function (value) {
    return value + "!"
  })
  console.log(newData)
}

addMark(1, 2, 3, 4, 5)
```

위와 같이 사용하면 에러를 낸다. 왜냐하면 arguments는 배열처럼 생겼지만 배열은 아니기 때문이다.

arguments를 배열처럼 사용하기 위해서는 from이라는 함수로 배열로 만들어주어야 한다.

```js
function addMark() {
    let newArray = Array.from(arguments);
    ...
}

addMark(1, 2, 3, 4, 5)
```

이처럼 from은 유사 배열 객체(array-like object)나반복 가능한 객체(iterable object)를 얕게 복사해새로운Array 객체를 만듭니다.
