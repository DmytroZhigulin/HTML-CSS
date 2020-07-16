"use strict";



window.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('header'),
          preHeaderMenu = header.querySelectorAll('.pre_header__menu > li'),
          mainMenu = header.querySelectorAll('.main_menu__group'),
          prev = header.querySelector('.left'),
          next = header.querySelector('.right'),
          bannerWrapper = header.querySelector('.wrap'),
          bannerWindow = header.querySelector('.banner'),
          mainBanImg = header.querySelectorAll('.banner_slide'),
          mainBanIndication = header.querySelectorAll('.inactive'),
          advantagesCard = document.querySelectorAll('.advantages_card__title'),
          productCard = document.querySelectorAll('.product_group'),
          productTitle = document.querySelectorAll('.product_group__title'),
          itemNavBlock = document.querySelector('.items_nav'),
          itemTitle = itemNavBlock.querySelectorAll('.items_nav__item'),
          buttons = document.querySelectorAll('.btn'),
          logoIcon = document.querySelectorAll('.logos_img'),
          logoScroll = document.querySelectorAll('.logos_acordion > i'),
          footer = document.querySelector('footer'),

          width = window.getComputedStyle(bannerWrapper).width;

          
            

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
    console.log(mainBanIndication);


    let slideIndex = 1;
    let offset = 0;

    bannerWindow.style.width = 100 * mainBanImg.length + '%';

    mainBanImg.forEach(slide => {
        slide.style.width = width;
    });

    mainBanIndication[ slideIndex - 1 ].classList.add('active');
    nextSlide();
    prevSlide();

    function nextSlide() {

        next.addEventListener('click', () => {

            if ( offset == parseInt(width) * (mainBanImg.length - 1)) {
                offset = 0;   
            } else {
                offset += parseInt(width); 
            }
        
            bannerWindow.style.transform = `translateX(-${offset}px)`;
        
            if ( slideIndex == mainBanImg.length) {
                slideIndex = 1;
                mainBanIndication.forEach(item => item.classList.remove('active'));
                mainBanIndication[ slideIndex - 1 ].classList.add('active');
            } else {
                mainBanIndication.forEach(item => item.classList.remove('active'));
                slideIndex++;
                mainBanIndication[ slideIndex - 1 ].classList.add('active');
                
            }
            // console.log(slideIndex - 1);
        });
    }


    function prevSlide() {
        
        prev.addEventListener('click', () => {

            if ( offset == 0 ) {
                offset = parseInt(width) * (mainBanImg.length - 1);
            } else {
                offset -= parseInt(width);
            }
    
            bannerWindow.style.transform = `translateX(-${offset}px)`;
    
            if ( slideIndex == 1) {
                slideIndex = mainBanImg.length;
                mainBanIndication.forEach(item => item.classList.remove('active'));
                mainBanIndication[ slideIndex - 1 ].classList.add('active');
            } else {
                mainBanIndication.forEach(item => item.classList.remove('active'));
                slideIndex--;
                mainBanIndication[ slideIndex - 1 ].classList.add('active');
            }
    
            // console.log(slideIndex - 1);
    
        });

    }

    
    function autoSlide() {
        let timer = setInterval(function sliderAuto() {

            if ( offset == parseInt(width) * (mainBanImg.length - 1)) {
                offset = 0;   
            } else {
                offset += parseInt(width); 
            }
        
            bannerWindow.style.transform = `translateX(-${offset}px)`;

            if ( slideIndex == mainBanImg.length) {
                slideIndex = 1;
                mainBanIndication.forEach(item => item.classList.remove('active'));
                mainBanIndication[ slideIndex - 1 ].classList.add('active');
            } else {
                mainBanIndication.forEach(item => item.classList.remove('active'));
                slideIndex++;
                mainBanIndication[ slideIndex - 1 ].classList.add('active');
                
            }
        }, 5000);
    }
    autoSlide();
    
    

    // showSlides(slideIndex);

    // function showSlides(n) {

    //     if ( n > mainBanImg.length) {
    //         slideIndex = 1;
    //     }

    //     if ( n < 1 ) {
    //         slideIndex = mainBanImg.length;
    //     }

    //     mainBanImg.forEach(item => item.style.display = 'none');
    //     mainBanImg[ slideIndex - 1].style.display = '';
    //     mainBanIndication.forEach(item => item.classList.remove('active'));
    //     mainBanIndication[ slideIndex - 1 ].classList.add('active');
    // }
    
    // function plusSlides(n) {
    //     showSlides( slideIndex += n );
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });
    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // }); 
    

    function itemTitleActive() {
   
        function resetActiveItem() {
            itemTitle.forEach(item => {
        
                item.classList.remove('active_itemGroup');
                     
            });
        }
          
        function defaultActiveItem( i = 0 ) {
            itemTitle[i].classList.add('active_itemGroup');
        }
        defaultActiveItem();


        itemTitle.forEach((item, index) => {
        
            item.addEventListener('click', (event) => {
                event.preventDefault();
                
                resetActiveItem();
                defaultActiveItem(index);
            });
        });
    }
    itemTitleActive();
});