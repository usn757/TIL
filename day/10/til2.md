# 오늘 배운 것 (TIL) - 10일차

## 실습 2: 기본적인 DOM 조작

**파일:** `ex02/index.html`

**코드:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM</title>
  </head>
  <body>
    <div class="container">
      <ul>
        <li id="item1">Item 1</li>
        <li id="item2">Item 2</li>
        <li id="item3"><strong>Item 3</strong></li>
        <li id="item4">Item 4</li>
        <li id="item5">Item 5</li>
      </ul>
      <ol>
        <li class="item" id="element1">Element 1</li>
        <li class="item" id="element2">Element 2</li>
        <li class="item" id="element3">Element 3</li>
        <li id="element4">Element 4</li>
        <li id="element5">Element 5</li>
      </ol>
    </div>
    <script>
      const listItem3 = document.getElementById("item3");
      console.log(listItem3.innerHTML);
      console.log(listItem3.innerText);
      listItem3.innerHTML = "<strong>Changed Item 3</strong>";
      console.log(listItem3.innerHTML);
      console.log(listItem3.innerText);

      const listItem4 = document.getElementById("item4");
      listItem4.innerText = "<strong>Changed Item 4</strong>";
      console.log(listItem4.innerHTML);
      console.log(listItem4.innerText);

      const element1 = document.querySelector("#element3");
      console.log(element1);

      const element2 = document.querySelectorAll("#element3");
      console.log(element2);

      const element3 = document.querySelector(".item");
      console.log(element3.innerText);

      const element4 = document.querySelectorAll(".item");
      console.log(element4.innerText);
      console.log(Array.from(element4).map((el) => el.innerText));

      const element5 = document.querySelectorAll("li");
      console.log([...element5].map((el) => el.innerText.toUpperCase()));
    </script>
  </body>
</html>
```

**설명:**

- HTML은 두 개의 목록을 설정합니다: 순서가 없는 목록(`ul`)과 순서가 있는 목록(`ol`).
- **요소 선택:** 코드는 `getElementById`, `querySelector`, `querySelectorAll`을 사용한 요소 선택을 보여줍니다.
  - `getElementById`: 고유한 ID로 요소를 선택합니다.
  - `querySelector`: 주어진 CSS 선택자와 일치하는 첫 번째 요소를 선택합니다.
  - `querySelectorAll`: 주어진 CSS 선택자와 일치하는 모든 요소를 선택하여 NodeList를 반환합니다.
- **내용 수정:**
  - `innerHTML`: 요소 내의 HTML 내용을 가져오거나 설정합니다. 설정할 때 문자열을 HTML로 구문 분석합니다.
  - `innerText`: 요소의 텍스트 내용을 가져오거나 설정합니다. 설정할 때 문자열을 일반 텍스트로 처리하여 HTML 태그를 이스케이프합니다.
- **NodeList와 배열:**
  - `querySelectorAll`은 NodeList를 반환하는데, 이는 배열과 유사하지만 모든 배열 메서드를 가지고 있지는 않습니다.
  - `Array.from` 또는 전개 연산자(`...`)를 사용하여 NodeList를 배열로 변환하여 `map`과 같은 배열 메서드를 사용할 수 있습니다.

## 실습 3: 외부 JavaScript 파일

이 실습은 외부 JavaScript 파일을 포함하고 사용하는 방법을 보여줍니다.

**파일:** `ex03/index.html`, `ex03/index.js`

**코드:**

**`ex03/index.html`**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      console.log("Inline script");
    </script>
    <script src="index.js"></script>
  </body>
</html>
```

**`ex03/index.js`**

```javascript
console.log("Message from external file");
alert("Alert 1");
alert("Alert 2");
```

**설명:**

- **외부 스크립트 태그:** `index.html`의 `<script src="index.js"></script>` 태그는 외부 JavaScript 파일 `index.js`를 포함합니다.
- **`console.log` 대 `alert`:**
  - `console.log`는 주로 디버깅에 사용되며 브라우저 콘솔에 메시지를 출력합니다.
  - `alert`는 사용자에게 팝업 메시지를 표시하고 사용자가 "OK"를 클릭할 때까지 스크립트 실행을 일시 중지합니다.
- **외부 파일의 이점:** JavaScript 코드를 외부 파일로 분리하면 코드 구성, 재사용성 및 유지 관리성이 향상됩니다.

## 실습 4: 동적 요소 생성 및 이벤트 처리

이 실습은 동적으로 요소를 생성하고, 이벤트 리스너를 추가하고, 요소를 제거하는 방법을 보여줍니다.

**파일:** `ex04/index.html`

**코드:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM 2</title>
  </head>
  <body>
    <button onclick="onButtonClick()">Click Me</button>

    <script>
      function onButtonClick() {
        alert("Button clicked!");
      }
    </script>

    <div>
      <button onclick="addItem()">Add Item</button>
      <button onclick="removeItem()">Remove Item</button>
      <button onclick="resetItems()">Reset</button>
    </div>

    <style>
      #container {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        justify-content: center;
      }
      #container > div {
        display: flex;
        background-color: beige;
        border-radius: 100%;
        border: 1px solid black;
        width: 120px;
        height: 120px;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
    </style>

    <div id="container"></div>
    <script>
      let elementCounter = 0;
      function addItem() {
        const container = document.querySelector("#container");
        const innerElement = document.createElement("div");
        innerElement.textContent = "Item";
        const outerElement = document.createElement("div");

        innerElement.id = `innerElement-${elementCounter}`;
        outerElement.id = `outerElement-${elementCounter}`;
        elementCounter++;

        outerElement.classList.add("item");
        innerElement.classList.add("textItem");
        outerElement.appendChild(innerElement);
        container.appendChild(outerElement);
      }

      function removeItem() {
        try {
          container.removeChild(container.lastElementChild);
        } catch {
          alert("No more items!");
        }
      }

      function resetItems() {
        container.innerHTML = "";
      }
    </script>
  </body>
</html>
```

**설명:**

- **이벤트 처리:** HTML의 `onclick` 속성을 사용하여 이벤트 핸들러를 요소에 직접 연결할 수 있습니다.
- **`createElement`:** `document.createElement` 메서드는 지정된 태그 이름의 새 HTML 요소를 생성합니다.
- **`appendChild`:** `appendChild` 메서드는 자식 요소를 부모 요소에 추가합니다.
- **`removeChild`:** `removeChild` 메서드는 부모 요소에서 자식 요소를 제거합니다.
- **동적 ID 및 클래스:** 코드는 동적으로 생성된 요소에 고유한 ID를 할당하고 CSS 클래스를 추가하는 방법을 보여줍니다.
- **오류 처리:** `removeItem` 함수는 제거할 항목이 더 이상 없는 경우를 처리하기 위해 `try...catch` 블록을 사용합니다.

## 실습 5: 이벤트 리스너

이 실습은 `addEventListener`를 사용하여 이벤트 리스너를 연결하고 `removeEventListener`를 사용하여 제거하는 방법을 보여줍니다.

**파일:** `ex05/index.html`

**코드:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event</title>
  </head>
  <body>
    <button id="button1">Button 1</button>
    <button id="button2">Button 2</button>

    <script>
      const button1 = document.querySelector("#button1");
      const button2 = document.querySelector("#button2");

      const clickHandler = () => alert("Button 1 clicked!");
      button1.addEventListener("click", clickHandler);
      button2.addEventListener("click", function () {
        button1.removeEventListener("click", clickHandler);
        for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
          button1.addEventListener("click", () =>
            alert(`Random number: ${Math.random()}`)
          );
        }
      });
    </script>
  </body>
</html>
```

**설명:**

- **`addEventListener`:** `addEventListener` 메서드는 요소에 이벤트 리스너를 연결합니다. 이벤트 유형(예: "click")과 이벤트 핸들러 함수의 두 가지 주요 인수를 사용합니다.
- **`removeEventListener`:** `removeEventListener` 메서드는 요소에서 이벤트 리스너를 제거합니다. `addEventListener`와 동일한 인수를 사용합니다.
- **다중 이벤트 리스너:** 코드는 동일한 요소에 여러 이벤트 리스너를 연결할 수 있음을 보여줍니다. 그러나 예제와 같이 루프에서 리스너를 추가하면 예기치 않은 동작과 성능 문제가 발생할 수 있습니다.

## 실습 6: 기본 동작 방지

이 실습은 `event.preventDefault()`를 사용하여 HTML 요소의 기본 동작을 방지하는 방법을 보여줍니다.

**파일:** `ex06/index.html`

**코드:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Prevent Default</title>
  </head>
  <body>
    <a id="link" href="https://example.com">Go to Example</a>
    <script>
      const link = document.querySelector("#link");
      link.addEventListener("click", function (event) {
        event.preventDefault();
        console.log(event);
        location.href = "https://example.com";
      });
    </script>

    <form id="form">
      <input name="name" type="text" placeholder="Enter name" />
      <input name="age" type="number" placeholder="Enter age" />
      <input name="job" type="text" placeholder="Enter job" />
      <button id="submitButton">Submit</button>
    </form>

    <script>
      const form = document.querySelector("#form");
      const submitButton = document.querySelector("#submitButton");
      submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        console.log(event);
        const formData = new FormData(form);
        for (const [key, value] of formData) {
          console.log(`${key}: ${value}`);
        }
      });
    </script>
  </body>
</html>
```

**설명:**

- **`event.preventDefault()`:** 이 메서드는 이벤트와 관련된 기본 동작을 방지합니다. 예를 들어, 앵커 태그를 클릭하면 일반적으로 지정된 URL로 이동하고 양식을 제출하면 일반적으로 양식 데이터가 서버로 전송됩니다.
- **앵커 태그:** 예제에서 `event.preventDefault()`는 앵커 태그의 기본 탐색 동작을 방지하는 데 사용됩니다. 대신 코드는 `location.href`를 사용하여 페이지 위치를 수동으로 변경합니다.
- **양식:** `event.preventDefault()`는 기본 양식 제출 동작을 방지하는 데 사용됩니다. 대신 코드는 `FormData`를 사용하여 양식 데이터에 액세스하고 콘솔에 기록합니다.
- **`FormData`:** `FormData` 객체는 양식 필드와 해당 값을 나타내는 키/값 쌍 집합을 쉽게 구성하는 방법을 제공합니다.

## 실습 7: 이미지 선택 토너먼트

이 실습은 JavaScript를 사용하여 간단한 이미지 선택 "토너먼트"를 구현합니다.

**파일:** `ex07/index.html`

**코드:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tournament</title>
    <style>
      #container {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 50px;
      }
      div > img {
        width: 240px;
        cursor: pointer;
        transition: transform 0.2s;
      }
      div > img:hover {
        transform: scale(1.1);
      }
    </style>
  </head>
  <body>
    <div id="container"></div>
    <h2 id="result" style="text-align: center; margin-top: 20px"></h2>

    <script>
      let items = ["1", "2", "3", "4"]; // 실제 시나리오에서는 적절한 이미지 이름으로 교체
      let randomizedItems = [...items].sort(() => Math.random() - 0.5);
      const container = document.querySelector("#container");
      const resultText = document.querySelector("#result");

      function displayMatch() {
        container.innerHTML = "";

        if (randomizedItems.length === 1) {
          resultText.textContent = `Winner: ${randomizedItems[0]}`;
          return;
        }

        const item1 = randomizedItems.pop();
        const item2 = randomizedItems.pop();

        const image1 = document.createElement("img");
        image1.src = item1 + ".jpg";
        image1.addEventListener("click", () => {
          randomizedItems.unshift(item1);
          nextRound();
        });

        const image2 = document.createElement("img");
        image2.src = item2 + ".jpg";
        image2.addEventListener("click", () => {
          randomizedItems.unshift(item2);
          nextRound();
        });

        container.appendChild(image1);
        container.appendChild(image2);
      }

      function nextRound() {
        setTimeout(displayMatch, 300);
      }

      displayMatch();
    </script>
  </body>
</html>
```

**설명:**

- **섞기:** `items` 배열은 Fisher-Yates 섞기 알고리즘을 사용하여 요소의 순서를 무작위로 지정합니다.
- **토너먼트 로직:** `displayMatch` 함수는 두 항목 간의 경기를 시뮬레이션합니다. 사용자는 이미지를 클릭하여 경기의 승자를 선택합니다. 선택한 항목은 `randomizedItems` 배열의 시작 부분에 다시 추가되고 프로세스는 하나의 항목만 남을 때까지 계속됩니다.
- **`setTimeout`:** `nextRound` 함수는 `setTimeout`을 사용하여 다음 경기를 표시하기 전에 지연을 도입하여 시각적으로 더 매력적인 경험을 제공합니다.
