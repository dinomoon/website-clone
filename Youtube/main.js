window.addEventListener('load', () => {
  const moreTxt = document.querySelector('.more_txt');
  const more = document.querySelector('.more');
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