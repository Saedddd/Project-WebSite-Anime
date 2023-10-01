"use strict";


window.addEventListener('DOMContentLoaded', () => {

//=================== Tabs ======================
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsCon = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');


    function hideTabContent(){
        tabsCon.forEach(tabs =>{
            tabs.classList.add('hide');
            tabs.classList.remove('show');
        });

        tabs.forEach(tabs => {
            tabs.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsCon[i].classList.add('show', 'fade');
        tabsCon[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');

    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if(target && target.classList.contains('tabheader__item')){ //проверяет есть ли такой класс
            tabs.forEach((item, i) =>{
                if(item == target){ //проверяет нумерацию
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

//==================== Timer ====================

const deadline = '2021-12-13';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t / (1000*60*60*24)) ),
            hours = Math.floor( (t / (1000*60*60) % 24) ),
            minutes = Math.floor( (t / 1000 / 60) % 60 ),
            seconds = Math.floor( ( t / 1000) % 60);




        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds

        };
    }

    function getZero(num){
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);



    // =================================== Modal Window ==================

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('.modal__close');


          modalTrigger.forEach(btn => {
            btn.addEventListener('click', () => {
            modal.classList.add('show');
            modal.classList.remove('hide');
              });
          });




          modalCloseBtn.addEventListener('click', () => {
          modal.classList.add('hide');
          modal.classList.remove('show');
  });



});
