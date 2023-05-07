import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popup, callbackSubmit) {
        super(popup);
        this._formElement = this._popup.querySelector('.popup__input-container');
        this._inputList = this._formElement.querySelectorAll('.popup__item');
        this._formElementSubmitButton = this._formElement.querySelector('.popup__save-button');
        this._inputValues = {};
        this._callbackSubmit = callbackSubmit;
        this._doCallback = this._doCallback.bind(this);
    }

    _doCallback(evt) {
      this._callbackSubmit(evt);
    }

    _getInputValues() {
      this._inputList.forEach(input => {
        this._inputValues[input.name] = input.value;
      });
      return this._inputValues;
    }

    getFormValues(data) {
      return this._getInputValues(data);
    }

    getInputList() {
      return this._inputList;
    }
    setInputValues(data) {
      console.log(data)
      this._inputList.forEach((input) => {
        // тут вставляем в `value` инпута данные из объекта по атрибуту `name` этого инпута
        input.value = data[input.name];
      });
    }
    open() {
      super.open();
    }

    close() {
      super.close();
      this._formElement.reset();
    }

    setEventListeners() {
      super.setEventListeners();
      this._formElement.addEventListener('submit', this._doCallback);
    }

    deactivateEventListeners() {
      super.deactivateEventListeners();
      this._formElement.removeEventListener('submit', this._doCallback);
    }

    isLoading(loading) {
      if (loading) {
        this._formElementSubmitButton.textContent = 'Сохранение...';
        this._formElementSubmitButton.setAttribute('disabled', true);
      }
      else {
        setTimeout(() => {
          this._formElementSubmitButton.textContent = 'Сохранить';
        }, 400);
      }
    }
}
