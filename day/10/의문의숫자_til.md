# TIL: `의문의숫자` 이해하기 - GitHub 이슈 자동 생성

이 문서는 `github_power_actions` 디렉토리에 있는 코드를 설명합니다. 이 코드는 GitHub API와 JavaScript 액션을 사용하여 GitHub 저장소에 자동으로 이슈를 생성하는 방법을 보여줍니다.

## 개요

`github_power_actions`의 코드는 지정된 저장소에 GitHub 이슈를 생성하도록 설계되었습니다. 인증을 위해 개인 액세스 토큰(PAT)을 사용하고 GitHub API에 POST 요청을 보내 본문에 임의의 숫자가 있는 새 이슈를 생성합니다. 이러한 유형의 자동화는 다음과 같은 다양한 목적에 유용할 수 있습니다.

- 일일 또는 주간 작업 생성.
- 임의의 프롬프트 또는 과제 생성.
- 특정 이벤트 또는 트리거를 기반으로 이슈 생성 자동화.
- GitHub Actions 워크플로우 테스트.

## 코드 분석: `index.js`

핵심 로직은 비동기 함수 `makeIssue`가 포함된 `index.js` 파일에 있습니다. 코드를 단계별로 분석해 보겠습니다.

```javascript
async function makeIssue() {
  const token = process.env.GH_TOKEN; // 주의! 일치해야함 (env와 일치해야함)
  // 요고 1
  const OWNER = "TestSetupMyOrganizationByUSN"; // 여러분들의 github 계정 이름
  // 요고 2
  const REPO = "github_power_actions";
  const response = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/issues`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: "당신에게 주어진 의문의 숫자",
        body: `${Math.floor(Math.random() * 45) + 1}`,
      }),
    }
  );
  if (response.ok) {
    console.log("성공");
  } else {
    console.log("실패");
  }
}

makeIssue();
```

### 1. 인증을 위한 환경 변수

```javascript
const token = process.env.GH_TOKEN;
```

- 이 줄은 `GH_TOKEN`이라는 환경 변수에서 GitHub 개인 액세스 토큰(PAT)을 가져옵니다.
- **중요:** GitHub 설정에서 PAT를 생성하고 `GH_TOKEN` 환경 변수를 이 토큰의 값으로 설정해야 합니다. PAT는 이슈를 생성하기 위해 `repo` 범위가 있어야 합니다.
- 이 토큰은 GitHub API에 대한 요청을 인증하는 데 사용되어 코드가 사용자 대신 이슈를 생성할 수 있도록 합니다.

### 2. 저장소 소유자 및 이름

```javascript
const OWNER = "TestSetupMyOrganizationByUSN";
const REPO = "github_power_actions";
```

- 이 줄은 소유자(GitHub 사용자 이름 또는 조직 이름)와 이슈가 생성될 저장소 이름을 정의합니다.
- **중요:** `"TestSetupMyOrganizationByUSN"`을 실제 GitHub 사용자 이름 또는 조직으로 바꾸고 `"github_power_actions"`를 올바른 저장소 이름으로 바꾸십시오.

### 3. API 요청하기

```javascript
const response = await fetch(
  `https://api.github.com/repos/${OWNER}/${REPO}/issues`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: "당신에게 주어진 의문의 숫자",
      body: `${Math.floor(Math.random() * 45) + 1}`,
    }),
  }
);
```

- 이 코드는 `fetch` API를 사용하여 GitHub API의 이슈 생성 엔드포인트 `https://api.github.com/repos/${OWNER}/${REPO}/issues`에 `POST` 요청을 보냅니다.
- **`method: 'POST'`:** 새 리소스를 생성하는 데 사용되는 POST 요청임을 지정합니다.
- **`headers`:**
  - **`Authorization: Bearer ${token}`:** 이 헤더는 인증 토큰을 제공하여 코드가 사용자 대신 작동하도록 합니다.
- **`body`:**
  - **`title: "당신에게 주어진 의문의 숫자"`:** 이슈의 제목을 설정합니다.
  - **`body: ${Math.floor(Math.random() * 45) + 1}`:** 이슈의 본문을 1에서 45 사이의 임의의 숫자로 설정합니다. `Math.random()`은 0(포함)과 1(제외) 사이의 임의의 숫자를 생성합니다. 여기에 45를 곱하고 `Math.floor`로 가장 가까운 정수로 내림합니다. 마지막으로 1을 더하여 숫자가 1에서 45 사이가 되도록 합니다.
- **`await`:** `fetch`가 Promise를 반환하기 때문에 `await` 키워드가 사용됩니다. `await`는 Promise가 해결될 때까지(요청이 완료될 때까지) 함수의 실행을 일시 중지합니다.

### 4. 응답 처리

```javascript
if (response.ok) {
  console.log("성공");
} else {
  console.log("실패");
}
```

- 이 코드는 응답 객체의 `ok` 속성을 확인합니다.
- **`response.ok`:** 이 속성은 HTTP 상태 코드가 200-299 범위(성공)에 있으면 `true`이고 그렇지 않으면 `false`입니다.
- 요청이 성공하면 콘솔에 "성공"을 기록하고 그렇지 않으면 "실패"를 기록합니다.

### 5. 함수 호출

```javascript
makeIssue();
```

- 이 줄은 `makeIssue` 함수를 호출하여 GitHub 이슈 생성 프로세스를 시작합니다.

## `.github` 및 GitHub Actions의 역할

저장소의 `.github` 디렉토리는 이 코드가 GitHub Action의 일부로 사용되도록 의도되었음을 나타냅니다. GitHub Actions는 푸시, 풀 리퀘스트 또는 일정과 같은 저장소의 다양한 이벤트에 의해 트리거될 수 있는 자동화된 워크플로우입니다.

이 코드는 임의의 숫자로 이슈를 생성하기 위해 주기적으로(예: 매일 또는 매주) 실행되는 워크플로우의 일부일 수 있습니다.

## `README.md`

현재 `README.md` 파일은 매우 기본적이며 많은 정보를 제공하지 않습니다. 좋은 README는 다음을 설명해야 합니다.

- 코드의 목적.
- 코드를 설정하고 사용하는 방법(PAT 생성 및 환경 변수 설정 포함).
- GitHub Action을 구성하는 방법(해당하는 경우).
- 기타 관련 정보.

## 결론

`github_power_actions` 코드는 GitHub API와 JavaScript를 사용하여 GitHub 이슈 생성을 자동화하는 간단한 예제를 제공합니다. 코드를 이해하고 필요한 설정을 구성하면 GitHub 저장소 내에서 다양한 자동화 작업에 맞게 조정할 수 있습니다. 코드를 효과적으로 사용하는 방법을 사용자에게 안내하기 위해 설명이 포함된 `README.md`를 작성하는 것을 잊지 마십시오.
