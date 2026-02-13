
// // ================= HEADER SCROLL =================

// const header = document.querySelector('.header');
// const headerTop = document.querySelector(".header-top")

// window.addEventListener('scroll', () => {
//   if (window.scrollY > 50) {
//     header.classList.add('scrolled');
//     headerTop.classList.add("hide");
//   } else {
//     header.classList.remove('scrolled');
//   }
// });

// // ================= BURGER MENU =================


// const burger = document.querySelector('.burger-menu');
// const mobileMenu = document.getElementById('mobileMenu');
// const icon = burger.querySelector('i');

// burger.addEventListener('click', () => {
//   mobileMenu.classList.toggle('active');

//   icon.classList.toggle('fa-bars');
//   icon.classList.toggle('fa-xmark');
// });






// // ================= LANGUAGE SYSTEM =================

// const langSelector = document.querySelector('.lang-selector');
// const currentLang = document.querySelector('.current-lang');
// const langOptions = document.querySelectorAll('.lang-dropdown div');

// // dropdown aç/bağla
// langSelector.addEventListener('click', () => {
//   langSelector.classList.toggle('active');
// });


// const translations = {
//   az: {
//     heroTitle: "Oyna, Qazan, Əylən!",
//     playBtn: "Oyna",
//     promoTop: "Yeni istifadəçilər üçün CYBER+ 30% endirimlə!",
//     navTournaments: "Turnirlər",
//     navRating: "Reytinq",
//     navShop: "Mağaza",
//     navContact: "Əlaqə",
//     heroSubtitle: "Turnirlərə qoşul mükafatlar qazan!",
//     valorantTitle: "Valorant Turnirləri",
//     infoText: "Bir addımlı qiymətləndirməmizdə bacarıqlarınızı nümayiş etdirin...",
//     followUs: "Bizi izləyin",
//     heroText: "Bir addımlı qiymətləndirməmizdə bacarıqlarınızı nümayiş etdirin və 450 min dollara qədər simulyasiya kapitalı qazanın. Gələcək indidir!",
//     latestGames: "Ən son oyunlar",
//     join: "Qoşul",
//     updateInventory: "Envanterini yenilə",
//     bestPlayers: "3 ən yaxşı oyunçu",
//     arenaFame: "Şöhrət Arenası",
//     battleTeams: "Komandaların mübarizəsi",
//     team: "komanda"

//   },
//   en: {
//     heroTitle: "Play, Win, Enjoy!",
//     playBtn: "Play",
//     promoTop: "CYBER+ 30% discount for new users!",
//     navTournaments: "Tournaments",
//     navRating: "Ranking",
//     navShop: "Shop",
//     navContact: "Contact",
//     heroSubtitle: "Join tournaments and win rewards!",
//     cs2Title: "CS2 Tournaments",
//     valorantTitle: "Valorant Tournaments",
//     infoText: "Show your skills in our one-step evaluation...",
//     followUs: "Follow us",
//     heroText: "Demonstrate your skills in our one-step assessment and earn up to $450,000 in simulation capital. The future is now!",
//     latestGames: "Latest games ",
//     join: "Connect",
//     updateInventory: "Update your inventory",
//     bestPlayers: "3 best players",
//     arenaFame: "Arena of Fame",
//     battleTeams: "Battle of the teams",
//     team: "team",
//     player: "player"
//   },
//   ru: {
//     heroTitle: "Играй, выигрывай, наслаждайся!",
//     playBtn: "Играть",
//     promoTop: "Скидка 30% для новых пользователей CYBER+!",
//     navTournaments: "Турниры",
//     navRating: "Рейтинг",
//     navShop: "Магазин",
//     navContact: "Контакты",
//     heroSubtitle: "Участвуй в турнирах и выигрывай!",
//     cs2Title: "Турниры CS2",
//     valorantTitle: "Турниры Valorant",
//     infoText: "Покажите свои навыки в нашей системе оценки...",
//     followUs: "Подписывайтесь",
//     heroText: "Продемонстрируйте свои навыки в нашем одноэтапном тестировании и заработайте до 450 000 долларов США в виде инвестиционного капитала для моделирования. Будущее уже здесь!",
//     latestGames: "Последние игры",
//     join: "Соединять",
//     updateInventory: "Обновите свой инвентарь",
//     bestPlayers: "3 лучших игрока",
//     arenaFame: "Арена славы",
//     battleTeams: "Битва команд",
//     team: "команда",
//     player: "игрок"
//   }
// };

// function applyLanguage(lang) {
//   const elements = document.querySelectorAll("[data-translate]");

//   elements.forEach(el => {

//     const key = el.dataset.translate;

//     if (translations[lang] && translations[lang][key]) {
//       el.textContent = translations[lang][key];
//     }

//   });
// }




// if (langSelector) {

//         langSelector.addEventListener('click', () => {
//           langSelector.classList.toggle('active');
//         });

//         langOptions.forEach(option => {
//           option.addEventListener('click', (e) => {

//             const selectedLang = e.target.dataset.lang;

//             currentLang.textContent = selectedLang.toUpperCase();

//             localStorage.setItem("siteLang", selectedLang);

//             langSelector.classList.remove('active');

//             applyLanguage(selectedLang);
//           });
//         });

//       }













// // dil dəyişmək
// langOptions.forEach(option => {
//   option.addEventListener('click', (e) => {

//     const selectedLang = e.target.dataset.lang;

//     currentLang.textContent = selectedLang.toUpperCase();

//     // localStorage save
//     localStorage.setItem("siteLang", selectedLang);

//     // dropdown bağla
//     langSelector.classList.remove('active');

//     // DEMO üçün reload (real layihədə translation olacaq)
//     location.reload();

//   });
// });


// // səhifə açılarkən dili load et
// const savedLang = localStorage.getItem("siteLang");

// if (savedLang) {
//   currentLang.textContent = savedLang.toUpperCase();
// }


document.addEventListener("DOMContentLoaded", () => {













  // ================= HEADER SCROLL =================

  const header = document.querySelector('.header');
  const headerTop = document.querySelector(".header-top")
  const headerContent = document.querySelector(".header-content")

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      headerTop.style.display = "none";
      headerContent.style.padding = "16px 0"
    } else {
      header.classList.remove('scrolled');
      headerTop.style.display = "flex";
    }
  });


  // ================= BURGER MENU =================

  const burger = document.querySelector('.burger-menu');
  const mobileMenu = document.getElementById('mobileMenu');

  if (burger && mobileMenu) {

    const icon = burger.querySelector('i');

    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');

      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-xmark');
    });

  }


  // ================= LANGUAGE SYSTEM =================

  const langSelector = document.querySelector('.lang-selector');
  const currentLang = document.querySelector('.current-lang');
  const langOptions = document.querySelectorAll('.lang-dropdown div');

  const translations = {
    az: {
      heroTitle: "Oyna, Qazan, Əylən!",
      playBtn: "Oyna",
      promoTop: "Yeni istifadəçilər üçün CYBER+ 30% endirimlə!",
      navTournaments: "Turnirlər",
      navRating: "Reytinq",
      navShop: "Mağaza",
      navContact: "Əlaqə",
      heroSubtitle: "Turnirlərə qoşul mükafatlar qazan!",
      valorantTitle: "Valorant Turnirləri",
      infoText: "Bir addımlı qiymətləndirməmizdə bacarıqlarınızı nümayiş etdirin...",
      followUs: "Bizi izləyin",
      heroText: "Bir addımlı qiymətləndirməmizdə bacarıqlarınızı nümayiş etdirin və 450 min dollara qədər simulyasiya kapitalı qazanın. Gələcək indidir!",
      latestGames: "Ən son oyunlar",
      join: "Qoşul",
      updateInventory: "Envanterini yenilə",
      bestPlayers: "3 ən yaxşı oyunçu",
      arenaFame: "Şöhrət Arenası",
      battleTeams: "Komandaların mübarizəsi",
      team: "komanda",
      mainPage: "Əsas səhifə",
      all: "Hamısı",
      active: "Aktiv",
      notStart: "Başlamamış",
      finished: "Bitmiş",
      players: "Oyunçular",
      about: "Haqqımızda",
      topPlayer: "Ən yaxşı oyunçular",
      whatsNew: "Yeniliklər",
      followUs: "Bizi izləyin",
      ratingText: "Oyunçularla rəqabət aparın və reytinq sistemi ilə rütbənizi artırın! Mövsümi liderlər cədvəli hər ayın 1-də yenilənir.",
      shopText:"Sənin oyun zonan. Premium funksiyalar, paketlər və xüsusi təkliflər.",
      bonuses:"Bonuslar",
      packages:"VIP paketlər",
      premium:"Premium+",

    },
    en: {
      heroTitle: "Play, Win, Enjoy!",
      playBtn: "Play",
      promoTop: "CYBER+ 30% discount for new users!",
      navTournaments: "Tournaments",
      navRating: "Ranking",
      navShop: "Shop",
      navContact: "Contact",
      heroSubtitle: "Join tournaments and win rewards!",
      cs2Title: "CS2 Tournaments",
      valorantTitle: "Valorant Tournaments",
      infoText: "Show your skills in our one-step evaluation...",
      followUs: "Follow us",
      heroText: "Demonstrate your skills in our one-step assessment and earn up to $450,000 in simulation capital. The future is now!",
      latestGames: "Latest games ",
      join: "Connect",
      updateInventory: "Update your inventory",
      bestPlayers: "3 best players",
      arenaFame: "Arena of Fame",
      battleTeams: "Battle of the teams",
      team: "team",
      player: "player",
      mainPage: "Main page",
      all: "All",
      active: "Active",
      notStart: "Not Started",
      finished: "Finished",
      players: "Players",
      about: "About us",
      topPlayer: "Top players",
      whatsNew: "What's new?",
      followUs: "Follow us",
      ratingText: "Compete with players and increase your rank with the ranking system! Seasonal leaderboards are updated on the 1st of every month.",
      shopText:"Your gaming zone. Premium features, packages and special offers.",
      bonuses:"Bonuses",
          packages:"VIP packages",
               premium:"Premium+",
    },
    ru: {
      heroTitle: "Играй, выигрывай, наслаждайся!",
      playBtn: "Играть",
      promoTop: "Скидка 30% для новых пользователей CYBER+!",
      navTournaments: "Турниры",
      navRating: "Рейтинг",
      navShop: "Магазин",
      navContact: "Контакты",
      heroSubtitle: "Участвуй в турнирах и выигрывай!",
      cs2Title: "Турниры CS2",
      valorantTitle: "Турниры Valorant",
      infoText: "Покажите свои навыки в нашей системе оценки...",
      followUs: "Подписывайтесь",
      heroText: "Продемонстрируйте свои навыки в нашем одноэтапном тестировании и заработайте до 450 000 долларов США в виде инвестиционного капитала для моделирования. Будущее уже здесь!",
      latestGames: "Последние игры",
      join: "Соединять",
      updateInventory: "Обновите свой инвентарь",
      bestPlayers: "3 лучших игрока",
      arenaFame: "Арена славы",
      battleTeams: "Битва команд",
      team: "команда",
      player: "игрок",
      mainPage: "Главная страница",
      all: "Все",
      active: "Активный",
      notStart: "Не началось",
      finished: "Законченный",
      players: "Игроки",
      about: "О нас",
      topPlayer: "Лучшие игроки",
      whatsNew: "Что нового?",
      followUs: "Подписывайтесь на нас",
       ratingText: "Соревнуйтесь с другими игроками и повышайте свой рейтинг с помощью рейтинговой системы! Сезонные таблицы лидеров обновляются 1-го числа каждого месяца.",
        shopText:"Ваша игровая зона. Премиум-функции, пакеты и специальные предложения.",
        bonuses:"бонусы",
         packages:"VIP-пакеты",
              premium:"Премиум+",

    }
  };

  function applyLanguage(lang) {

    const elements = document.querySelectorAll("[data-translate]");

    elements.forEach(el => {

      const key = el.dataset.translate;

      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }

    });
  }


  if (langSelector) {

    langSelector.addEventListener('click', () => {
      langSelector.classList.toggle('active');
    });

    langOptions.forEach(option => {
      option.addEventListener('click', (e) => {

        const selectedLang = e.target.dataset.lang;

        currentLang.textContent = selectedLang.toUpperCase();

        localStorage.setItem("siteLang", selectedLang);

        langSelector.classList.remove('active');

        applyLanguage(selectedLang);
      });
    });

  }

  // səhifə açılarkən dili load et

  const savedLang = localStorage.getItem("siteLang") || "az";

  if (currentLang) {
    currentLang.textContent = savedLang.toUpperCase();
  }

  applyLanguage(savedLang);

});
