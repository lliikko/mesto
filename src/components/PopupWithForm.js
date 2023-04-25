import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popup, submitForm) {
        super(popup);
        this._formElement = this._popup.querySelector('.popup__input-container');
        this._inputList = this._formElement.querySelectorAll('.popup__item');
        this._submitForm = submitForm;
    }

    _getInputValues() {
        this._inputData = {};

        this._inputList.forEach((input) => {
            this._inputData[input.name] = input.value;
        });

        return this._inputData;
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
            this.close();
        });
    }

    close() {
        super.close();
        this._formElement.reset();
    }
}