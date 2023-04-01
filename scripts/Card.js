import {fullImage, imageDesc, openPopup, popupFullImage} from './index.js'
export default class Card {
    constructor(data, templateSelector) {
        this._templateSelector = templateSelector;
        this._name = data.name;
        this._link = data.link;

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
        this._setEventListeners();

        this._card.querySelector('.cards__image').src = this._link;
        this._card.querySelector('.cards__image').alt = this._name;
        this._card.querySelector('.cards__name').textContent = this._name;

        return this._card;
    }
    _setEventListeners() {
        this._buttonLike = this._card.querySelector('#btnLike');
        this._buttonLike.addEventListener('click', () => {
            this._handleLikeClick();
        });
        this._card.querySelector('#btnDelete').addEventListener('click', () => {
            this._handleDeleteClick();
        });
        this._card.querySelector('#btnImage').addEventListener('click', () => {
            this._handleImageClick();
        });
    }

    _handleLikeClick() {
        this._buttonLike.classList.toggle('cards__like-button_active');
    }
    _handleDeleteClick() {
        this._card.remove();
    }
    _handleImageClick() {
        fullImage.src = this._link;
        imageDesc.textContent = this._name;
        fullImage.alt = this._name;
        openPopup(popupFullImage);
    }

}




