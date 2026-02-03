const firstBar = document.querySelector('.bar-fill');
const secondBar = document.querySelector('.bar-fill-sec');


function startBars() {
// 1️⃣ Animations STOP + reset
firstBar.style.animation = 'none';
secondBar.style.animation = 'none';


firstBar.style.width = '0%';
secondBar.style.width = '0%';



firstBar.offsetHeight;
secondBar.offsetHeight;


// 3️⃣ Start animations
firstBar.style.animation = 'loadBar 6s linear forwards';
secondBar.style.animation = 'loadBarsec 6s linear forwards 6s';
}





startBars();



setInterval(startBars,  12000);






const header = document.querySelector('.header');


window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
header.classList.add('scrolled');
} else {
header.classList.remove('scrolled');
}
});


const burger = document.querySelector('.burger-menu');
const mobileMenu = document.getElementById('mobileMenu');
const icon = burger.querySelector('i');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');

  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});





