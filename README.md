# Toxin – сайт для поиска номеров в отеле

# Демо

[Landing](https://ramai1990.github.io/frontend/landing)

[Room](https://ramai1990.github.io/frontend/room)

[Search-room](https://ramai1990.github.io/frontend/search-room)

[Sign-up](https://ramai1990.github.io/frontend/sign-up)

[Sign-in](https://ramai1990.github.io/frontend/sign-in)

# Ul Kit

[Colors & Type](https://ramai1990.github.io/frontend/colors-type)

[Cards](https://ramai1990.github.io/frontend/cards)

[Form Elements](https://ramai1990.github.io/frontend/form-elements)

[Headers & Footers](https://ramai1990.github.io/frontend/headers-footers)


Pixel Perfect верстка проекта с использованием Pug, Scss, jQuery, Webpack

**Цель:**
- Попробовать pug, jquery
- Научиться pixel-perfect верстке
- Создать webpack конфиг для многостраничного сайта

## Быстрый старт

#### `npm i` – установить зависимости проекта

#### `npm run start` – запуск сервера на http://localhost:3000/

## Скрипты

#### `npm run dev` – development сборка проекта

#### `npm run build` – production сборка проекта

## Используемые библиотеки

- [air-datepicker v3.0.1](https://github.com/t1m0n/air-datepicker)
- [apexcharts v3.30.0](https://apexcharts.com/)
- [daterangepicker v3.1.0](https://www.daterangepicker.com/)
- [imask v6.2.2](https://imask.js.org/)
- [jquery v3.6.0](https://jquery.com/)
- [jquery-bar-rating v1.2.2](https://antennaio.github.io/jquery-bar-rating/)
- [nouislider v14.6.3](https://refreshless.com/nouislider/)
- [swiper v6.8.3](https://swiperjs.com/)

### Структура проекта

```
├── src/                             # Исходники
│   ├── assets/                      # Подключаемые ресурсы
│   ├── components/                  # Папка с блоками проекта
│   ├── fonts/                       # Шрифты используемые в проекте
│   ├── img/                         # Изображения используемые в проекте
│   ├── js/                          # Точка входа main.js
│   ├── pug/                         # Папка страниц проекта PUG
│   └── scss/                        # Стили
│       ├── mixins/              # Папка с миксинами
│       │   ├── _breakpoint.scss      
│       │   ├── _burger.scss       
│       │   ├── _stop-scroll.scss      
│       │   └── _visually-hidden.scss 
│       ├── _fonts_.scss         # Файл с подключенными шрифтами
│       ├── _mixins.scss         # Файл с миксинами
│       ├── _settings.scss       # Файл с настройками  
│       ├── _vars.scss           # Файл с переменными 
│       ├── _vendor.scss         # Файл с подключенными библиотеками
│       └── main.scss            # Файл в который импортируются все стили
├── .babelrc                         # Конфигурация компиляции Javascript в es5
├── .eslintrc.json                   # Конфигурация проверки JavaScript в ESLint
├── .editorconfig                    # Настройка отступов
├── .gitignore                       # Список исключённых файлов из Git
├── package.json                     # Список модулей и прочей информации
├── postcss.config.js                # Конфигурация компиляции стилей
├── README.md                        # Документация шаблона
├── webpack.config.js                # Конфигурация Webpack.js
```

