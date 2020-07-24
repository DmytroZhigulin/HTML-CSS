"use strict";



window.addEventListener('DOMContentLoaded', () => {



    

    const buttons = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]'),
          navMenu = document.querySelectorAll('.menu_block'),
          burgerMenuOpen = document.querySelector('.burger_btn'),
          burgerMenu = document.querySelector('.burgerMenu'),
          burgerMenuBlock = burgerMenu.querySelectorAll('.burgerMenu_block'),
          burgerCloseBtn = document.querySelector('.close_burger'),
          reviewLeft = document.querySelector('.arrowLeft'),
          reviewRight = document.querySelector('.arrowRight'),
          reviews = document.querySelectorAll('.review'),
          reviewsCirc = document.querySelectorAll('.circ');
          



          
          

    // Modal window show and close
    function modalWindow() {

        buttons.forEach( (item, index) => {

            item.addEventListener('click', () => {
                console.log(`clicked ${index}`);

                modal.classList.remove('hide');
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
                
            });
        });

        function closeModalWindow() {
            modal.classList.remove('show');
            modal.classList.add('hide');
            document.body.style.overflow = '';
        }
        

        modalCloseBtn.addEventListener('click', closeModalWindow);


        modal.addEventListener('click', (event) => {

            if ( event.target === modal) {
                closeModalWindow();
            }
        });

        
        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" && modal.classList.contains('show')) {
                closeModalWindow();
            }
        });

    }
    modalWindow();


    //Burger Menu show and close
    function burgerMenuFunc() {

        burgerMenuOpen.addEventListener('click', (e) => {

            burgerMenu.classList.remove('hide');
            burgerMenu.classList.add('show');

        });

        function closeBurger() {
            burgerMenu.classList.remove('show');
            burgerMenu.classList.add('hide');
        }

        burgerCloseBtn.addEventListener('click', (e) => {
            closeBurger();
        });

    }
    burgerMenuFunc();


    //Reviews
    function reviewsAnimation() {

        reviews.forEach((item, index) => {

            reviewLeft.addEventListener('click' , (e) => {
                console.log("toLeft");

                if ( item.classList.contains('hidden')) {
                    item.classList.remove('hidden');
                    item.style.margin = '85px 0px 70px';
                } else if ( item.style.display == '') {
                    item.classList.add('hidden');
                }

            });
    
            reviewRight.addEventListener('click' , (e) => {
                console.log("toRight");
                if ( item.classList.contains('hidden')) {
                    item.classList.remove('hidden');
                    item.style.margin = '85px 0px 70px';
                } else if ( item.style.display == '') {
                    item.classList.add('hidden');
                }
            });
        });

    }
    reviewsAnimation();
});   