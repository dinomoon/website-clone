// function smoothScroll(target, duration) {
//   var target = document.querySelector('#section01');
//   var targetPosition = target.getBoundingClientRect().top;
//   var startPosition = window.pageYOffset;
//   var distance = targetPosition - startPosition;
//   var startTime = null;

//   function animation(currentTime) {
//     if(startTime === null) startTime = currentTime;
//     var timeElapsed = currentTime - startTime;
//     var run = ease(timeElapsed, startPosition, distance, duration);
//     window.scrollTo(0, run);
//     if(timeElapsed < duration) requestAnimationFrame(animation);
//   }

//   function ease(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return c / 2 * t * t + b;
//     t--;
//     return -c / 2 * (t * (t - 2) - 1) + b;
//   }

//   requestAnimationFrame(animation);
// }




var header = document.querySelector('header');

// header.addEventListener('wheel', function(){
//   window.scroll({
//     top: 947,
//   });
// })

// function scrollDown() {
//   window.scrollTo({
//     top: 947,
//     behavior: 'smooth'
//   });
// }

// function scrollUp() {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// }

// header.addEventListener('wheel', function() {
//   var y = event.deltaY;
//   console.log(y)
//   window.scrollTo({
//     top: 947,
//     behavior: 'smooth'
//   });
// })

// window.addEventListener('scroll', function() {
//   if (window.scrollY > 0) {
//     this.scrollTo({
//       top: 947,
//       behavior: 'smooth'
//     });
//   }
// })