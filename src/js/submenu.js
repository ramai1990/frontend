(function () {
  const navLink = document.querySelectorAll('.nav__link--drop')
  navLink.forEach(item => {
    item.addEventListener('mouseover', e => {
      let el = e.currentTarget
      if (el.classList.contains('nav__link--active')) {
        el.classList.remove('nav__link--active')
        el.nextElementSibling.classList.remove('submenu__list--active')
      } else {
        navLink.forEach(e => {
          e.classList.remove('nav__link--active')
          e.nextElementSibling.classList.remove('submenu__list--active')
        })
        el.classList.add('nav__link--active')
        el.nextElementSibling.classList.add('submenu__list--active')
      }
      document.addEventListener('click', function (e) {
        if (e.target !== el) {
          el.classList.remove('nav__link--active')
          el.nextElementSibling.classList.remove('submenu__list--active');
        }
      });
    })
  })
}())