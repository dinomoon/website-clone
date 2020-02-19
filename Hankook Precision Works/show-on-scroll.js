let contWrap = document.querySelectorAll('.cont-wrap');
let img = document.querySelectorAll('.cont-wrap img');
let offset = 600;
let contWrapOST = new Array();
for (let i=0; i<contWrap.length; i++) {
  contWrapOST[i] = contWrap[i].getBoundingClientRect().top - offset;
}

let section04 = document.querySelector('#section04');
let typeOST = section04.offsetTop;
let types = document.querySelectorAll('#section04 li');

window.addEventListener('scroll', function(){
  for(let i=0; i<contWrap.length; i++) {
    if (this.scrollY > contWrapOST[i]) {
      img[i].classList.add('animate');
    }
  }

  let i = 0;
  if (this.scrollY > typeOST - 600) {
    setInterval(function(){
      if (i < 6) {
        types[i].classList.add('animate');
        i++;
      }
    }, 600);
  }
})