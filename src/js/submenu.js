(function () {
  const navLink = document.querySelectorAll('.nav__link_dropdown')
  navLink.forEach(item => {
    item.addEventListener('mouseover', e => {
      let el = e.currentTarget
      if (el.classList.contains('nav__link_active')) {
        el.classList.remove('nav__link_active')
        el.nextElementSibling.classList.remove('submenu__list_active')
      } else {
        navLink.forEach(e => {
          e.classList.remove('nav__link_active')
          e.nextElementSibling.classList.remove('submenu__list_active')
        })
        el.classList.add('nav__link_active')
        el.nextElementSibling.classList.add('submenu__list_active')
      }
      document.addEventListener('click', function (e) {
        if (e.target !== el) {
          el.classList.remove('nav__link_active')
          el.nextElementSibling.classList.remove('submenu__list_active');
        }
      });
    })
  })
}())