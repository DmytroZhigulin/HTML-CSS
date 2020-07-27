"use strict";



window.addEventListener('DOMContentLoaded', () => {



    

    const buttons = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]'),
          navMenu = document.querySelectorAll('.menu_block'),
          burgerMenuOpen = document.querySelector('.burger_btn'),
          burgerMenu = document.querySelector('.burgerMenu'),
          burgerMenuBlock = burgerMenu.querySelectorAll('.burgerMenu_block'),
          burgerCloseBtn = document.querySelector('.close_burger'),
          reviewLeft = document.querySelector('.arrowLeft'),
          reviewRight = document.querySelector('.arrowRight'),
          reviews = document.querySelectorAll('.review'),
          reviewsCirc = document.querySelectorAll('.circ');
          

    // Modal window show and close
    function modalWindow() {

        buttons.forEach( (item, index) => {

            item.addEventListener('click', () => {
                console.log(`clicked ${index}`);

                modal.classList.remove('hide');
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';

                modalFormValid();
                
            });
        });

        function closeModalWindow() {
            modal.classList.remove('show');
            modal.classList.add('hide');
            document.body.style.overflow = '';

            
        }
        

        modalCloseBtn.addEventListener('click', closeModalWindow);


        modal.addEventListener('click', (event) => {

            if ( event.target === modal) {
                closeModalWindow();
            }
        });

        
        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" && modal.classList.contains('show')) {
                closeModalWindow();
            }
        });

    }
    modalWindow();


    //Burger Menu show and close
    function burgerMenuFunc() {

        burgerMenuOpen.addEventListener('click', (e) => {

            burgerMenu.classList.remove('hide');
            burgerMenu.classList.add('show');

        });

        function closeBurger() {
            burgerMenu.classList.remove('show');
            burgerMenu.classList.add('hide');
        }

        burgerCloseBtn.addEventListener('click', (e) => {
            closeBurger();
        });

    }
    burgerMenuFunc();


    //Reviews
    function reviewsAnimation() {

        reviews.forEach((item, index) => {

            reviewLeft.addEventListener('click' , (e) => {
                console.log("toLeft");

                if ( item.classList.contains('hidden')) {
                    item.classList.remove('hidden');
                    item.style.margin = '85px 0px 70px';
                } else if ( item.style.display == '') {
                    item.classList.add('hidden');
                }

            });
    
            reviewRight.addEventListener('click' , (e) => {
                console.log("toRight");
                if ( item.classList.contains('hidden')) {
                    item.classList.remove('hidden');
                    item.style.margin = '85px 0px 70px';
                } else if ( item.style.display == '') {
                    item.classList.add('hidden');
                }
            });
        });

    }
    reviewsAnimation();


    //Modal Valid
    function modalFormValid() {

        let modalForm = document.querySelector('.modal_form'),
            modalNameField = document.getElementById('modal_name'),
            modalPhoneField = document.getElementById('modal_phone'),
            modalErr = document.getElementById('modal_error');

            modalForm.addEventListener('submit', (e) => {

                let errors = [];

                if (modalNameField.value === '' || modalNameField.value === null) {
                    errors.push("Введіть ім'я");
                } else if (modalPhoneField.value === '' || modalPhoneField.value === null) {
                    errors.push("Введіть номер телефону");
                }

                if (errors.length > 0) {
                    e.preventDefault();
                    modalErr.innerText = errors;
                }   
            });
    }


    //Page Form Valid
    function pageFormValid() {

        let pageNameField = document.getElementById('username'),
            pageMailField = document.getElementById('mail'),
            pagePhoneField = document.getElementById('userphone'),
            pageMessage = document.getElementById('message'),
            pageFormErr = document.getElementById('pageForm_error'),
            btn = document.querySelector('.formBtn');
            

            btn.addEventListener('click', (e) => {
                console.log('2');
                let err = [];

                if (pageNameField.value === '' || pageNameField.value === null) {
                    err.push("0");
                    pageNameField.style.border = "1px solid red";
                }
                if (pageMailField.value === '' || pageMailField.value === null) {
                    err.push("1");
                    pageMailField.style.border = "1px solid red";
                }
                if (pagePhoneField.value === '' || pagePhoneField.value === null) {
                    err.push("2");
                    pagePhoneField.style.border = "1px solid red";
                }
                if (pageMessage.value === '' || pageMessage.value === null) {
                    err.push("3");
                    pageMessage.style.border = "1px solid red";
                }

                if (err.length > 0) {
                    e.preventDefault();
                    pageFormErr.innerText = "Заповніть усі поля";
                } 
                
            });
            
    }
    pageFormValid();

    
});   