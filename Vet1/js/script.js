"use strict";



window.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('header'),
          preHeaderMenu = header.querySelectorAll('.pre_header__menu > li'),
          mainMenu = header.querySelectorAll('.main_menu__group'),
          prev = header.querySelector('.left'),
          next = header.querySelector('.right'),
          mainBanImg = header.querySelectorAll('.banner_slide'),
          advantagesCard = document.querySelectorAll('.advantages_card__title'),
          productCard = document.querySelectorAll('.product_group'),
          productTitle = document.querySelectorAll('.product_group__title'),
          buttons = document.querySelectorAll('.btn'),
          logoIcon = document.querySelectorAll('.logos_img'),
          logoScroll = document.querySelectorAll('.logos_acordion > i'),
          footer = document.querySelector('footer');
          
            

    // console.log(preHeaderMenu);
    // console.log(mainMenu);
    // console.log(prev);
    // console.log(next);
    // console.log(mainBanImg);
    // console.log(advantagesCard);
    // console.log(productCard);
    // console.log(productTitle);
    // console.log(buttons);
    // console.log(footer);
    // console.log(logoIcon);
    // console.log(logoScroll);


    let slideIndex = 1;

    showSlides(slideIndex);

    function showSlides(n) {

        if ( n > mainBanImg.length) {
            slideIndex = 1;
        }

        if ( n < 1 ) {
            slideIndex = mainBanImg.length;
        }

        mainBanImg.forEach(item => item.style.display = 'none');

        mainBanImg[ slideIndex - 1].style.display = '';

    }
    
    function plusSlides(n) {
        showSlides( slideIndex += n )
    }

    prev.addEventListener('click', () => {
        plusSlides(-1);
    });
    next.addEventListener('click', () => {
        plusSlides(1);
    }); 
});