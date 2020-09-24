let navIcon = document.querySelector('.nav-icon');
let pathOff = './images/icon-hamburger.svg';
let pathOn = './images/icon-close.svg';

function changeNavIcon () {
  if(navIcon.getAttribute('src')===pathOff) {
    navIcon.setAttribute('src', pathOn);
  } else if(navIcon.getAttribute('src')===pathOn) {
    navIcon.setAttribute('src', pathOff);
  };
};

navIcon.addEventListener('click', changeNavIcon);