window.addEventListener ('DOMContentLoaded',function(){
  document.querySelector('#burger').addEventListener('click',function()
  {document.querySelector('#menu-mobile').classList.add ('nav__menu-mobile-active');
})

document.querySelector('#menu-close').addEventListener('click',function()
  {document.querySelector('#menu-mobile').classList.remove ('nav__menu-mobile-active');
})
})


