const burgerIcon = document.querySelector('.burger');
const nav = document.querySelector('.navbar-responsive');
const iconLogo = document.querySelector('.logo img');

let isClicked = false;

burgerIcon.addEventListener('click',function(e){
    if(!isClicked){
         nav.classList.toggle('show');
         burgerIcon.firstElementChild.firstElementChild.src = 'assets/icon/close-black.svg';
         nav.style.maxHeight = nav.scrollHeight + 'px';
    }else{
        nav.classList.remove('show');
        burgerIcon.firstElementChild.firstElementChild.src = 'assets/icon/menu-black.svg';
        nav.style.maxHeight = 0;
    }
    isClicked = !isClicked;
});


window.addEventListener("resize", function() {
    if (window.matchMedia("(max-width: 1000px)").matches) {
        iconLogo.src = 'assets/logo/logo-black.png';
    } else {
        iconLogo.src = 'assets/logo/icon.png';
    }
  })
