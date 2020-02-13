## 메가박스2(2020년 2월 4일 리뉴얼된 홈페이지)

### 일정
  1. 2020년 2월 7일 금요일: 헤더, 푸터 완성 / section01 진행
  2. 2020년 2월 8일 토요일: section01, section04 완성 / section 02 진행
  3. 2020년 2월 9일 일요일: section03 완성
  4. 2020년 2월 10일 월요일: section02 완성
  5. 2020년 2월 11일 화요일: 자바스크립트 진행
  6. 2020년 2월 12일 수요일: 완료 / 복습, 리팩토링
  7. 2020년 2월 13일 목요일: 복습, 리팩토링

### 알게된 것
  1. header: util-area와 link-area의 높이가 0인 것을 봄 -> 자식에게 absolute를 주면 float을 준 것처럼 부모의 높이가 사라진다.
  2. section01: movie-list-info에서 rank는 position: absolute만 줬고 left나 top으로 위치를 조정하지 않았다. -> position: absolute를 주면 그 자리에서 붕 뜨기 때문에 밑의 태그들과 겹쳐지게 된다.
  3. section02: a태그 안에 텍스트가 있는 데 그 텍스트가 이미지 아래에 있게 하려면? a태그를 inline-block 또는 block으로 만들고 padding-top을 준 뒤 background-image로 이미지를 넣으면 된다.
  4. section04: border를 위아래로만 주고 싶다? border: 1px solid #000; border-width: 1px 0;