"use strict"

const isMobile = {
    Android: function () { 
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android() || 
                isMobile.BlackBerry() || 
                isMobile.iOS() || 
                isMobile.Opera() || 
                isMobile.Windows()
                );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener('click', e => {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }

} else {
    document.body.classList.add('_pc');
}

// Меню бургера
let menuIcon = document.querySelector('.menu__icon');
if (menuIcon) {
    const headerMenuList = document.querySelector('.header-menu__list');
    menuIcon.addEventListener('click', (e) => {
        document.body.classList.toggle('_lock');
        menuIcon.classList.toggle('_active');
        headerMenuList.classList.toggle('_active');
    });
}

const infoBtn = document.querySelectorAll('.info_btn');
const infoDescription = document.querySelector('.info-description');

for (let index = 0; index < infoBtn.length; index++) {
    const element = infoBtn[index];

    element.addEventListener('mouseover', (event) => {
        infoDescription.classList.toggle('_look');
    });
}



