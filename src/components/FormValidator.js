export default class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._form = form;
        this._inputList = form.querySelectorAll(this._config.inputSelector);
        this._submitButton = form.querySelector(this._config.submitButtonSelector);
    }
    _showInputError(errorElement, input) {
        errorElement.textContent = input.validationMessage;
        errorElement.classList.add(this._config.errorClassActive);
        input.classList.add(this._config.errorClass);
    };
    _hideInputError(errorElement, input) {
        errorElement.classList.remove(this._config.errorClassActive);
        input.classList.remove(this._config.errorClass);
        errorElement.textContent = '';
    };
    _disableButton() {
        this._submitButton.classList.add(this._config.inactiveButtonClass);
        this._submitButton.disabled = true;
    }
    enableButton() {
        this._submitButton.classList.remove(this._config.inactiveButtonClass);
        this._submitButton.disabled = false;
    }
    clearMistakes() {
      this._inputList.forEach((inputElement) => {
        const errorElement = this._form.querySelector(`${this._config.errorClassTemplate}${inputElement.name}`);
        this._hideInputError(errorElement, inputElement) })
    }
    _checkInputValidity(input) {
        const errorElement = document.querySelector(`${this._config.errorClassTemplate}${input.name}`)
        if (!input.validity.valid) {
            this._showInputError(errorElement, input);
        } else {
            this._hideInputError(errorElement, input);
        }
    };
    _hasInvalidInput() {
        return Array.from(this._inputList).some((input) => !input.validity.valid);
    }
    _toggleButtonState() {
        if (!this._hasInvalidInput()) {
            this.enableButton();
        } else {
            this._disableButton();
        }
    }
    _setEventListeners() {
        this._toggleButtonState();
        this._form.addEventListener('reset', (evt) => {
            this._disableButton();
        });
        this._inputList.forEach((input) => {
            input.addEventListener('input', (evt) => {
                this._checkInputValidity(input);
                this._toggleButtonState();
            });

        });
    }
    enableValidation() {
        this._setEventListeners();

    }
}


