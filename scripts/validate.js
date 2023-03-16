  const showInputError = (errorElement, input, config) => {
  errorElement.textContent = input.validationMessage;
  errorElement.classList.add(config.errorClassActive);
  input.classList.add(config.errorClass);
};

const hideInputError = (errorElement, input, config) => {
  errorElement.classList.remove(config.errorClassActive);
  input.classList.remove(config.errorClass);
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
const checkInputValidity = (input, config) => {
  const errorElement = document.querySelector(`${config.errorClassTemplate}${input.name}`)
  if (!input.validity.valid) {
    showInputError(errorElement, input, config);
  } else {
    hideInputError(errorElement, input, config);
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

  form.addEventListener('reset', (evt) =>{
    disableButton(submitButton, config.inactiveButtonClass);
  });

  inputList.forEach((input) => {
    input.addEventListener('input', (evt) => {
      checkInputValidity(input, config);
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

const validationConfig = {
  formSelector: '.popup__container',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  errorClassTemplate: '.popup__input-error_type_',
  errorClassActive: 'popup__input-error_active',
  errorClass: "popup__item_invalid",


};
  enableValidation(validationConfig);



