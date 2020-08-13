"use strict";

window.addEventListener('DOMContentLoaded', () => {

    //TABS
    const tabsContent = document.querySelectorAll('.tabcontent'),
          tabParent = document.querySelector('.tabheader__items'),
          tabs = tabParent.querySelectorAll('.tabheader__item');

        //   console.log(tabParent);
        //   console.log(tabsContent);
        //   console.log(tabs);

        function hideTabContent() {
            tabsContent.forEach( item => {
                item.classList.add('hide');
                item.classList.remove('show', 'animated');
            });

            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
        }
        hideTabContent();


        function showDefaultTab(i = 0) {
            tabsContent[i].classList.add('show', 'animated');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader__item_active');
        }
        showDefaultTab();


        tabParent.addEventListener('click', (e) => {
            
            const target = e.target;

            if( target && target.classList.contains('tabheader__item')) {
                tabs.forEach( (item, index) => {
                    if(target == item) {
                        hideTabContent();
                        showDefaultTab(index);
                    }
                });
            }
        });


    //TIMER
    const deadline = '2020-08-20';

    function getTimeRemaning(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if( num >= 0 && num < 10 ) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaning(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if ( t.total <= 0 ) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadline);


    //MODAL
    const modal = document.querySelector('.modal'),
        btn = document.querySelectorAll("[data-modal]"),
        modalCloseBtn = document.querySelectorAll(".modal__close");

        console.log(btn);
        console.log(modalCloseBtn);

        btn.forEach(item => {
            item.addEventListener('click', (e) =>{
                modal.classList.add('show');
            });
        });

        
         
});