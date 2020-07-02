"use strict";


window.addEventListener('DOMContentLoaded', () => {


        const mainMenu = document.querySelectorAll('nav>a'),
              btn = document.querySelector('button'),
              focusCards = document.querySelectorAll('.ourFocus__card'),
              portfolioCards = document.querySelectorAll('.portfolio__card'),
              teamCards = document.querySelectorAll('.team__cards__card'),
              teamDescr = document.querySelectorAll('.team_description'),
              playBtn = document.querySelector('.videoSection__pic');



        // console.log(mainMenu);
        // console.log(btn);
        // console.log(focusCards);
        // console.log(playBtn);
        // console.log(portfolioCards);
        console.log(teamCards);
        console.log(teamDescr);
        


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
        


        

        function cardDefault() {

            teamDescr.forEach( item => {

                item.classList.add('hide');
                item.classList.remove('show', 'cardDescrA'); 
            });
        }
        cardDefault();
        //функция по умолчанию прячет все описания карт 

        function show(i = 0) {
            
            teamDescr[i].classList.add('show', 'cardDescrA');
            teamDescr[i].classList.remove('hide'); 
                    
        }
        show();
        //функция принимает число i и показывает элемент псевдомассива с картами описания с индексом = i.
        // 0 по умолчанию.

        function cardShow() {

            teamCards.forEach( (item, i) => {
                item.addEventListener('click', (e) => {
                    cardDefault();
                    show(i);
                });
            });
        }
        cardShow();
        // функция перебирает псевдомассив с карточками и на каждую навешивает обработчик события "click",
        // при клике вызывает функцию показа карточки описания со значением = индексу элемента события "click"


            

            
        
        






});