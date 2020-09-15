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
        

    // Main Menu
    //Плавная прокрутка страницы по якорям
    $('a.nav-link').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + "px"
        }, {
            duration: 2000,
            easing: "swing"
        });
        return false;
    });
    btn.addEventListener('click', (event) => {
        console.log('OK');
    });

    playBtn.addEventListener('click', (event) => {
        console.log('Running video');
    });

    
    
    // Описание карточек блока OUR TEAM
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


    // Динамическое создание карточек

    //Блок OUR FOCUS

    class focusCard {
        constructor(src, alt, title, descr, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');


            if (this.classes.length === 0) {
                this.element = "ourFocus__card";
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }


            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                
                <h3 class="ourFocus__card__title">${this.title}</h3>

                <p class="ourFocus__card__text">
                    ${this.descr}
                </p>
            `;
            this.parent.append(element);
        }
    }
    new focusCard (
        "img/web.svg",
        "picture_1",
        "Web Design",
        "Analytics release series A financing launch party interaction design android angel investor.",
        ".container .ourFocus__Cards"
    ).render();
    new focusCard (
        "img/design.svg",
        "picture_2",
        "UX Design",
        "Analytics release series A financing launch party interaction design android angel investor.",
        ".container .ourFocus__Cards"
    ).render();
    new focusCard (
        "img/photo.svg",
        "picture_3",
        "Photogrpahy",
        "Analytics release series A financing launch party interaction design android angel investor.",
        ".container .ourFocus__Cards"
    ).render();
    new focusCard (
        "img/app.svg",
        "picture_4",
        "App Development",
        "Analytics release series A financing launch party interaction design android angel investor.",
        ".container .ourFocus__Cards"
    ).render();


    
        
        






});