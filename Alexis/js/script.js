"use strict";


window.addEventListener('DOMContentLoaded', () => {


        const mainMenu = document.querySelectorAll('nav>a'),
              btn = document.querySelector('button');


        console.log(mainMenu);
        console.log(btn);


        mainMenu.forEach( item => {

            item.addEventListener('click', (e) => {
                console.log('click');
            });
        });


        btn.addEventListener('click', (e) => {
            console.log('OK');
        })






});