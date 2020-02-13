window.addEventListener('load', function(){
  // snb
  var gnbDepth2 = document.querySelectorAll('.gnb-depth2');
  var previous = new Array();

  for (var i=0; i<gnbDepth2.length; i++) {
    previous[i] = gnbDepth2[i].previousSibling.previousSibling;
  }

  for (var i=0; i<gnbDepth2.length; i++) {
    (function(index) {
      gnbDepth2[index].addEventListener('mouseover', function(){
        previous[index].style.borderBottom = "3px solid #fff";
      })
      gnbDepth2[index].addEventListener('mouseout', function(){
        previous[index].style.borderBottom = "none";
      })
      previous[index].addEventListener('mouseover', function(){
        previous[index].style.borderBottom = "3px solid #fff";
      })
      previous[index].addEventListener('mouseout', function(){
        previous[index].style.borderBottom = "none";
      })
    })(i);
  }

  // movie-rank
  var buttons = document.querySelectorAll('#section01 .tab-sorting button');
  var mainMovieList = document.querySelectorAll('#section01 .main-movie-list');
  
  for (var i=0; i<buttons.length; i++) {
    (function(index) {
      buttons[index].addEventListener('click', function(){
        for (var j=0; j<buttons.length; j++) {
          buttons[j].classList.remove('on');
          mainMovieList[j].style.display = 'none';
        }
        buttons[index].classList.add('on');
        mainMovieList[index].style.display = 'block';
      })
    })(i);
  }

  // section02 slider-control
  const lastIdx = 2;
  var currentIdx = 0;
  var cell = document.querySelectorAll('#section02 .cell');
  var btnPrev = document.querySelector('#section02 .btn-prev');
  var btnNext = document.querySelector('#section02 .btn-next');
  var page = document.querySelectorAll('#section02 .page span');
  var pageCount = document.querySelector('#section02 .page-count');
  var txt = document.querySelectorAll('#section02 .position .txt');
  var bg = document.querySelectorAll('#section02 .position .bg');

  function buttonOpacity() {
    if (currentIdx === 0) {
      btnNext.disabled = false;
      btnPrev.disabled = true;
      btnNext.style.opacity = "1";
      btnPrev.style.opacity = "0.5";
    } else if (currentIdx === lastIdx) {
      btnNext.disabled = true;
      btnPrev.disabled = false;
      btnNext.style.opacity = "0.5";
      btnPrev.style.opacity = "1";      
    } else {
      btnNext.disabled = false;
      btnPrev.disabled = false;
      btnNext.style.opacity = "1";
      btnPrev.style.opacity = "1";
    }
  }

  //btnNext
  btnNext.addEventListener('click', function(){
    if (currentIdx < lastIdx) {
      currentIdx++;
      for (var i=0; i<=lastIdx; i++) {
        cell[i].style.display = 'none';
        page[i].classList.remove('on');
        txt[i].style.top = '100px';
        bg[i].style.left = '450px';
      }
      cell[currentIdx].style.display = 'block';
      page[currentIdx].classList.add('on');
      txt[currentIdx].style.top = '0px';
      bg[currentIdx].style.left = '300px';
      pageCount.textContent = currentIdx + 1 + " / 3";
    }
    if (currentIdx === lastIdx && btnPause.classList.contains('on')) {
      buttonOpacity();
      currentIdx = -1;
      btnNext.disabled = false;
    } else {
      buttonOpacity();
    }
  })
  
  //btnPrev
  btnPrev.addEventListener('click', function(){
    if (currentIdx > 0) {
      currentIdx--;
      for (var i=0; i<=lastIdx; i++) {
        cell[i].style.display = 'none';
        page[i].classList.remove('on');
        txt[i].style.top = '100px';
        bg[i].style.left = '450px';
      }
      cell[currentIdx].style.display = 'block';
      page[currentIdx].classList.add('on');
      pageCount.textContent = currentIdx + 1 + " / 3";
      txt[currentIdx].style.top = '0px';
      bg[currentIdx].style.left = '300px';
    }
    buttonOpacity();
  })
  var btnPause = document.querySelector('#section02 .slider-control .btn-pause');
  var btnPlay = document.querySelector('#section02 .slider-control .btn-play');

  //btnPause
  btnPause.addEventListener('click', function(){
    btnPause.classList.remove('on');
    btnPlay.classList.add('on');
    pause();
  })

  //btnPlay
  btnPlay.addEventListener('click', function(){
    btnPlay.classList.remove('on');
    btnPause.classList.add('on');
    play();
  })
  
  
  var clickInterval;
  function play() {
    if(btnPause.classList.contains('on')) {
        clickInterval= setInterval(function(){
        btnNext.click();
      }, 2000);
    }
  }

  function pause() {
    clearInterval(clickInterval);
  }

  play();
})