import FormValidator from './FormValidator.js';
import Card from './Card.js';
const popupProfileEdit = document.querySelector('.popup_edit-profile');
const buttonProfileEdit = document.querySelector('.profile__edit-button');
const buttonsClose = document.querySelectorAll('.popup__close-button');
const formElement = document.querySelector('.popup__input-container');
const nameInput = formElement.querySelector('#name');
const jobInput = formElement.querySelector('#job');
const profilName = document.querySelector('.profile__name');
const profilAddit = document.querySelector('.profile__additional');
/*переменные для popup добавления картинки*/
const popupPlaceAdd = document.querySelector('.popup_add-place');
const buttonPlaceAdd = document.querySelector('.profile__add-button');
const formPlace = document.querySelector('.popup__input-container[name="new-place"]');
const placeInput = formPlace.querySelector('#place');
const linkInput = formPlace.querySelector('#link');
/*переменнные для лайка*/
const buttonLike = document.querySelector('.cards__like-button');
/*переменнные для карточек*/
const cardsTemplate = document.querySelector('#card-item').content.querySelector('.cards__item');
const cardsList = document.querySelector('.cards');
/*переменные просмотра фото*/
const popupFullImage = document.querySelector('.popup_full-image');
const fullImage = document.querySelector('.popup__image');
const imageDesc = document.querySelector('.popup__place-name');
const validationConfig = {
  formSelector: '.popup__container',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  errorClassTemplate: '.popup__input-error_type_',
  errorClassActive: 'popup__input-error_active',
  errorClass: "popup__item_invalid",
};
const initialCards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}
];
/*функции открытияpopup */
function openPopup(elem) {
    elem.classList.add("popup_opened");
    document.addEventListener("keydown", closeByEsc);
    elem.addEventListener("click", setCloseByClick);
}

function closePopup(elem) {
    elem.classList.remove("popup_opened");
    document.removeEventListener('keydown', closeByEsc);
    elem.removeEventListener("click", setCloseByClick);
}

/*popup профиля*/
function editProfile() {
    openPopup(popupProfileEdit);
    closeByEsc(popupProfileEdit);
    nameInput.value = profilName.textContent;
    jobInput.value = profilAddit.textContent;
    nameInput.dispatchEvent(new Event('input', {
        bubbles: true
    }));
}

function submitEditProfileForm(e) {
    e.preventDefault();
    profilName.textContent = nameInput.value;
    profilAddit.textContent = jobInput.value;
    closePopup(popupProfileEdit);
}

function closePopupEditProfile() {
    closePopup(popupProfileEdit);
}
/*popup добавления карточки*/
function addPlace() {
    openPopup(popupPlaceAdd);
}

function placeFormSubmit(e) {
    e.preventDefault();
    const cardData = {
        name: placeInput.value,
        link: linkInput.value,
    }
    const card = new Card(cardData, '#card-item');
    const cardElement = card.generateCard();
    cardsList.prepend(cardElement);
    closePopup(popupPlaceAdd);
    e.target.reset();
}

function closePopupPlaceAdd() {
    closePopup(popupPlaceAdd);
}

function closeByEsc(e) {
    if (e.key === "Escape") {
        const openedPopup = document.querySelector(".popup_opened");
        closePopup(openedPopup);
    }
}

function setCloseByClick(e) {
    const buttonClosePopup = e.target.closest(".popup__close-button");
    const popup = e.target.closest(".popup_opened");
    if (e.target === popup || e.target === buttonClosePopup) closePopup(popup);
}
initialCards.forEach((cardData) => {
  const card = new Card(cardData, '#card-item');
  const cardElement = card.generateCard();
  cardsList.append(cardElement);
})

buttonPlaceAdd.addEventListener("click", addPlace);
formPlace.addEventListener('submit', placeFormSubmit);
buttonProfileEdit.addEventListener("click", editProfile);
formElement.addEventListener('submit', submitEditProfileForm);

const profileEditValidate = new FormValidator(validationConfig, popupProfileEdit);
profileEditValidate.enableValidation();
const placeAddValidate = new FormValidator(validationConfig, popupPlaceAdd);
placeAddValidate.enableValidation();
export {fullImage, imageDesc, openPopup, popupFullImage}

