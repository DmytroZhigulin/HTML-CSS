"use strict";


window.addEventListener('DOMContentLoaded', () => {

    const mainMenu = document.querySelectorAll('.main_menu .main_link'),
          headerForm = document.querySelector('.header_form'),
          inputField = headerForm.querySelectorAll('.text_field'),
          formCheckbox = headerForm.querySelector('[type="checkbox"]'),
          formButton = headerForm.querySelector('.form_button'),
          hamburgerButton = document.querySelector('.menu_icon__wrap'),
          hamburgerMenuWindow = document.querySelector('.nav');

   
    //события на кнопке бургер меню
    hamburgerButton.addEventListener('click', (e) => {

        const line = document.querySelector('.menu_icon');
        line.classList.toggle('active');
        hamburgerMenuWindow.classList.toggle('nav-active');
        document.body.style.overflow = 'hidden';

    });
    

    //функция события 'клик' на основном меню
    function mainMenuFunc(menu) {

        menu.forEach((item, index) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                console.log(`clicked on ${index + 1}`);
            });
        });
    }
    mainMenuFunc(mainMenu);



    //функция проверки корректного заполнения формы хедера
    function formCheck(form) {
        //Переделать функцию. Передавать в нее тэг Form, проверять все инпуты и чекбоксы
        formButton.addEventListener('click', (e) => {

            e.preventDefault();
            if (formCheckbox.checked === true) {

                let userInfo = [];

                inputField.forEach((item, index) => {
                    
                    if ( item.value != '' && item.value != null) {

                        userInfo.push(item.value);
                        console.log(`done on ${index}`);

                    } else {
                        console.log(`err on ${index}`);
                        alert("All fields must be filled");
                    }
                });
        
                console.log(userInfo);

            } else {
                alert('You must read and accept the terms & conditions');
            }
            form.reset();
        });
    }
    formCheck(headerForm);

    //Вызов мобильной формы и проверка

    function adaptiveFormCall() {

        const formCallButton = document.querySelector('.request');
    
        formCallButton.addEventListener('click', (e) => {
            e.preventDefault();
    
            const formBgWindow = document.createElement('div');
            formBgWindow.classList.add('form_bg');
            headerForm.classList.remove('header_form');
            headerForm.classList.add('header_form__active');

            
            document.body.append(formBgWindow);
            formBgWindow.append(headerForm);
            document.body.style.overflow = 'hidden';
            
            
        });
    }
    adaptiveFormCall();



    //PRICING CARDS
    class pricingCard {
        constructor(title, tarif, data, needs, btn, parentSelector, ...classes) {
            this.title = title;
            this.tarif = tarif;
            this.data = data;
            this.needs = needs;
            this.classes = classes;
            this.btn = btn;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const elem = document.createElement('div');

            if (this.classes.length === 0) {
                this.element = "pricing_card";
                elem.classList.add(this.element);
            } else {
                this.classes.forEach(className => elem.classList.add(className));
            }
        
            elem.innerHTML = `
                <h4 class="pricing_c_title">${this.title}</h4>
                <h3 class="pricing_c_tarif">${this.tarif}</h3>

                <div class="descr_fields">
                    <p>Free Service</p>
                    <p>Multiple Accounts</p>
                    <p>Management No</p>
                    <p>${this.data}</p>
                    <p>${this.needs}</p>
                </div>

                <a href="#" class="card_button">${this.btn}</a>
            `;
            this.parent.append(elem);
        }
        
    }

    class pricingCardPopular extends pricingCard {
        constructor(title, tarif, data, needs, btn, parentSelector, ...classes) {
            super(title, tarif, data, needs, btn, parentSelector, ...classes);
        }

        render() {
            const elem = document.createElement('div');
            elem.classList.add('pricing_card');

            elem.innerHTML = `
                <div class="wrap">
                    <div class="trinagle"></div>
                </div>
                <h4 class="pricing_c_title">${this.title}</h4>
                <h3 class="pricing_c_tarif">${this.tarif}</h3>

                <div class="descr_fields">
                    <p>Free Service</p>
                    <p>Multiple Accounts</p>
                    <p>Management No</p>
                    <p>${this.data}</p>
                    <p>${this.needs}</p>
                </div>
                
                <a href="#" class="card_button">${this.btn}</a>
            `;
            this.parent.append(elem);
        }
    }

    new pricingCard (
        "Starter",
        "FREE",
        "--",
        "--",
        "Try",
        ".pricing_cards .cards_wrap"
    ).render();

    new pricingCardPopular (
        "Business",
        "$97",
        "Unlimited Data",
        "--",
        "Try",
        ".pricing_cards .cards_wrap"
    ).render();
    
    new pricingCard (
        "Professional",
        "$297",
        "Unlimited Data",
        "Whatever You Need",
        "Try",
        ".pricing_cards .cards_wrap",
    ).render();


    //анимация
    const animItems = document.querySelectorAll('.animated');
   
    const yOffset = window.pageYOffset,
          xOffset = window.pageXOffset;

    if (animItems.length > 0) {
        window.addEventListener('scroll', animScrol);
        function animScrol(params) {
            for (let i = 0; i < animItems.length; i++) {
                let animItem = animItems[i];
                const animHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;
                

                let animItemPoint = window.innerHeight - animHeight/animStart;

                if (animHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight/animStart;
                }

                if ((yOffset > animItemOffset - animItemPoint) && yOffset < (animItemOffset + animHeight)) {
                    animItem.classList.add('anim');
                } else {
                    animItem.classList.add('anim');
                }
            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect();
                let scrollLeft = xOffset || document.documentElement.scrollLeft;
                let scrollTop = yOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
        }
        animScrol();
    }
});



    

    



    


    















