window.addEventListener('load', () => {
  const like = document.querySelector('#like');
  const disLike = document.querySelector('#dislike');
  const disLikeNum = disLike.childNodes[1];
  const upAndDown = document.querySelectorAll('.upAndDown');
  const moreTxt = document.querySelector('.more_txt');
  const more = document.querySelector('.more');


  // like버튼을 눌렀을 때
  like.addEventListener('click', (e) => {
    e.preventDefault();
    // like버튼이 눌려있을 때
    if (like.classList.contains('selected')) {
      like.classList.remove('selected');
      like.title = '이 동영상이 마음에 듭니다.';
      upAndDown.forEach(e => { e.style.borderColor = '#909090' })
      // disLike버튼이 눌려있을 때
    } else if (disLike.classList.contains('selected')) {
      disLike.classList.remove('selected');
      disLikeNum.textContent = parseInt(disLikeNum.textContent) - 1;
      like.classList.add('selected');
      like.title = '좋아요 취소';
      // 둘 다 눌려있지 않을 때
    } else {
      like.classList.add('selected');
      like.title = '좋아요 취소';
      upAndDown.forEach(e => { e.style.borderColor = '#3ea6ff' })
    }
  })

  // disLike버튼을 눌렀을 때
  disLike.addEventListener('click', (e) => {
    e.preventDefault();
    if (disLike.classList.contains('selected')) {
      disLike.classList.remove('selected');
      disLikeNum.textContent = parseInt(disLikeNum.textContent) - 1;
      upAndDown.forEach(e => { e.style.borderColor = '#909090' })
    } else if (like.classList.contains('selected')) {
      like.classList.remove('selected');
      like.title = '이 동영상이 마음에 듭니다.';
      disLike.classList.add('selected');
      disLikeNum.textContent = parseInt(disLikeNum.textContent) + 1;
    } else {
      disLike.classList.add('selected');
      disLikeNum.textContent = parseInt(disLikeNum.textContent) + 1;
      upAndDown.forEach(e => { e.style.borderColor = '#3ea6ff' })
    }
  })

  moreTxt.addEventListener('click', () => {
    if (moreTxt.textContent === '더보기') {
      more.style.display = 'block';
      moreTxt.textContent = '간략히';
    } else {
      more.style.display = 'none';
      moreTxt.textContent = '더보기';
    }
  })
})