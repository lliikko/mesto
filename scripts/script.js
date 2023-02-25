/*переменные для popup профиля*/
let popup = document.querySelector('.popup');
let popupProfileEdit = document.querySelector('.popup_edit-profile');
let buttonProfileEdit = document.querySelector('.profile__edit-button');
let buttonClose = document.querySelectorAll('.popup__close-button');
let formElement = document.querySelector('.popup__input-container');
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#job');
let profilName = document.querySelector('.profile__name');
let profilAddit = document.querySelector('.profile__additional');
/*переменные для popup добавления картинки*/
let popupPlaceAdd = document.querySelector('.popup_add-place');
let buttonPlaceAdd = document.querySelector('.profile__add-button');
let formPlace = document.querySelector('.popup__input-container[name="new-place"]');
let placeInput = formPlace.querySelector('#place');
let linkInput = formPlace.querySelector('#link');
/*переменнные для лайка*/
let buttonLike = document.querySelector('.cards__like-button');
/*переменнные для карточек*/
const cardsTemplate = document.querySelector('#card-item').content.querySelector('.cards__item');
const cardsList = document.querySelector('.cards');
/*переменные просмотра фото*/
const popupFullImage = document.querySelector('.popup_full-image');
let fullImage = document.querySelector('.popup__image');
let imageDesc = document.querySelector('.popup__place-name');

/*рендер карточки*/
function renderCard(cardData, append=true){
  let cardItem = cardsTemplate.cloneNode(true);
  cardItem.querySelector('.cards__image').src = cardData.link;
  cardItem.querySelector('.cards__image').alt = cardData.name;
  cardItem.querySelector('.cards__name').textContent = cardData.name;

  if (append === true){
    cardsList.append(cardItem);
  }
  else{
    cardsList.prepend(cardItem);
  }
}

initialCards.forEach((cardData) => {
  renderCard(cardData);
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
  let card = elem.closest(".cards__item");
  let text = card.querySelector('.cards__name').textContent;
  imageDesc.textContent = text;
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
  console.log(evt.target.id);
  let data = {
    name: placeInput.value,
    link: linkInput.value,
  }
  renderCard(data, false)
  closePopup(popupPlaceAdd);
}
function closePopupPlaceAdd(){
  closePopup(popupPlaceAdd);
}

buttonPlaceAdd.addEventListener("click", addPlace);
formPlace.addEventListener('submit', placeFormSubmit);

buttonProfileEdit.addEventListener("click", editProfile);
formElement.addEventListener('submit', handleFormSubmit);

buttonClose.forEach((button) =>{
  button.addEventListener('click', (e) => {
    closePopup(button.closest('.popup'));
})
})

document.body.addEventListener( 'click', function ( event ) {
  //alert(event.target.id);
  if (event.target.id == 'btnLike') like(event.target);
  if (event.target.id == 'btnDelete') deleteCard(event.target);
  if (event.target.id == 'btnImage') {
    viewPhoto(event.target);
  };
});

