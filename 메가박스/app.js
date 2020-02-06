window.addEventListener('load', function(){
  var tabs = document.querySelectorAll('#movies .tab');
  var content = document.querySelectorAll('#movies .content');

  this.console.log(content);

  tabs.forEach(function(tab, idx){
    tab.addEventListener('click', function(){
      for(var i=0; i<tabs.length; i++){
        tabs[i].classList.remove('clicked');
        content[i].style.display = 'none';
      }
      if(tab.classList.contains('clicked')){
        return;
      } else {
        tab.classList.add('clicked');
        content[idx].style.display = 'block';
      }
    })
  })
})
