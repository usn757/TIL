# Position

```css
/*
	position 속성 값
*/
.element1 {
  /*  static (default) 
		- 요소의 기본 위치 지정 방식
		- 문서의 일반적인 흐름을 따름
		- top, right, bottom, left, z-index 속성이 적용되지 않음 
	*/
  position: static;
}

.parent {
  /*  relative
		- 요소를 일반적인 문서 흐름에 따라 배치 후, 원래 위치 기준으로 오프셋 적용
		- top, right, bottom, left 속성으로 위치 조정 가능
		- 다른 요소의 레이아웃에 영향을 주지 않음
	*/
  position: relative;
  top: 15px;
  left: 30px;
}
.child {
  /*  absolute
	- 요소를 일반적 문서 흐름에서 제거하고, 가장 가까운 위치 지정
	- 조상 중 위치 지정 요소가 없다면 초기 컨테이닝 블록(보통)을 기준
	- top, right, bottom, left 속성으로 위치 지정
*/
  position: absolute;
  top: 20px;
  left: 20px;
}
.element2 {
  /*  fixed
	- 요소를 일반적인 문서 흐름에서 제거, 뷰포트(브라우저 창)를 기준으로 고정 위치에 배치
	- 스크롤해도 항상 같은 위치에 유지
	- top, right, bottom, left 속성으로 위치 지정 
*/
  position: fixed;
  top: 25px;
  right: 25px;
}
.element3 {
  /*  sticky
	- 요소를 일반적 문서 흐름에 따라 배치하다, 지정된 힘계점에 도달하면 fixed처럼 동작
	- 스크롤 위치가 임계점을 넘어가면 요소가 화면에 고정
	- 부모 컨테이너 내에서만 고정
*/
  position: sticky;
  top: 10px;
}

/*  z-index
	- z-index는 요소의 쌓임 순서(stacking order) 제어
	- 높은 값을 가진 요소가 낮은 값을 가진 요소 위에 표시
	- position 값이 static이 아닌 요소에만 적용
	- 음수 값도 사용 가능
*/
.element4 {
  position: absolute;
  z-index: 2;
}
.element5 {
  position: absolute;
  z-index: 1;
}
```

# Flex

https://flexboxfroggy.com/#ko

https://getbootstrap.com/docs/5.3/utilities/flex/

### Flex

- 개념 - 컨테이너 내의 아이템 간 공간 배분과 정렬 기능을 제공하는 1D Layout Model
- 장점 - 주로 행이나 열 단위 작동, 복잡한 계산 없이도 요소들의 유연한 크기와 순서 배치 가능
  1. 복잡한 레이아웃 → 간단하게 구현
  2. 컨테이너 내 요소의 크기가 불명확 or 동적인 경우 → 효과적 대응
  3. 콘텐츠 중앙 정렬 , 균등 분배 → easy
  4. 요소 순서를 CSS로 변경 가능 → 반응형 디자인에 USEFUL
  5. Position, Float 사용할 때보다 코드 간결

```html
<div class="flex-container">
  <!-- flex-item : Flex 컨테이너의 직계 자식 요소. Flexbox 규칙에 따라 배치됨 -->
  <div class="flex-item">아이템 1</div>
  <div class="flex-item">아이템 2</div>
  <div class="flex-item">아이템 3</div>
</div>
```

```css
/* 
	주요 Flexbox 속성 
*/
.container {
  /* 요소를 Flex 컨테이너로 정의 */
  /* display: flex를 적용한 부모 요소. Flexbox의 context를 생성 */
  display: flex;

  /* Flex 아이템들의 배치 방향을 결정 */
  /* row | row-reverse | column | column-reverse */
  flex-direction: row;

  /* 주축(main axis)을 따라 Flex 아이템들을 정렬 */
  /* flex-start | flex-end | center | space-between | space-around | space-evenly */
  justify-content: center;

  /* 교차축(cross axis)을 따라 Flex 아이템들을 정렬 */
  /* stretch | flex-start | flex-end | center | baseline */
  align-items: flex-end;

  /* Flex 아이템들이 컨테이너를 초과할 경우 줄 바꿈 여부를 결정 */
  /* nowrap | wrap | wrap-reverse */
  flex-wrap: nowrap;

  /* 여러 행(row)이 있을 때 교차축(cross axis)을 따라 행 간의 정렬 방식을 지정 */
  /* flex-start | flex-end | center | space-between | space-around | stretch */
  align-content: stretch;
}
/*해보면 감잡기 쉽다*/

/*
	Flex 아이템 속성
*/
.item {
  /* 아이템이 Flex 컨테이너 내에서 남은 공간을 얼마나 차지할지 비율로 지정 */
  /* 0 | 1 | <number> */
  flex-grow: 2;

  /* Flex 컨테이너의 크기가 줄어들 때 아이템이 축소되는 비율을 지정 */
  /* 0 | 1 | <number> */
  flex-shrink: 0;

  /* 아이템의 기본 크기를 지정. `auto`는 내용에 따라 크기를 결정. */
  /* auto | <length> */
  flex-basis: auto;

  /* `flex-grow`, `flex-shrink`, `flex-basis`를 한 번에 설정하는 축약 속성 */
  /* none | [<flex-grow> <flex-shrink> <flex-basis>] */
  flex: none;

  /* 아이템의 배치 순서를 지정. 기본값은 `0` */
  /* <integer> */
  order: 2;
}
```
