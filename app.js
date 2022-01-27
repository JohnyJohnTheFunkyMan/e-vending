localStorage.setItem("balance", "0");
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

// Deposit Button Effects
var depmenu = document.querySelector('#deposit-menu');
var depbutton = document.querySelector('.dep');
var bal = document.querySelector('.dep-balance>span')
var deposit = document.querySelector('.depos-deposit');
var depCancel = document.querySelector('.depos-cancel');

depbutton.addEventListener('click', ()=> {
  depmenu.classList.add('showmenu');
});

deposit.addEventListener('click', ()=> {
  let val = parseInt(document.querySelector('#debit').value);
  if(isNaN(val)) {
    depmenu.classList.remove('showmenu');
  }
  else {
    let currentBal = parseInt(localStorage.getItem("balance"));
    val += currentBal;
    bal.innerHTML = val;
    localStorage.setItem("balance", val);
    depmenu.classList.remove('showmenu');
  }
});

depCancel.addEventListener('click', ()=> {
  depmenu.classList.remove('showmenu');
})

// Buy Menu Effects
var products = ['Water Bottle', 'Energy Drink', 'Coffee', 'Vitamin Water', 'Soda', 'Lemonade', 'Gatorade', 'Iced Tea'];
var buyinfo = document.querySelector('.buyinfo>p');
var buymenu = document.querySelector('#buy-menu');
var nomoney = document.querySelector('#nomoney');
var card = document.querySelectorAll('.card');
var yes = document.querySelector('.yes');
var cancel = document.querySelector('.cancel');
var okay = document.querySelector('.nmbuttons')

// I TRIED USING FOR LOOP BUT ITS JUST SO DAMN BAD. IT ALWAYS GETS THE LAST INDEX????
var Water = document.querySelector('#Water');
var Energy = document.querySelector('#Energy');
var Coffee = document.querySelector('#Coffee');
var Vitamins = document.querySelector('#Vitamins');
var Soda = document.querySelector('#Soda');
var Lemonade= document.querySelector('#Lemonade');
var Gatorade = document.querySelector('#Gatorade');
var Iced_Tea = document.querySelector('#Iced_Tea');

// Adding event listeners

// Water Bottle
function waterFunc() {
  buyinfo.innerHTML = 'Are you sure you would like to buy this ' + products[0];
  buymenu.classList.add('showmenu');
  let buyBal = parseInt(localStorage.getItem("balance"));
  yes.addEventListener('click', (event)=> {
    console.log("After Click "+buyBal);
    if (buyBal<15) {
      buymenu.classList.remove('showmenu');
      nomoney.classList.add('showmenu');
    }
    else{
      buyBal = buyBal - 15;
      localStorage.setItem("balance", buyBal);
      bal.innerHTML = buyBal;
      buymenu.classList.remove('showmenu');
    }
  });
}
Water.addEventListener('click', waterFunc);
// Energy Drink
function energFunc() {
  buyinfo.innerHTML = 'Are you sure you would like to buy this ' + products[1];
  buymenu.classList.add('showmenu');
  let buyBal = parseInt(localStorage.getItem("balance"));
  yes.addEventListener('click', (event)=> {
    console.log("After Click "+buyBal);
    if (buyBal<40) {
      buymenu.classList.remove('showmenu');
      nomoney.classList.add('showmenu');
    }
    else{
      buyBal = buyBal - 40;
      console.log("After Subtract "+buyBal);
      bal.innerHTML = buyBal;
      localStorage.setItem("balance", buyBal);
      buymenu.classList.remove('showmenu');
    }
  });
}
Energy.addEventListener('click', energFunc);
// coffee
function cofFunc() {
  buyinfo.innerHTML = 'Are you sure you would like to buy this ' + products[1];
  buymenu.classList.add('showmenu');
  let buyBal = parseInt(localStorage.getItem("balance"));
  yes.addEventListener('click', (event)=> {
    console.log("After Click "+buyBal);
    if (buyBal<20) {
      buymenu.classList.remove('showmenu');
      nomoney.classList.add('showmenu');
    }
    else {
      buyBal = buyBal - 20;
      console.log("After Subtract "+buyBal);
      bal.innerHTML = buyBal;
      localStorage.setItem("balance", buyBal);
      buymenu.classList.remove('showmenu');
    }
  });
}
// Vitamin
Coffee.addEventListener('click', cofFunc);
function vitFunc() {
  buyinfo.innerHTML = 'Are you sure you would like to buy this ' + products[1];
  buymenu.classList.add('showmenu');
  let buyBal = parseInt(localStorage.getItem("balance"));
  yes.addEventListener('click', (event)=> {
    console.log("After Click "+buyBal);
    if (buyBal<30) {
      buymenu.classList.remove('showmenu');
      nomoney.classList.add('showmenu');
    }
    else {
      buyBal = buyBal - 30;
      console.log("After Subtract "+buyBal);
      bal.innerHTML = buyBal;
      localStorage.setItem("balance", buyBal);
      buymenu.classList.remove('showmenu');
    }
  });
}
Vitamins.addEventListener('click', vitFunc);
// soda
function sodaFunc() {
  buyinfo.innerHTML = 'Are you sure you would like to buy this ' + products[1];
  buymenu.classList.add('showmenu');
  let buyBal = parseInt(localStorage.getItem("balance"));
  yes.addEventListener('click', (event)=> {
    console.log("After Click "+buyBal);
    if (buyBal<35) {
      buymenu.classList.remove('showmenu');
      nomoney.classList.add('showmenu');
    }
    else {
      buyBal = buyBal - 35;
      console.log("After Subtract "+buyBal);
      bal.innerHTML = buyBal;
      localStorage.setItem("balance", buyBal);
      buymenu.classList.remove('showmenu');
    }
  });
}
Soda.addEventListener('click', sodaFunc);
// Lemonade
function lemFunc() {
  buyinfo.innerHTML = 'Are you sure you would like to buy this ' + products[1];
  buymenu.classList.add('showmenu');
  let buyBal = parseInt(localStorage.getItem("balance"));
  yes.addEventListener('click', (event)=> {
    console.log("After Click "+buyBal);
    if (buyBal<60) {
      buymenu.classList.remove('showmenu');
      nomoney.classList.add('showmenu');
    }
    else {
      buyBal = buyBal - 60;
      console.log("After Subtract "+buyBal);
      bal.innerHTML = buyBal;
      localStorage.setItem("balance", buyBal);
      buymenu.classList.remove('showmenu');
    }
  });
}
Lemonade.addEventListener('click', lemFunc);
// Gatorade
function gatFunc() {
  buyinfo.innerHTML = 'Are you sure you would like to buy this ' + products[1];
  buymenu.classList.add('showmenu');
  let buyBal = parseInt(localStorage.getItem("balance"));
  yes.addEventListener('click', (event)=> {
    console.log("After Click "+buyBal);
    if (buyBal<30) {
      buymenu.classList.remove('showmenu');
      nomoney.classList.add('showmenu');
    }
    else {
      buyBal = buyBal - 30;
      console.log("After Subtract "+buyBal);
      bal.innerHTML = buyBal;
      localStorage.setItem("balance", buyBal);
      buymenu.classList.remove('showmenu');
    }
  });
}
Gatorade.addEventListener('click', gatFunc);
// Iced Tea
function itFunc() {
  buyinfo.innerHTML = 'Are you sure you would like to buy this ' + products[1];
  buymenu.classList.add('showmenu');
  let buyBal = parseInt(localStorage.getItem("balance"));
  yes.addEventListener('click', (event)=> {
    console.log("After Click "+buyBal);
    if (buyBal<20) {
      buymenu.classList.remove('showmenu');
      nomoney.classList.add('showmenu');
    }
    else {
      buyBal = buyBal - 20;
      console.log("After Subtract "+buyBal);
      bal.innerHTML = buyBal;
      localStorage.setItem("balance", buyBal);
      buymenu.classList.remove('showmenu');
    }
  });
}
Iced_Tea.addEventListener('click', itFunc);


cancel.addEventListener('click', ()=> {
  buymenu.classList.remove('showmenu');
});

okay.addEventListener('click', ()=> {
  nomoney.classList.remove('showmenu');
})
