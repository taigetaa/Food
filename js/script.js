import tabs from './modules/tabs';
import calc from './modules/calc';
import cards from './modules/cards';
import modal from './modules/modal';
import forms from './modules/forms';
import slides from './modules/slides';
import timer from './modules/timer';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal(selectorModal, modalTimerId), 300000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    calc();
    cards();
    modal('[data-modal]', '.modal', modalTimerId);
    forms('form', modalTimerId);
    timer('.timer', '2023-10-01');
    slides({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});