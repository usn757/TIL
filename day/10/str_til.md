# 오늘 배운 것: JavaScript 문자열 조작

이 문서는 다양한 프로그래밍 작업의 기본 기술인 JavaScript에서 문자열을 조작하는 주요 개념과 기술을 요약합니다.

## 1. 문자열 기본

### 문자열 생성

문자열은 작은따옴표, 큰따옴표 또는 백틱(템플릿 리터럴)을 사용하여 생성할 수 있습니다.

```javascript
const singleQuoted = "Hello";
const doubleQuoted = "World";
const templateLiteral = `템플릿 리터럴입니다`;
```

### 문자열 길이

`length` 속성은 문자열의 문자 수를 반환합니다.

```javascript
const str = "JavaScript";
console.log(str.length); // 출력: 10
```

### 문자에 접근

문자는 (배열과 같이) 대괄호 표기법을 사용하여 접근할 수 있습니다.

```javascript
const str = "Hello";
console.log(str[0]); // 출력: H
console.log(str[4]); // 출력: o
```

## 2. 부분 문자열 검색

### `indexOf()` 및 `lastIndexOf()`

이 메서드들은 각각 부분 문자열이 처음 나오는 곳과 마지막으로 나오는 곳을 찾습니다. 부분 문자열을 찾을 수 없으면 -1을 반환합니다.

```javascript
const str = "To be or not to be, that is the question.";
console.log(str.indexOf("be")); // 출력: 3
console.log(str.lastIndexOf("be")); // 출력: 16
console.log(str.indexOf("xyz")); // 출력: -1
```

### `includes()`

이 메서드는 문자열에 부분 문자열이 포함되어 있는지 확인하고 `true` 또는 `false`를 반환합니다.

```javascript
const str = "Hello, world!";
console.log(str.includes("world")); // 출력: true
console.log(str.includes("World")); // 출력: false (대소문자 구분)
```

### `startsWith()` 및 `endsWith()`

이 메서드들은 문자열이 특정 부분 문자열로 시작하거나 끝나는지 확인합니다.

```javascript
const str = "image.jpg";
console.log(str.startsWith("image")); // 출력: true
console.log(str.endsWith(".png")); // 출력: false
```

## 3. 부분 문자열 추출

### `slice()`

이 메서드는 문자열의 일부를 추출하여 새 문자열을 반환합니다. 두 개의 인수를 받습니다: 시작 인덱스(포함)와 끝 인덱스(제외).

```javascript
const str = "Mozilla";
console.log(str.slice(1, 3)); // 출력: oz
console.log(str.slice(2)); // 출력: zilla (인덱스 2부터 끝까지)
```

### `substring()`

`slice()`와 유사하지만 음수 인덱스를 지원하지 않습니다. 첫 번째 인수가 두 번째 인수보다 크면 두 인수가 바뀝니다.

```javascript
const str = "Mozilla";
console.log(str.substring(1, 3)); // 출력: oz
console.log(str.substring(3, 1)); // 출력: oz (인수 바뀜)
```

### `substr()`

이 메서드는 레거시 기능으로 간주되므로 새 코드에는 사용하지 않는 것이 좋습니다. 시작 인덱스와 추출할 부분 문자열의 길이를 받습니다.

## 4. 부분 문자열 교체

### `replace()`

이 메서드는 부분 문자열이 처음 나타나는 곳을 다른 문자열로 바꿉니다. 첫 번째 인수로 정규 표현식을 사용할 수도 있습니다.

```javascript
const str = "The quick brown fox";
const newStr = str.replace("quick", "slow");
console.log(newStr); // 출력: The slow brown fox

const str2 = "apple, banana, apple";
const newStr2 = str2.replace(/apple/, "orange"); // 정규 표현식 사용
console.log(newStr2); // 출력: orange, banana, apple
```

### `replaceAll()`

이 메서드는 부분 문자열이 나타나는 모든 곳을 다른 문자열로 바꿉니다.

```javascript
const str = "apple, banana, apple";
const newStr = str.replaceAll("apple", "orange");
console.log(newStr); // 출력: orange, banana, orange
```

## 5. 대소문자 변환

### `toUpperCase()` 및 `toLowerCase()`

이 메서드들은 문자열을 각각 대문자 또는 소문자로 변환합니다.

```javascript
const str = "Hello World";
console.log(str.toUpperCase()); // 출력: HELLO WORLD
console.log(str.toLowerCase()); // 출력: hello world
```

## 6. 문자열 분할 및 결합

### `split()`

이 메서드는 구분 기호를 기준으로 문자열을 부분 문자열 배열로 분할합니다.

```javascript
const str = "apple,banana,orange";
const arr = str.split(",");
console.log(arr); // 출력: ['apple', 'banana', 'orange']

const str2 = "Hello world";
const arr2 = str2.split(" ");
console.log(arr2); // 출력: ['Hello', 'world']
```

### `join()`

이 메서드는 배열의 요소를 지정된 구분 기호를 사용하여 문자열로 결합합니다.

```javascript
const arr = ["apple", "banana", "orange"];
const str = arr.join(", ");
console.log(str); // 출력: apple, banana, orange
```

## 7. 공백 제거

### `trim()`, `trimStart()`, 및 `trimEnd()`

이 메서드들은 문자열의 시작 및/또는 끝에서 공백을 제거합니다.

```javascript
const str = "   Hello world!   ";
console.log(str.trim()); // 출력: "Hello world!"
console.log(str.trimStart()); // 출력: "Hello world!   "
console.log(str.trimEnd()); // 출력: "   Hello world!"
```

## 8. 템플릿 리터럴 및 문자열 보간

템플릿 리터럴(백틱 사용)을 사용하면 문자열 보간 및 여러 줄 문자열을 쉽게 작성할 수 있습니다.

```javascript
const name = "John";
const age = 30;
const message = `제 이름은 ${name}이고 ${age}살입니다.`;
console.log(message); // 출력: 제 이름은 John이고 30살입니다.

const multiLine = `
이것은
여러 줄
문자열입니다.
`;
console.log(multiLine);
```

## 9. 고급 문자열 조작을 위한 정규 표현식

정규 표현식은 패턴을 기반으로 문자열을 검색, 일치 및 조작하는 강력한 방법을 제공합니다.

### 예: 이메일 주소 추출

```javascript
const text = "info@example.com 또는 support@example.org로 문의하십시오";
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const emails = text.match(emailRegex);
console.log(emails); // 출력: ['info@example.com', 'support@example.org']
```

### 예: 비밀번호 유효성 검사

```javascript
function validatePassword(password) {
  // 비밀번호는 8자 이상이어야 하며 대문자, 소문자, 숫자가 각각 하나 이상 포함되어야 합니다.
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test(password);
}

console.log(validatePassword("Password123")); // 출력: true
console.log(validatePassword("password")); // 출력: false (대문자나 숫자가 없음)
console.log(validatePassword("Short1")); // 출력: false (너무 짧음)
```

## 핵심 요약

- JavaScript는 문자열 조작을 위한 다양한 내장 메서드를 제공합니다.
- 이러한 메서드를 이해하면 일반적인 문자열 관련 작업을 효율적으로 처리할 수 있습니다.
- 정규 표현식은 고급 패턴 일치 및 조작 기능을 제공합니다.
- 템플릿 리터럴은 문자열 보간 및 여러 줄 문자열을 단순화합니다.
- 문자열로 작업할 때는 항상 경계 사례와 잠재적인 오류를 고려하십시오.
- 작업에 적합한 메서드를 선택하면 코드 가독성과 성능이 크게 향상될 수 있습니다.
- 문자열 조작은 데이터 유효성 검사, 텍스트 처리, 사용자 인터페이스 개발을 포함한 많은 프로그래밍 작업의 기본입니다.
