"use strict";


window.addEventListener('DOMContentLoaded', () => {


        const mainMenu = document.querySelectorAll('nav>a'),
              btn = document.querySelector('button'),
              focusCards = document.querySelectorAll('.ourFocus__card'),
              portfolioCards = document.querySelectorAll('.portfolio__card');


        console.log(mainMenu);
        console.log(btn);
        console.log(focusCards);
        console.log(portfolioCards);


        mainMenu.forEach( item => {

            item.addEventListener('click', (e) => {
                console.log('click');
            });
        });


        btn.addEventListener('click', (e) => {
            console.log('OK');
        });






});