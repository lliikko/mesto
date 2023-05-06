export default class Popup {
  constructor(popup) {
      this._popup = popup;
      this._handleEscClose = this._handleEscClose.bind(this);
      this._closeClick = this._closeClick.bind(this);

  }
  _handleEscClose(evt) {
      if (evt.key === 'Escape') {
          this.close();
      }
  }

  _closeClick(evt) {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
      this.close();
    };
    evt.stopPropagation();
  }
  setEventListeners() {
    this._popup.addEventListener('click', this._closeClick);
    document.addEventListener('keydown', this._handleEscClose);
  }
  deactivateEventListeners() {
    this._popup.removeEventListener('click', this._closeClick);
    document.removeEventListener('keydown', this._handleEscClose);
  }
  open() {
      this._popup.classList.add('popup_opened');
      this.setEventListeners();
      document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
      this._popup.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscClose);
  }

}
