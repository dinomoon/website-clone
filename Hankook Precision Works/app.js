let btnOpener = document.querySelector('.btn-opener');
let itemList = document.querySelector('.item-list');
let dropDownArrow = document.querySelector('.drop-down i');
btnOpener.addEventListener('click', function() {
  itemList.classList.toggle('open');
  dropDownArrow.classList.toggle('open');
})