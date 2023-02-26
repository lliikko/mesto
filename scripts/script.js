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

/*переменнные для лайка*/
const buttonLike = document.querySelector('.cards__like-button');
/*переменнные для карточек*/
const cardsTemplate = document.querySelector('#card-item').content.querySelector('.cards__item');
const cardsList = document.querySelector('.cards');
/*переменные просмотра фото*/
const popupFullImage = document.querySelector('.popup_full-image');
const fullImage = document.querySelector('.popup__image');
const imageDesc = document.querySelector('.popup__place-name');

/*рендер карточки*/
function renderCard(cardData){
  const cardItem = cardsTemplate.cloneNode(true);
  cardItem.querySelector('.cards__image').src = cardData.link;
  cardItem.querySelector('.cards__image').alt = cardData.name;
  cardItem.querySelector('.cards__name').textContent = cardData.name;
  return cardItem;
}

initialCards.forEach((cardData) => {
  cardItem = renderCard(cardData);
  cardsList.append(cardItem);
})


/*функция лайка*/
function like(elem) {
  elem.classList.toggle("cards__like-button_active");
}

/*функция удаления*/
function deleteCard(elem) {
  elem.closest(".cards__item").remove();
}

/*функции открытия/закрытия popup */
function openPopup(elem) {
  elem.classList.add("popup_opened");
}
function closePopup(elem) {
  elem.classList.remove("popup_opened");
}
/*просмотр фото*/
function viewPhoto(elem){
  fullImage.src = elem.src;
  const card = elem.closest(".cards__item");
  const text = card.querySelector('.cards__name').textContent;
  imageDesc.textContent = text;
  fullImage.alt = text;
  openPopup(popupFullImage);
}

/*popup профиля*/
function editProfile(){
  openPopup(popupProfileEdit);
  nameInput.value = profilName.textContent;
  jobInput.value = profilAddit.textContent;
}
function handleFormSubmit (evt) {
    evt.preventDefault();
    profilName.textContent = nameInput.value;
    profilAddit.textContent = jobInput.value;
    closePopup(popupProfileEdit);
}
function closePopupEditProfile(){
  closePopup(popupProfileEdit);
}

/*popup добавления карточки*/
function addPlace(){
  openPopup(popupPlaceAdd);
}
function placeFormSubmit (evt) {
  evt.preventDefault();
  const placeInput = evt.target.querySelector('#place');
  const linkInput = evt.target.querySelector('#link');
  const data = {
    name: placeInput.value,
    link: linkInput.value,
  }
  cardItem = renderCard(data);
  cardsList.prepend(cardItem);
  closePopup(popupPlaceAdd);
  thisform.reset();
}
function closePopupPlaceAdd(){
  closePopup(popupPlaceAdd);
}

buttonPlaceAdd.addEventListener("click", addPlace);
formPlace.addEventListener('submit', placeFormSubmit);

buttonProfileEdit.addEventListener("click", editProfile);
formElement.addEventListener('submit', handleFormSubmit);

buttonsClose.forEach((button) =>{
  button.addEventListener('click', (e) => {
    closePopup(button.closest('.popup'));
})
})

document.body.addEventListener( 'click', function ( event ) {
  //alert(event.target.id);
  if (event.target.id == 'btnLike') like(event.target);
  if (event.target.id == 'btnDelete') deleteCard(event.target);
  if (event.target.id == 'btnImage') viewPhoto(event.target);
});

