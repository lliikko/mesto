let popup = document.querySelector('.popup');
let buttonProfileEdit = document.querySelector('.profile__edit-button');
let buttonClose = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__input-container');
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#job');
let profilName = document.querySelector('.profile__name');
let profilAddit = document.querySelector('.profile__additional');

function openPopup() {
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function handleFormSubmit (evt) {
    evt.preventDefault();
profilName.textContent = nameInput.value;
profilAddit.textContent = jobInput.value;
closePopup();
}

buttonProfileEdit.addEventListener("click", openPopup);
buttonClose.addEventListener("click", closePopup);
formElement.addEventListener('submit', handleFormSubmit);
