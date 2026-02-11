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


const langSelector = document.querySelector('.lang-selector');
const currentLang = document.querySelector('.current-lang');
const langOptions = document.querySelectorAll('.lang-dropdown div');


// dropdown aç/bağla
langSelector.addEventListener('click', () => {
  langSelector.classList.toggle('active');
});


// dil dəyişmək
langOptions.forEach(option => {
  option.addEventListener('click', (e) => {

    const selectedLang = e.target.dataset.lang;

    currentLang.textContent = selectedLang.toUpperCase();

    // localStorage save
    localStorage.setItem("siteLang", selectedLang);

    // dropdown bağla
    langSelector.classList.remove('active');

    // DEMO üçün reload (real layihədə translation olacaq)
    location.reload();

  });
});


// səhifə açılarkən dili load et
const savedLang = localStorage.getItem("siteLang");

if(savedLang){
  currentLang.textContent = savedLang.toUpperCase();
}



