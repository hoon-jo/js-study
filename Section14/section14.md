# Proxy

프록시는 특정 객체를 감싸 프로퍼티 읽기, 쓰기와 같은 객체에 가해지는 작업을 중간에서 가로채는 객체로, 가로채진 작업은 Proxy 자체에서 처리되기도 하고, 원래 객체가 처리하도록 그대로 전달되기도 합니다.

```js
let proxy = new Proxy(target, handler)
```

- target : 가로챌 객체
- handler : get이나 set을 지원하고 이벤트들을 추가해줄 수 있다

## get 사용법

```js
let user = {
  name: "hi",
  age: 12,
}

const proxy = new Proxy(user, {
  get: function (target, prop, receiver) {
    console.log(target[prop])
    return target[prop]
  },
})
```

- target: 감싸고 있는 객체(관리중인 객체)
- prop: 요청받은 property 명을 받아온다.
- receiver : 현재 proxy 객체를 가리킨다. (this 와 비슷)

> ex) proxy.name  
> => proxy의 get 함수가 자동 호출됨  
> => target(`user`)와 prop(`name`)을 인자로 받아 가져옴  
> => 값이 호출될때마다 원하는 동작 정의했던 코드 실행  
> => `return` 으로 호출된걸 불러줌

## set 사용법

```js
let user = {
  name: "hi",
  age: 12,
}

const proxy = new Proxy(user, {
  set: function (target, prop, value) {
    console.log(value)
    return (target[prop] = value)
  },
})
```

- target: get과 동일
- prop: get과 동일
- value : 바꿔줄 값을 받아옴

> ex) proxy.name = 'kim'
> => proxy의 set 함수가 자동 호출됨  
> => target(`user`)와 prop(`name`와 value(`kim`) 인자로 받아 가져옴  
> => 값이 호출될때마다 원하는 동작 정의했던 코드 실행  
> => `return` 으로 호출된걸 set해준다.

[proxy 및 refelct 참고 사이트 1](https://infoscis.github.io/2018/02/27/ecmascript-6-proxies-and-the-reflection-api/)

[proxy 및 refelct 참고 사이트 2](https://ko.javascript.info/proxy)
