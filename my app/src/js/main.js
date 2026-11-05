import '../styles/main.scss'

const app = document.querySelector('.app')

app.innerHTML = `
  <header class="header">
    <div class="header__container">
      <!-- Бургер -->
      <button class="header__burger" aria-label="Открыть меню">
        <span class="header__burger-line"></span>
        <span class="header__burger-line"></span>
        <span class="header__burger-line"></span>
      </button>

      <!-- Логотип -->
      <a href="/" class="header__logo">
        <span class="header__logo-text">CPS</span>
      </a>

      <!-- Кнопки справа (мобильная версия) -->
      <div class="header__actions-mobile">
        <button class="header__btn header__btn--round header__btn--primary"></button>
        <button class="header__btn header__btn--round"></button>
      </div>

      <!-- Кнопки справа (десктоп) -->
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

  <main class="main">
    <div class="main__container">
      
      <!-- Заголовок -->
      <h1 class="page-title">Услуги и сервисы</h1>

      <!-- Навигация (табы) -->
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

      <!-- Контент: Текст + Картинка -->
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
