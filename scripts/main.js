// HEADER

let lastScroll = 0
const defOffset = 60
const header = document.querySelector('.header')

const scrollPos = () => document.documentElement.scrollTop
const contHide = () => header.classList.contains('hide')

window.addEventListener('scroll', () => {
    if (scrollPos() > lastScroll && !contHide() && scrollPos() > defOffset) {
        header.classList.add('hide')
    } else if (scrollPos() < lastScroll && contHide()) {
        header.classList.remove('hide')
    }

    lastScroll = scrollPos()
})

// BURGER

const burger = document.querySelector('.burger')

if (burger) {
    const navMenu = document.querySelector('.menu__list')

    burger.addEventListener('click', function (e) {
        burger.classList.toggle('active')
        navMenu.classList.toggle('active')
    })
}

// SUBLIST

const infoBtn = document.querySelector('.info-btn')

if (infoBtn) {
    const subList = document.querySelector('menu__sub-list')
    infoBtn.addEventListener('click', function (e) {
        subList.classList.toggle('active')
    })
}

