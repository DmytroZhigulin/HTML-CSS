"use strict";


window.addEventListener('DOMContentLoaded', () => {

    const mainMenu = document.querySelectorAll('.main_menu')[0], // меню хедера
          footMenu = document.querySelectorAll('.main_menu')[1], // меню подвала
          mainLink = mainMenu.querySelectorAll('.main_link'),// псевдомассив с пунктами меню хедера
          footLink = footMenu.querySelectorAll('.footer_link'),// псевдомассив с пунктами меню подвала
          headerForm = document.querySelector('form'),// форма хедера
          formField = headerForm.querySelectorAll('.form_part>.text'),// поля формы хедера
          button = document.querySelectorAll('button'), // псевдомассив с кнопками
          priceCards = document.querySelectorAll('.price_card');// псевдомассив с карточками PRICE


          console.log(button);
          console.log(mainLink);
          console.log(footLink); 
          console.log(priceCards); 
          
    // main menu function 
    function mainMenuEvents() {

        mainLink.forEach( (item, index) => {

            item.addEventListener('click', (event) => {
                event.preventDefault();
                console.log(`clicked ${index}`);
            });
    
            item.addEventListener('mouseover', () => {
        
                item.classList.add('hovered');
                
            });
    
            item.addEventListener('mouseout', () => {
        
                item.classList.remove('hovered');
                
            });
        });
    }
    mainMenuEvents();      
    



    // анимация карточек price
    function priceCardsEvents() {

        priceCards.forEach( item => {

            item.addEventListener('mouseover', () => {
        
                item.classList.add('priceActive');
                
            });
    
            item.addEventListener('mouseout', () => {
        
                item.classList.remove('priceActive');
                
            });
        });
    }
    priceCardsEvents();
    


    // тут будет функция по работе с кнопками страницы
    button.forEach( item => {

        item.addEventListener('click', (event) => {

            event.preventDefault();
            console.log(event.target.classList);
            console.log(`clicked ${item}`);

        });
    });
    

});