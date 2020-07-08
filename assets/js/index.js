const main   = document.getElementsByClassName('lp-main')[0],
      header = main.getElementsByClassName('lp-header')[0],
      navbar = header.getElementsByClassName('lp-navbar')[0],
      menu   = navbar.getElementsByClassName('lp-navbar-end')[0],
      button = navbar.getElementsByClassName('lp-navbar-button')[0]

let   status = false

button.addEventListener('click', function () {
    status = !status
    if (status) menu.classList.add('lp-navbar-opened')
    else menu.classList.remove('lp-navbar-opened')
})

window.addEventListener('resize', function () {
    if (window.matchMedia('(mine-width: 769px)')) {
        if (menu.classList.contains('lp-navbar-opened')) menu.classList.remove('lp-navbar-opened')
    }
})