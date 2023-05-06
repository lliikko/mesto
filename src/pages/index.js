import './index.css';

import Api from '../components/Api.js';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import UserInfo from '../components/UserInfo.js';
import {validationConfig, apiConfig, formSelectors, profileSelectors, cardTemplate} from '../utils/constans.js';

const profileFormSubmit = evt => {
  evt.preventDefault();
  popupProfileEdit.isLoading(true);
  const inputValues = popupProfileEdit.getFormValues();
  api.editProfile(inputValues.name, inputValues.job)
    .then(data => {
      userInfo.setUserInfo(userInfo.getUserInfo(data));
    })
    .then(() => popupProfileEdit.close())
    .catch(err => console.log(err))
    .finally(() => popupProfileEdit.isLoading(false));
};

const deleteCardSubmit = evt => {
  evt.preventDefault();
  popupWithConfirm.isLoading(true);
  api.deleteCard(popupWithConfirm.getIdCard())
    .then(() => popupWithConfirm.delete())
    .then(() => popupWithConfirm.close())
    .catch(err => console.log(err))
    .finally(() => popupWithConfirm.isLoading(false));
};

const handleCardDelete = card => {
  popupWithConfirm.open(card._cardId, card.card);
}

const handleCardClick = (description, link) => popupWithImage.open(description, link);

const handleLikeClick = card => {
  if (card._likeBtn.classList.contains('cards__like-button_active')) {
    api.deleteLike(card._cardId)
      .then((res) => {
        card._likesCount.textContent = res.likes.length;
        card._likeBtn.classList.remove('cards__like-button_active');
      })
      .catch(err => console.log(err));
  }
  else {
    api.likeCard(card._cardId)
      .then((res) => {
        card._likesCount.textContent = res.likes.length;
        card._likeBtn.classList.add('cards__like-button_active');
      })
      .catch(err => console.log(err));
  }
};

const addCardFormSubmit = evt => {
  evt.preventDefault();
  addCardPopup.isLoading(true);
  const inputValues = addCardPopup.getFormValues();
  api.sendCard(inputValues.place, inputValues.link)
    .then((data) => renderCard.addItem(createCard(data)))
    .then(() => addCardPopup.close())
    .catch(err => console.log(err))
    .finally(() => addCardPopup.isLoading(false));
}

const avatarFormSubmit = evt => {
  evt.preventDefault();
  avatarPopup.isLoading(true);
  const inputValue = avatarPopup.getFormValues();
  api.setNewAvatar(inputValue.avatar)
    .then(data => {
      userInfo.setUserInfo(userInfo.getUserInfo(data));
    })
    .then(() => avatarPopup.close())
    .catch(err => console.log(err))
    .finally(() => avatarPopup.isLoading(false));
}

const render = {
  renderer: (item, id) => {
    renderCard._container.append(createCard(item, id));
  }
}

const profileFormInputs = {
  userName: document.querySelector('#name'),
  userDescription: document.querySelector('#job')
}
const popupSelectors = {
  profile: document.querySelector('.popup_edit-profile'),
  addCard: document.querySelector('.popup_add-place'),
  editAvatar: document.querySelector('.popup_avatar-edit'),
  viewCard: document.querySelector('.popup_full-image'),
  deleteConfirm: document.querySelector('.popup_confidence')
}
const popupOpenButtons = {
  profile: document.querySelector('.profile__edit-button'),
  avatar: document.querySelector('.profile__avatar_image'),
  addCard: document.querySelector('.profile__add-button')
}
const cardsContainer = document.querySelector('.cards');
const cardHandlers = {
  handleCardClick: handleCardClick,
  handleLikeClick: handleLikeClick,
  handleCardDelete: handleCardDelete
}

const api = new Api(apiConfig);
const renderCard = new Section(render, cardsContainer);
const popupProfileEdit = new PopupWithForm(popupSelectors.profile, evt => profileFormSubmit(evt));
const addCardPopup = new PopupWithForm(popupSelectors.addCard, evt => addCardFormSubmit(evt));
const avatarPopup = new PopupWithForm(popupSelectors.editAvatar, evt => avatarFormSubmit(evt));
const popupWithConfirm = new PopupWithConfirmation(popupSelectors.deleteConfirm, evt => deleteCardSubmit(evt));
const popupWithImage = new PopupWithImage(popupSelectors.viewCard);
const profileEditValidate = new FormValidator(validationConfig, formSelectors.profile);
const placeAddValidate = new FormValidator(validationConfig, formSelectors.addCard);
const avatarValidate = new FormValidator(validationConfig, formSelectors.avatar);
const userInfo = new UserInfo(profileSelectors, profileFormInputs);

Promise.all([api.getProfile(), api.getCards()])
  .then(([userData, cardsData]) => {
  userInfo.setUserInfo(userInfo.getUserInfo(userData));
  renderCard.renderer(cardsData, userData._id);
  })
  .catch(err => console.log(err));

function createCard(cardData, userId){
  const card = new Card(cardData, cardTemplate, userId, cardHandlers);
  return card.returnCard();
  }

popupOpenButtons.profile.addEventListener('click', () => {
    formSelectors.profile.reset();
    api.getProfile()
    .then(data => {
    userInfo.setInput(userInfo.getUserInfo(data));
    profileEditValidate.clearMistakes();
    popupProfileEdit.open();
    });
  });

popupOpenButtons.avatar.addEventListener('click', () => {
  avatarValidate.clearMistakes();
  avatarPopup.open();
});

popupOpenButtons.addCard.addEventListener('click', () => {
  placeAddValidate.clearMistakes();
  addCardPopup.open();
});

profileEditValidate.enableValidation();
placeAddValidate.enableValidation();
avatarValidate.enableValidation();



