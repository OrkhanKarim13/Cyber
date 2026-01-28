const firstBar = document.querySelector('.bar-fill');
const secondBar = document.querySelector('.bar-fill-sec');


function startBars() {
// 1️⃣ Animations STOP + reset
firstBar.style.animation = 'none';
secondBar.style.animation = 'none';


firstBar.style.width = '0%';
secondBar.style.width = '0%';


// 2️⃣ Reflow (çox vacibdir)
firstBar.offsetHeight;
secondBar.offsetHeight;


// 3️⃣ Start animations
firstBar.style.animation = 'loadBar 6s linear forwards';
secondBar.style.animation = 'loadBarsec 6s linear forwards 6s';
}




// İlk dəfə başlasın
startBars();


// Hər 12 saniyədən bir TAM reset + restart
setInterval(startBars,  12000);






const header = document.querySelector('.header');


window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
header.classList.add('scrolled');
} else {
header.classList.remove('scrolled');
}
});