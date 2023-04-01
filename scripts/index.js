import FormValidator from './FormValidator.js';
import Card from './Card.js';
const popupProfileEdit = document.querySelector('.popup_edit-profile');
const buttonProfileEdit = document.querySelector('.profile__edit-button');
const formProfile = document.querySelector('.popup__input-container[name="profile"]');
const nameInput = formProfile.querySelector('#name');
const jobInput = formProfile.querySelector('#job');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__additional');
/*переменные для popup добавления картинки*/
const popupPlaceAdd = document.querySelector('.popup_add-place');
const buttonPlaceAdd = document.querySelector('.profile__add-button');
const formPlace = document.querySelector('.popup__input-container[name="new-place"]');
const placeInput = formPlace.querySelector('#place');
const linkInput = formPlace.querySelector('#link');
/*переменнные для карточек*/
const cardsContainer = document.querySelector('.cards');
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
    document.addEventListener("keydown", handleClosePopupByEsc);
    elem.addEventListener("click", handleClosePopupByClick);
}

function closePopup(elem) {
    elem.classList.remove("popup_opened");
    document.removeEventListener('keydown', handleClosePopupByEsc);
    elem.removeEventListener("click", handleClosePopupByClick);
}

/*popup профиля*/
function editProfile() {
    openPopup(popupProfileEdit);
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
    profileEditValidate.enableButton();
}

function handleProfileFormSubmit(e) {
    e.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    closePopup(popupProfileEdit);
}

/*popup добавления карточки*/
function openPopupAddPlace() {
    openPopup(popupPlaceAdd);
}

function handleCardFormSubmit(e) {
    e.preventDefault();
    const cardData = {
        name: placeInput.value,
        link: linkInput.value,
    }
    const cardElement = generateCardElement(cardData);
    cardsContainer.prepend(cardElement);
    closePopup(popupPlaceAdd);
    e.target.reset();
}
function generateCardElement(cardData){
  const card = new Card(cardData, '#card-item');
  return card.generateCard();

};
function handleClosePopupByEsc(e) {
    if (e.key === "Escape") {
        const openedPopup = document.querySelector(".popup_opened");
        closePopup(openedPopup);
    }
}

function handleClosePopupByClick(e) {
    const buttonClosePopup = e.target.closest(".popup__close-button");
    const popup = e.target.closest(".popup_opened");
    if (e.target === popup || e.target === buttonClosePopup) closePopup(popup);
}
initialCards.forEach((cardData) => {
  const cardElement = generateCardElement(cardData);
  cardsContainer.append(cardElement);
})

buttonPlaceAdd.addEventListener("click", openPopupAddPlace);
formPlace.addEventListener('submit', handleCardFormSubmit);
buttonProfileEdit.addEventListener("click", editProfile);
formProfile.addEventListener('submit', handleProfileFormSubmit);

const profileEditValidate = new FormValidator(validationConfig, popupProfileEdit);
profileEditValidate.enableValidation();
const placeAddValidate = new FormValidator(validationConfig, popupPlaceAdd);
placeAddValidate.enableValidation();
export {fullImage, imageDesc, openPopup, popupFullImage}

