# Object

## 간단히 객체 생성하기

```js
const data = {
    name: name,
    age: age,
    id: id
    ...
}
```

객체에 값을 할당할때 기본적으로 위와같이 사용한다.
하지만 es6에서 지원하는 코드로 훨씬 간결하게 만들 수 있다.

```js
const data = {
  name,
  age,
  id,
}
```

위에 있는 두 코드블럭은 동일한 기능을 수행하지만 두번째 코드블럭의 경우 코드의 수가 많이 줄어들었다..
객체에 있 프로퍼티의 이름과 할당하는 변수의 이름이 같을 경우 아래와 같이 사용할 수 있다.