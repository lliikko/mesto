import './index.css';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {initialCards, validationConfig} from '../utils/constans.js';


const popupEdit = document.querySelector('.popup_edit-profile');
const buttonProfileEdit = document.querySelector('.profile__edit-button');
const formProfile = document.querySelector('.popup__input-container[name="profile"]');
const nameInput = formProfile.querySelector('#name');
const jobInput = formProfile.querySelector('#job');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__additional');

const popupFullImage = document.querySelector('.popup_full-image');
const popupPlaceAdd = document.querySelector('.popup_add-place');
const buttonPlaceAdd = document.querySelector('.profile__add-button');

const cardsContainer = document.querySelector('.cards');

function handleCardClick(name, link) {
  popupImage.open(name, link);
}

function createCard(cardData){
  const card = new Card(cardData, '#card-item', handleCardClick);
  return card.generateCard();
}

const userData = new UserInfo(profileName, profileAbout);

const popupProfileEdit = new PopupWithForm(popupEdit, (inputs) => {
    userData.setUserInfo(inputs['name'], inputs['job']);
  }
);

popupProfileEdit.setEventListeners();

const popupAddPlace = new PopupWithForm(popupPlaceAdd, (inputs) => {
    const card = createCard({name: inputs['place'], link: inputs['link']});
    sectionElement.addItem(card);
  });

  popupAddPlace.setEventListeners();

buttonProfileEdit.addEventListener('click', () => {
  popupProfileEdit.open();
  const user = userData.getUsetInfo();
  nameInput.value = user.userName;
  jobInput.value = user.userDescription;
});

buttonPlaceAdd.addEventListener('click', () => {
  popupAddPlace.open();
});

const popupImage = new PopupWithImage(popupFullImage);
popupImage.setEventListeners();



const sectionElement = new Section({
  items: initialCards,
  renderer: (item) => {
      const card = createCard(item);
      sectionElement.addItem(card);
  }
}, cardsContainer);
sectionElement.renderer();

const profileEditValidate = new FormValidator(validationConfig, popupEdit);
profileEditValidate.enableValidation();
const placeAddValidate = new FormValidator(validationConfig, popupPlaceAdd);
placeAddValidate.enableValidation();


