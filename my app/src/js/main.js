import '../styles/main.scss'

const app = document.querySelector('.app')

app.innerHTML = `
  <!-- САЙДБАР (Мобильное меню) -->
  <aside class="sidebar" id="sidebar">
    <div class="sidebar__header">
      <button class="sidebar__close" id="closeBtn" aria-label="Закрыть меню">✖</button>
      <a href="/" class="sidebar__logo">
        <span class="header__logo-text">CPS</span>
      </a>
      <button class="header__btn header__btn--round header__btn--primary sidebar__search"></button>
    </div>
    
    <nav class="sidebar__nav">
      <ul class="sidebar__list">
        <li class="sidebar__item"><a href="#" class="sidebar__link sidebar__link--active">Ремонт техники</a></li>
        <li class="sidebar__item"><a href="#" class="sidebar__link">Услуги и сервисы</a></li>
        <li class="sidebar__item"><a href="#" class="sidebar__link">Корпоративным клиентам</a></li>
        <li class="sidebar__item"><a href="#" class="sidebar__link">Продавцам техники</a></li>
        <li class="sidebar__item"><a href="#" class="sidebar__link">Партнерам</a></li>
        <li class="sidebar__item"><a href="#" class="sidebar__link">Производителям</a></li>
        <li class="sidebar__item"><a href="#" class="sidebar__link">Наши сервисные центры</a></li>
        <li class="sidebar__item"><a href="#" class="sidebar__link">Контакты</a></li>
      </ul>
    </nav>

    <div class="sidebar__footer">
      <div class="sidebar__socials">
        <button class="header__btn header__btn--round header__btn--primary"></button>
        <button class="header__btn header__btn--round header__btn--primary"></button>
        <button class="header__btn header__btn--round header__btn--primary"></button>
      </div>
      <a href="mailto:mail@cps.com" class="sidebar__contact">mail@cps.com</a>
      <a href="tel:88008908900" class="sidebar__phone">8 800 890 8900</a>
      
      <div class="sidebar__langs">
        <button class="sidebar__lang sidebar__lang--active">RU</button>
        <button class="sidebar__lang">EN</button>
        <button class="sidebar__lang">CH</button>
      </div>
    </div>
  </aside>

  <!-- Затемнение фона -->
  <div class="overlay" id="overlay"></div>

  <!-- ШАПКА -->
  <header class="header">
    <div class="header__container">
      <button class="header__burger" aria-label="Открыть меню">
        <span class="header__burger-line"></span>
        <span class="header__burger-line"></span>
        <span class="header__burger-line"></span>
      </button>

      <a href="/" class="header__logo">
        <span class="header__logo-text">CPS</span>
      </a>

      <div class="header__actions-mobile">
        <button class="header__btn header__btn--round header__btn--primary"></button>
        <button class="header__btn header__btn--round"></button>
      </div>

      <div class="header__actions-desktop">
        <button class="header__btn header__btn--text header__btn--primary">
          <span class="header__btn-icon">✖</span> Оставить заявку
        </button>
        <button class="header__btn header__btn--text header__btn--primary">
          <span class="header__btn-icon">📞</span> Статус ремонта
        </button>
      </div>
    </div>
  </header>

  <!-- ОСНОВНОЙ КОНТЕНТ -->
  <main class="main">
    <div class="main__container">
      
      <h1 class="page-title">Услуги и сервисы</h1>

      <nav class="tabs">
        <ul class="tabs__list">
          <li class="tabs__item"><a href="#" class="tabs__link tabs__link--active">Ремонтируемые бренды</a></li>
          <li class="tabs__item"><a href="#" class="tabs__link">Ремонтируемые устройства</a></li>
          <li class="tabs__item"><a href="#" class="tabs__link">Дополнительные услуги</a></li>
          <li class="tabs__item"><a href="#" class="tabs__link">Цены на услуги</a></li>
          <li class="tabs__item"><a href="#" class="tabs__link">Адреса сервисных центров</a></li>
          <li class="tabs__item"><a href="#" class="tabs__link">Специальные цены</a></li>
          <li class="tabs__item"><a href="#" class="tabs__link">Отзывы</a></li>
        </ul>
      </nav>

      <div class="article">
        <div class="article__content">
          <p class="article__text">
            Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.
          </p>
          
          <p class="article__text article__text--hidden">
            Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.
          </p>
          
          <button class="article__read-more">
            <span class="article__read-more-icon">▼</span> Читать далее
          </button>
        </div>
        
        <div class="article__image-wrapper">
          <img src="https://via.placeholder.com/600x400/cccccc/333333?text=CPS+Image" alt="Офис CPS" class="article__image">
        </div>
      </div>

    </div>
  </main>
`

// --- ЛОГИКА МОБИЛЬНОГО МЕНЮ ---
const burgerBtn = document.querySelector('.header__burger')
const sidebar = document.getElementById('sidebar')
const closeBtn = document.getElementById('closeBtn')
const overlay = document.getElementById('overlay')

function openMenu() {
  sidebar.classList.add('sidebar--open')
  overlay.classList.add('overlay--show')
}

function closeMenu() {
  sidebar.classList.remove('sidebar--open')
  overlay.classList.remove('overlay--show')
}

burgerBtn.addEventListener('click', openMenu)
closeBtn.addEventListener('click', closeMenu)
overlay.addEventListener('click', closeMenu)

// --- ЛОГИКА КНОПКИ "ЧИТАТЬ ДАЛЕЕ" ---
const readMoreBtn = document.querySelector('.article__read-more')
const hiddenText = document.querySelector('.article__text--hidden')

readMoreBtn.addEventListener('click', () => {
  if (hiddenText.style.display === 'block') {
    hiddenText.style.display = 'none'
    readMoreBtn.innerHTML = '<span class="article__read-more-icon">▼</span> Читать далее'
  } else {
    hiddenText.style.display = 'block'
    readMoreBtn.innerHTML = '<span class="article__read-more-icon">▲</span> Скрыть'
  }
})
