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
/*рендер карточки*/
function renderCard(cardData) {
	const cardClone = cardsTemplate.cloneNode(true);
	const cardImage = cardClone.querySelector('.cards__image');
	cardImage.src = cardData.link;
	cardImage.alt = cardData.name;
	cardClone.querySelector('.cards__name').textContent = cardData.name;
	return cardClone;
}
initialCards.forEach((cardData) => {
		const cardItem = renderCard(cardData);
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
/*просмотр фото*/
function viewPhoto(elem) {
	fullImage.src = elem.src;
	const card = elem.closest(".cards__item");
	const text = card.querySelector('.cards__name').textContent;
	imageDesc.textContent = text;
	fullImage.alt = text;
	openPopup(popupFullImage);
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
	const data = {
		name: placeInput.value,
		link: linkInput.value,
	}
	const cardItem = renderCard(data);
	cardsList.prepend(cardItem);
	closePopup(popupPlaceAdd);
	e.target.reset();
}

function closePopupPlaceAdd() {
	closePopup(popupPlaceAdd);
}

function closeByEsc(e) {
	if(e.key === "Escape") {
		const openedPopup = document.querySelector(".popup_opened");
		closePopup(openedPopup);
	}
}

function setCloseByClick(e) {
	const buttonX = e.target.closest(".popup__close-button");
  const popup = e.target.closest(".popup_opened");
	if(e.target === popup || e.target === buttonX) closePopup(popup);
}


buttonPlaceAdd.addEventListener("click", addPlace);
formPlace.addEventListener('submit', placeFormSubmit);
buttonProfileEdit.addEventListener("click", editProfile);
formElement.addEventListener('submit', submitEditProfileForm);
document.body.addEventListener('click', function(e) {
	if(e.target.id === 'btnLike') like(e.target);
	if(e.target.id === 'btnDelete') deleteCard(e.target);
	if(e.target.id === 'btnImage') viewPhoto(e.target);
});
