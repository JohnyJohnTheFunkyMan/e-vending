// Navigation Bar Scrolling Effect

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

// 950px Navigation Bar Drop Down
const menu = document.querySelector('.secnav-cont');
const menu_open = document.querySelector('.side-menu');
const menu_close = document.querySelector('.close');

if(menu_open) {
  menu_open.addEventListener('click', ()=> {
    console.log('clicked');
    menu.classList.toggle('dropped');
  })
};
if (menu_close) {
  menu_close.addEventListener('click', ()=> {
    menu.classList.remove('dropped');
  })
}
if(menu) {
  menu.addEventListener('click', ()=> {
    menu.classList.remove('dropped');
  })
}
