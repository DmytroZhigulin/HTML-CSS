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



    //функция события 'клик' на основном меню
    function mainMenuFunc(menu) {

        menu.forEach((item, index) => {

            // console.log(index);
            // console.log(item);
            item.addEventListener('click', (event) => {
                event.preventDefault();
                console.log(`clicked on ${index + 1}`);
            });
        });
    }
    mainMenuFunc(mainMenu);



    //функция проверки корректного заполнения формы хедера
    function formCheck(form) {

        formButton.addEventListener('click', () => {

            console.log('form button clicked!');
            let userInfo = [];

            inputField.forEach((item, index) => {

                // console.log(item);

                if ( item.value != '' && item.value != null) {

                    userInfo.push(item.value);
                    console.log(`done on ${index}`);

                } else {
                    console.log(`err on ${index}`);
                    alert("All fields must be filled");
                }

            });
    
            console.log(userInfo);

        });

    }
    formCheck(headerForm);

    

    



    


    















