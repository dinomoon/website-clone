window.addEventListener('load', function(){
  var menuBtn = document.querySelector('.menu-btn');
  var mainMenu = document.querySelector('.main-menu');
  menuBtn.addEventListener('click', function(){
    mainMenu.classList.toggle('show');
  })
})