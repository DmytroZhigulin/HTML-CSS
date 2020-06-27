"use strict";


window.addEventListener('DOMContentLoaded', () => {


        const mainMenu = document.querySelectorAll('nav>a'),
              btn = document.querySelector('button'),
              focusCards = document.querySelectorAll('.ourFocus__card'),
              portfolioCards = document.querySelectorAll('.portfolio__card'),
              playBtn = document.querySelector('.videoSection__pic');



        console.log(mainMenu);
        console.log(btn);
        console.log(focusCards);
        console.log(playBtn);
        console.log(portfolioCards);
        


        mainMenu.forEach( item => {

            item.addEventListener('click', (e) => {
                console.log('click');
            });
        });


        btn.addEventListener('click', (event) => {
            console.log('OK');
        });

        playBtn.addEventListener('click', (event) => {
            console.log('Running video');
        });


        function cardsOnHover() {

            focusCards.forEach( item => {

                item.addEventListener('mouseover', (event) => {
                    item.classList.add('onHover');
                });
                item.addEventListener('mouseout', (event) => {
                    item.classList.remove('onHover');
                });
            });


            portfolioCards.forEach( item => {

                item.addEventListener('mouseover', (event) => {

                    item.classList.add('onHover');
                });
                item.addEventListener('mouseout', (event) => {
                    
                    item.classList.remove('onHover');
                    
                });
            });
        }
        cardsOnHover();






});