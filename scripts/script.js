let popup = document.querySelector('.popup');
let show = document.querySelector('.profile__edit-button');
let close = document.querySelector('.popup__close-button');

show.addEventListener("click", () => {
popup.classList.toggle("popup_opened")
})
close.addEventListener("click", () => {
  popup.classList.toggle("popup_opened")
  })

  // Находим форму в DOM
let formElement = document.querySelector('.popup__input-container');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#job');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
document.querySelector('.profile__name').textContent = nameInput.value;
document.querySelector('.profile__additional').textContent = jobInput.value;
popup.classList.toggle("popup_opened");
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);
