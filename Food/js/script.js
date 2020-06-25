"use strict";

window.addEventListener('DOMContentLoaded', () => {

    const tabsContent = document.querySelectorAll('.tabcontent'),
          tabParent = document.querySelector('.tabheader__items'),
          tabs = tabParent.querySelectorAll('.tabheader__item');


          console.log(tabParent);
          console.log(tabsContent);
          console.log(tabs);



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
});