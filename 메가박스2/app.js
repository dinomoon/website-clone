window.addEventListener('load', function(){
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
    })(i);
  }
})