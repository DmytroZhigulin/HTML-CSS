"use strict";


window.addEventListener('DOMContentLoaded', () => {

    const mainmenu = document.querySelectorAll('.main_menu'),
          mainLink = mainmenu[0].querySelectorAll('.main_link'),
          headerForm = document.querySelector('form'),
          formField = headerForm.querySelectorAll('.form_part>.text'),
          button = document.querySelectorAll('button');


          console.log(button);
          
          
    mainLink.forEach( (item, index) => {

        item.addEventListener('click', (event) => {
            event.preventDefault();
            console.log(`clicked ${index}`);
        });
    });


    
    button.forEach( item => {

        item.addEventListener('click', (event) => {

            event.preventDefault();
            console.log(event.target.classList);
            console.log(`clicked ${item}`);

        });
    });
    

});