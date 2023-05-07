export default class Card {
    constructor(data, cardTemplate, userId, { handleCardClick, handleLikeClick, handleCardDelete }) {
      this._cardTemplate = cardTemplate.cloneNode(true);
      this.card = this._cardTemplate.querySelector('.cards__item');
      this._cardImg = this.card.querySelector('.cards__image');
      this._cardName = this.card.querySelector('.cards__name');
      this._trashBtn = this.card.querySelector('.cards__trash-button');
      this._likeBtn = this.card.querySelector('.cards__like-button');
      this._likesCount = this.card.querySelector('.cards__like-number');
      this._handleCardClick = handleCardClick;
      this._handleLikeClick = handleLikeClick;
      this._handleCardDelete = handleCardDelete;
      this._nameImage = data.name;
      this._linkImage = data.link;
      this._ownerId = data.owner._id;
      this._userId = userId;
      this._cardId = data._id;
      this._isLiked = false;
      this._likes = data.likes;
    }

    _enterData() {
      this._cardName.textContent = this._nameImage;
      this._cardImg.src = this._linkImage;
      this._cardImg.alt = this._nameImage;

      if (this._likes.length) {
        this._likesCount.textContent = this._likes.length;
        this._likes.find(like => {
          if (like._id === this._userId) {
            this._likeBtn.classList.add('cards__like-button_active');
          }
        })
      }
      else this._likesCount.textContent = '0';

      if (this._ownerId === this._userId) {
        this._trashBtn.classList.remove('cards__trash-button_disabled');
    }
  }
    _addEventListeners() {
      this._cardImg.addEventListener('click', () => this._handleCardClick(this._nameImage, this._linkImage));
      this._likeBtn.addEventListener('click', () => this._handleLikeClick(this));
      this._trashBtn.addEventListener('click', () => this._handleCardDelete(this));
    }

    returnCard() {
      this._enterData();
      this._addEventListeners();
      return this._cardTemplate;
    }
    setLike(count){
      this._likesCount.textContent = count;
      this._likeBtn.classList.toggle('cards__like-button_active');
    }
  }





