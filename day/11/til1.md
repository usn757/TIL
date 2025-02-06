## 1. 호이스팅 (Hoisting)

### 함수 선언문 vs 함수 표현식

```jsx
myFunc(); // 정상 실행 (함수 선언문 호이스팅)
function myFunc() {
  console.log("myFunc");
}

// myFunc2(); // 에러 (함수 표현식은 호이스팅되지 않음)
const myFunc2 = function () {
  console.log("myFunc2");
};
myFunc2();
```

- **함수 선언문**: 전체가 호이스팅되어 코드 상단에서 호출 가능
- **함수 표현식**: 변수만 호이스팅되며, 할당 전 호출 시 에러 발생

---

## 2. 배열 고차 함수

### 1) `map()`

```jsx
const arr = ["Python", "JavaSript", "Java", "C++"];
const mapArr = arr.map((el) => el.toLowerCase());
```

- **기능**: 모든 요소를 변환하여 새 배열 생성
- **특징**: 원본 배열과 **다른 참조**를 가진 새 배열 반환 (`Object.is(mapArr, arr) === false`)

### 2) `filter()`

```
const ddbk = [{ price: 15000 }, { price: 20000 }, { price: 18000 }];
const filtered = ddbk.filter(el => el.price > 17000);
```

- **기능**: 조건을 만족하는 요소만 추출
- **결과**: `[{price: 20000}, {price: 18000}]`

### 3) `reduce()`

```
const elements = [{ name: "월개발" }, { name: "화개발" }, { name: "수개발" }];
const names = elements.reduce((acc, cur) => {
  acc.push(cur.name);
  return acc;
}, []);
```

- **기능**: 배열을 단일 값으로 축소
- **활용**: `map()` 기능 구현 가능

---

## 3. 구조 분해 할당

### 배열 분해

```jsx
const [x, y, z] = [1, 2, 3];
console.log(x, y, z); // 1 2 3
```

### 객체 분해

```jsx
const user = { name: "john", age: 123 };
const { name: userName, age, job = "programmer" } = user;
console.log(userName, age, job); // john 123 programmer
```

### 스프레드 연산자

```jsx
const arr = [1, 2, 3];
const arrCopy = [...arr]; // 새 배열 생성

const obj = { a: 1, b: 2 };
const objCopy = { ...obj }; // 새 객체 생성
```

---

## 4. 에러 처리

### 기본 패턴

```jsx
try {
  let a = null;
  console.log(a.a); // TypeError 발생
} catch (error) {
  console.error("에러 발생:", error.message);
} finally {
  console.log("항상 실행");
}
```

### 에러 재던지기

```jsx
try {
  try {
    throw new Error("원본 에러");
  } catch (err) {
    console.log("내부 처리");
    throw err; // 외부로 전파
  }
} catch (err) {
  console.log("외부 처리:", err.message);
}
```

---

## 5. 스코프 주의사항

```jsx
let globalVal = 0;

try {
  let localVal = 1;
  globalVal++;
} catch {
  let localVal = 2;
  globalVal++;
} finally {
  let localVal = 3;
  globalVal++;
}

console.log(globalVal); // 3 (블록 스코프 영향 X)
// console.log(localVal); // 에러 (블록 스코프)
```

---

##

## 🧠 느낀점

1. **호이스팅의 이중성**
   - 함수 선언문과 표현식의 차이를 실제 에러 재현으로 확인하니,
     **"선언문은 전체 호이스팅, 표현식은 변수만 호이스팅"** 이라는 개념이 명확해짐
2. **고차 함수의 위력**
   - `reduce`로 `map` 기능을 구현해보면서 **"추상화 레이어를 높일수록 코드가 간결해진다"** 는 사실을 체감
   - `filter` 사용 시 **조건 로직을 분리**하면 가독성이 크게 향상됨
3. **에러 처리의 중요성**
   - `finally` 블록이 **return보다 우선 실행**되는 특성을 확인하며,
     자원 정리 코드 작성 시 필수적으로 사용해야겠다는 필요성을 느낌
4. **스코프 관리**
   - `try/catch/finally` 블록마다 독립적인 스코프를 가지므로,
     **변수 재선언이 가능**하다는 점이 인상적 (의도치 않은 재할당 주의 필요)
5. **구조 분해의 실용성**
   - 객체 분해 시 **별칭(alias)과 기본값**을 함께 사용하면
     API 응답 데이터 처리 시 안정성이 크게 향상될 것 같다는 확신
