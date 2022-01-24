const NAVBAR = document.querySelector('nav');

window.addEventListener('scroll', ()=> {
  let scrollVal = window.scrollY;
  if(scrollVal > 50) {
    NAVBAR.classList.add('scrolled');
  }
  else {
    NAVBAR.classList.remove('scrolled');
  }
})
