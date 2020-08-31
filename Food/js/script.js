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
    const deadline = '2020-09-24';

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
        btn = document.querySelectorAll("[data-modal]");
        let wasOpened = false;

        btn.forEach(button => {
            button.addEventListener('click', (e) => {
                openModal();
                removeScrollEvent();
            });
        });
        

        function openModal() {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
            clearInterval(modalTimer);
            wasOpened = true;
        }

        function closeModal() {
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
        function removeScrollEvent() {
            window.removeEventListener('scroll', showModalByScroll);
        }
        

        modal.addEventListener('click', (e) => {
            if(e.target === modal || e.target.getAttribute('data-close') == '') {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if(e.code === 'Escape' && modal.classList.contains('show')) {
                closeModal();
            }
        });

        const modalTimer = setTimeout(openModal, 50000);

        function showModalByScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                openModal();
                removeScrollEvent();
            } else if ( wasOpened === true) {
                removeScrollEvent();
            }
        }

        window.addEventListener('scroll', showModalByScroll);


    //MENU CARDS
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.exchange();

        }

        exchange() {
            this.price = +this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.element = "menu__item";
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
  
            element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                `;
            this.parent.append(element);
        }
    }
    new MenuCard (
        "img/tabs/vegy.jpg",
        "vegy",
        "Меню 'Фитнес'",
        "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
        8,
        ".menu .container",
    ).render();

    new MenuCard (
        "img/tabs/elite.jpg",
        "elite",
        "Меню 'Премиум'",
        "В меню 'Премиум' мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
        21,
        ".menu .container",
    ).render();

    new MenuCard (
        "img/tabs/post.jpg",
        "post",
        "Меню 'Постное'",
        "Меню 'Постное' - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
        14,
        ".menu .container",
    ).render();


    //Forms

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        fail: 'Что-то пошло не так...'
    };

    forms.forEach( item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.classList.add('spinner');
            form.insertAdjacentElement('afterend', statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            // request.setRequestHeader('Content-type', 'application/json');//- если сервер принимает данные в формате JSON
            const formData = new FormData(form);
            request.send(formData);

            
            // const object = {}; //создаем объект
            // formData.forEach(function(value, key) { 
            //     object[key] = value; 
            // });// с помощью колбэк функции перебираем форму (formData) и записываем значения и ключи в объект
            // const json = JSON.stringify(object);// конвертируем объект в JSON
            // request.send(json);// отправляем на сервер


            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    showThanksModal(message.success);
                    form.reset();
                    statusMessage.remove();
                    
                } else {
                    showThanksModal(message.fail);
                }
            });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();
        

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.toggle('hide');
            closeModal();
        }, 1000);
    }     
});