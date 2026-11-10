import '../styles/main.scss'
import logoImg from '../assets/icons/logo.svg'
import officeImg from '../assets/img/cps-office.png'

const app = document.querySelector('.app')

app.innerHTML = `
  <aside class="sidebar" id="sidebar">
    <div class="sidebar__header">
      <button class="sidebar__close" id="closeBtn" aria-label="Закрыть меню">✖</button>
      <a href="/" class="sidebar__logo">
        <img src="${logoImg}" alt="Логотип CPS" class="header__logo-img">
      </a>
      <button class="header__btn header__btn--round header__btn--primary" aria-label="Поиск">
        <span class="icon-search">🔍</span>
      </button>
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
        <button class="header__btn header__btn--round header__btn--primary" aria-label="Telegram">✈️</button>
        <button class="header__btn header__btn--round header__btn--primary" aria-label="Viber">📞</button>
        <button class="header__btn header__btn--round header__btn--primary" aria-label="VK">VK</button>
      </div>
      <a href="mailto:mail@cps.com" class="sidebar__contact">mail@cps.com</a>
      <a href="tel:88008908900" class="sidebar__phone">8 800 890 8900</a>
      
      <div class="sidebar__langs">
        <button class="sidebar__lang sidebar__lang--active" data-lang="RU">RU</button>
        <button class="sidebar__lang" data-lang="EN">EN</button>
        <button class="sidebar__lang" data-lang="CH">CH</button>
      </div>
    </div>
  </aside>

  <div class="overlay" id="overlay"></div>

  <header class="header">
    <div class="header__container">
      <button class="header__burger" aria-label="Открыть меню">
        <span class="header__burger-line"></span>
        <span class="header__burger-line"></span>
        <span class="header__burger-line"></span>
      </button>

      <a href="/" class="header__logo">
        <img src="${logoImg}" alt="Логотип CPS" class="header__logo-img">
      </a>

      <div class="header__actions">
        <button class="header__btn header__btn--text">
          <span class="header__btn-icon">✉️</span> Оставить заявку
        </button>
        <button class="header__btn header__btn--text">
          <span class="header__btn-icon">📞</span> Статус ремонта
        </button>
      </div>
    </div>
  </header>

  <main class="main">
    <div class="main__container">
      
      <h1 class="page-title">Услуги и сервисы</h1>

      <nav class="tabs">
        <ul class="tabs__list">
          <li class="tabs__item"><a href="#" class="tabs__link tabs__link--active" data-tab="brands">Ремонтируемые бренды</a></li>
          <li class="tabs__item"><a href="#" class="tabs__link" data-tab="devices">Ремонтируемые устройства</a></li>
          <li class="tabs__item"><a href="#" class="tabs__link" data-tab="services">Дополнительные услуги</a></li>
          <li class="tabs__item"><a href="#" class="tabs__link" data-tab="prices">Цены на услуги</a></li>
          <li class="tabs__item"><a href="#" class="tabs__link" data-tab="centers">Адреса сервисных центров</a></li>
          <li class="tabs__item"><a href="#" class="tabs__link" data-tab="special">Специальные цены</a></li>
          <li class="tabs__item"><a href="#" class="tabs__link" data-tab="reviews">Отзывы</a></li>
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
          <img src="${officeImg}" alt="Офис сервисного центра CPS" class="article__image" width="600" height="400">
        </div>
      </div>

    </div>
  </main>
`

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

const tabs = document.querySelectorAll('.tabs__link')

tabs.forEach((tab) => {
  tab.addEventListener('click', function (e) {
    e.preventDefault()
    tabs.forEach((t) => t.classList.remove('tabs__link--active'))
    this.classList.add('tabs__link--active')
  })
})

const sidebarLinks = document.querySelectorAll('.sidebar__link')

sidebarLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    sidebarLinks.forEach((l) => l.classList.remove('sidebar__link--active'))
    this.classList.add('sidebar__link--active')
  })
})

const langBtns = document.querySelectorAll('.sidebar__lang')

langBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    langBtns.forEach((b) => b.classList.remove('sidebar__lang--active'))
    this.classList.add('sidebar__lang--active')
  })
})
