"use strict";


window.addEventListener('DOMContentLoaded', () => {

    const mainMenu = document.querySelectorAll('.main_menu .main_link'),
    headerForm = document.querySelector('.header_form'),
    inputField = headerForm.querySelectorAll('.text_field'),
    formCheckbox = headerForm.querySelector('[type="checkbox"]'),
    formButton = headerForm.querySelector('.form_button');

    // console.log(headerForm);
    // console.log(inputField);
    // console.log(formCheckbox);
    // console.log(formButton);




    const startPlan = {
    name: 'Starter',
    monthPay: 'Free',
    typeOfService: 'Free service',
    accounts: 'Multiple accounts',
    planManage: 'Management NO',
    dataType: '--',
    techSupp: '--',
    };

    const businessPlan = {
    name: 'Business',
    monthPay: '$97',
    typeOfService: 'Free service',
    accounts: 'Multiple accounts',
    planManage: 'Limited management',
    dataType: 'Limited Data',
    techSupp: '',
    };

    const professionalPlan = {
    name: 'Professional',
    monthPay: '$297',
    typeOfService: 'free service',
    accounts: 'Multiple accounts',
    planManage: 'Unlimited management ',
    dataType: 'Unlimited data',
    techSupp: 'Whatever You Need',
    };


    // console.log(startPlan);
    // console.log(businessPlan);
    // console.log(professionalPlan);

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

        if (formCheckbox.checked === true) {

            console.log('checked');

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

                // for ( let field of inputField) {   
                //     if ( field.value != '' && field.value != null) {
                //         userInfo.push(field.value);
                //     } else {
                //         console.log(`err on ${field}`);
                //         alert("All fields must be filled");
                //     }
                // }
    
            console.log(userInfo);

        } else {
            alert('You must read and accept the terms & conditions');
        }
    });
    }
    formCheck(headerForm);
    
});



    

    



    


    















