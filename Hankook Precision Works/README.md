## Hankook Precision Works
디비컷에 들어갔다가 봤는 데 재밌어보여서 시작! 참고: 한국프리시전웍스는 한국타이어의 계열사다.

## 일정
  1. 2020년 2월 15일 토요일: 헤더, section01,02,03 완성
  2. 2020년 2월 16일 일요일: gnb hover 완성
  3. 2020년 2월 17일 월요일: section04,05 footer 완성
  4. 2020년 2월 18일 화요일: 바닐라 자바스크립트로 scroll snap 구현하려고 했는 데, 잘 안됨..
  5. 2020년 2월 19일 수요일: show-on-scroll.js 완성, dropdown 메뉴 완성! => scroll snap 빼고 모두 완성

## 알게된 것
  1. 스크롤을 했을 때, 다음 화면으로 자연스럽게 스르륵 넘어가는 것을 'scroll snap'이라고 한다.
  2. 영어, 한글 폰트 동시에 적용시키는 방법: font-family: 영문폰트, 한글폰트 순서로 하면 된다.
  3. gnb에 hover를 했을 때, 가운데를 기준으로 길어지기 시작해서 다시 짧아지는 데 어떻게? => 가상선택자 after를 사용! + 마진 오토를 사용해 가운데에서 시작할 수 있게 함.
  4. image transform: scale(1.1) 안됬던 이유: transition: 0.3 ease-out; 라고 해서! 0.3s 's'까지 붙여줘야한다!

## 생소한 것
  1. scroll snap
  2. image가 슬라이드 되면서 들어오는 것
  3. image transform:scale(1.1); transition
  4. dropdown list