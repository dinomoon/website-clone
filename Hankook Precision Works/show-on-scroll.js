let contWrap = document.querySelectorAll('.cont-wrap');
let img = document.querySelectorAll('.cont-wrap img');
let offset = 600;
let contWrapOST = new Array();
for (let i=0; i<contWrap.length; i++) {
  contWrapOST[i] = contWrap[i].getBoundingClientRect().top - offset;
}

console.log(contWrapOST);
window.addEventListener('scroll', function(){
  for(let i=0; i<contWrap.length; i++) {
    if (this.scrollY > contWrapOST[i]) {
      img[i].classList.add('animate');
    }
  }
})