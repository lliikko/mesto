  const showInputError = (errorElement, validationMessage, errorClassActive) => {
  errorElement.textContent = validationMessage;
  errorElement.classList.add(errorClassActive);
};

const hideInputError = (errorElement, errorClassActive) => {
  errorElement.classList.remove(errorClassActive);
  errorElement.textContent = '';
};
const disableButton = (submitButton, inactiveButtonClass) => {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = true;
}
const enableButton = (submitButton, inactiveButtonClass) => {
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
}
const checkInputValidity = (input, errorClassTemplate, errorClassActive) => {
  const errorElement = document.querySelector(`${errorClassTemplate}${input.name}`)
  if (!input.validity.valid) {
    showInputError(errorElement, input.validationMessage, errorClassActive);
  } else {
    hideInputError(errorElement, errorClassActive);
  }
};
const hasInvalidInput = (inputList) => {
return Array.from(inputList).some((input) => !input.validity.valid);
}

const toggleButtonState = (submitButton, inactiveButtonClass, inputList) => {
  if (!hasInvalidInput(inputList)) {
    enableButton(submitButton, inactiveButtonClass);
  } else {
    disableButton(submitButton, inactiveButtonClass);
  }
};

  const setEventListeners = (form, config) => {
  const inputList = form.querySelectorAll(config.inputSelector);
  const submitButton = form.querySelector(config.submitButtonSelector);
  toggleButtonState(submitButton, config.inactiveButtonClass, inputList);

  inputList.forEach((input) => {
    input.addEventListener('input', (evt) => {
      checkInputValidity(input, config.errorClassTemplate, config.errorClassActive);
      toggleButtonState(submitButton, config.inactiveButtonClass, inputList);
    });

  });
};

const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach((form) =>{
    form.addEventListener('submit', (evt) =>{
      evt.preventDefault();
    });
    setEventListeners(form, config);
  });
};

  enableValidation({
   formSelector: '.popup__container',
   inputSelector: '.popup__item',
   errorClassTemplate: '.popup__input-error_type_',
   errorClassActive: 'popup__input-error_active',
   submitButtonSelector: '.popup__save-button',
   inactiveButtonClass: 'popup__save-button_disabled',
 });



