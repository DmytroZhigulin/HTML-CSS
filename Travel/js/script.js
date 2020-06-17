"use strict";

    const mainMenu = document.querySelectorAll('.main_menu .main_link'),
        headerForm = document.querySelector('.header_form'),
        inputField = headerForm.querySelectorAll('.text_field'),
        formCheckbox = headerForm.querySelector('[type="checkbox"]'),
        formButton = headerForm.querySelector('.form_button');


    // console.log(headerForm);
    // console.log(inputField);
    // console.log(formCheckbox);
    // console.log(formButton);

    mainMenu.forEach((item, index) => {

        // console.log(index);
        // console.log(item);
        item.addEventListener('click', (event) => {
            event.preventDefault();
            console.log(index);
        });
    });

    



    


    















