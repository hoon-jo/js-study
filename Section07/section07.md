# Set & WeakSet

## Set

### Set 으로 유니크한 배열 만들기

Set 에서는 배열에 값을 추가하고 has를 통해서 값이 있는지 없는지 확인할 수 있다.  
그러므로 has로 값이 있는지 확인 후 배열에 추가하면 유니크한 배열을 만들 수 있다.

```js
const arr = new Set()

arr.add("apple")
arr.add("banana")
arr.add("etc")

if (!arr.has("apple")) {
  arr.add("apple")
}
```

### Weak Set으로 효과적으로 객체 타입 저장하기

weakSet은 참조를 가지고 있는 객체나 배열만 저장 가능하다.

> string, number, null 등 저장 불가

```js
let ws = new WeakSet();
let arr [1,2,3,4];
let func = () => {}
let string = 'string'
let number = 3;
let empty = null;



ws.add(arr);    // 저장 가능
ws.add(func);   // 저장 가능
ws.add(string); // 저장 불가
ws.add(number); // 저장 불가
ws.add(empty);  // 저장 불가


arr = null;

console.log(wr.arr);
console.log(wr.has(arr));
// arr이 없기때문에 weakset에서 더이상 유효한 값이 아니다.
```
