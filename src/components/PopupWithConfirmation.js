import Popup from "./Popup.js";
export default class PopupDePopupWithConfirmation extends Popup {
  constructor(popup, callbackSubmit) {
    super(popup);
    this._button = this._popup.querySelector('.popup__save-button');
    this._callbackSubmit = callbackSubmit;
    this._cardId = '';
    this._cardElement = '';
    this._doCallback = this._doCallback.bind(this);
  }

  _doCallback(evt) {
    this._callbackSubmit(evt);
  }

  getIdCard() {
    return this._cardId;
  }

  open(cardId, cardElement) {
    super.open();
    this.setEventListeners();
    return this._cardId = cardId, this._cardElement = cardElement;
  }

  close() {
    super.close();
    this.deactivateEventListeners();
  }

  setEventListeners() {
    super.setEventListeners();
    this._button.addEventListener('click', this._doCallback);
  }

  deactivateEventListeners() {
    super.deactivateEventListeners();
    this._button.removeEventListener('click', this._doCallback);
  }

  isLoading(loading) {
    if (loading) {
      this._button.textContent = 'Удаление...';
      this._button.setAttribute('disabled', true);
    }
    else {
      setTimeout(() => { 
        this._button.textContent = 'Да';
        this._button.removeAttribute('disabled', true);
      }, 400);
    }
  }

  delete() {
    this._cardElement.remove();
  }
};
