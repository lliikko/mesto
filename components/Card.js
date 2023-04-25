//import {fullImage, imageDesc, openPopup, popupFullImage, } from './index.js'
export default class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._templateSelector = templateSelector;
        this._name = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick;

    }
    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.cards__item')
            .cloneNode(true);

        return cardElement;
    }
    generateCard() {
        this._card = this._getTemplate();

        this._cardImage = this._card.querySelector('.cards__image');
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardTitle = this._card.querySelector('.cards__name');
        this._cardTitle.textContent = this._name;

        this._cardButtonLike = this._card.querySelector('#btnLike');
        this._cardButtonDelete = this._card.querySelector('#btnDelete');
        this._setEventListeners();
        return this._card;
    }
    _handleLikeClick() {
      this._cardButtonLike.classList.toggle('cards__like-button_active');
     }
    _handleDeleteClick() {
      this._card.remove();
     }
     
    _setEventListeners() {
        this._cardButtonLike.addEventListener('click', () => {
            this._handleLikeClick();
        });

        this._cardButtonDelete.addEventListener('click', () => {
            this._handleDeleteClick();
        });

        this._cardImage.addEventListener('click', () => {
          this._handleCardClick(this._name, this._link);
      });
    }




}




