(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers}var n,r;return n=t,(r=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getProfile",value:function(){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"editProfile",value:function(t,e){var n=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:e})}).then((function(t){return n._checkResponse(t)}))}},{key:"getCards",value:function(){var t=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"sendCard",value:function(t,e){var n=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:e})}).then((function(t){return n._checkResponse(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"likeCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/likes/").concat(t),{method:"PUT",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"deleteLike",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/likes/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"setNewAvatar",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then((function(t){return e._checkResponse(t)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._form=n,this._inputList=n.querySelectorAll(this._config.inputSelector),this._submitButton=n.querySelector(this._config.submitButtonSelector)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){t.textContent=e.validationMessage,t.classList.add(this._config.errorClassActive),e.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(t,e){t.classList.remove(this._config.errorClassActive),e.classList.remove(this._config.errorClass),t.textContent=""}},{key:"_disableButton",value:function(){this._submitButton.classList.add(this._config.inactiveButtonClass),this._submitButton.disabled=!0}},{key:"enableButton",value:function(){this._submitButton.classList.remove(this._config.inactiveButtonClass),this._submitButton.disabled=!1}},{key:"clearMistakes",value:function(){var t=this;this._inputList.forEach((function(e){var n=t._form.querySelector("".concat(t._config.errorClassTemplate).concat(e.name));t._hideInputError(n,e)}))}},{key:"_checkInputValidity",value:function(t){var e=document.querySelector("".concat(this._config.errorClassTemplate).concat(t.name));t.validity.valid?this._hideInputError(e,t):this._showInputError(e,t)}},{key:"_hasInvalidInput",value:function(){return Array.from(this._inputList).some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():this.enableButton()}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._form.addEventListener("reset",(function(e){t._disableButton()})),this._inputList.forEach((function(e){e.addEventListener("input",(function(n){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function t(e,n,r,o){var i=o.handleCardClick,u=o.handleLikeClick,a=o.handleCardDelete;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardTemplate=n.cloneNode(!0),this.card=this._cardTemplate.querySelector(".cards__item"),this._cardImg=this.card.querySelector(".cards__image"),this._cardName=this.card.querySelector(".cards__name"),this._trashBtn=this.card.querySelector(".cards__trash-button"),this._likeBtn=this.card.querySelector(".cards__like-button"),this._likesCount=this.card.querySelector(".cards__like-number"),this._handleCardClick=i,this._handleLikeClick=u,this._handleCardDelete=a,this._nameImage=e.name,this._linkImage=e.link,this._ownerId=e.owner._id,this._userId=r,this._cardId=e._id,this._isLiked=!1,this._likes=e.likes}var e,n;return e=t,(n=[{key:"_enterData",value:function(){var t=this;this._cardName.textContent=this._nameImage,this._cardImg.src=this._linkImage,this._cardImg.alt=this._nameImage,this._likes.length?(this._likesCount.textContent=this._likes.length,this._likes.find((function(e){e._id===t._userId&&t._likeBtn.classList.add("cards__like-button_active")}))):this._likesCount.textContent="0",this._ownerId===this._userId&&this._trashBtn.classList.remove("cards__trash-button_disabled")}},{key:"_addEventListeners",value:function(){var t=this;this._cardImg.addEventListener("click",(function(){return t._handleCardClick(t._nameImage,t._linkImage)})),this._likeBtn.addEventListener("click",(function(){return t._handleLikeClick(t)})),this._trashBtn.addEventListener("click",(function(){return t._handleCardDelete(t)}))}},{key:"returnCard",value:function(){return this._enterData(),this._addEventListeners(),this._cardTemplate}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=n}var e,n;return e=t,(n=[{key:"renderer",value:function(t,e){var n=this;t.forEach((function(t){n._renderer(t,e)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}var y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=e,this._handleEscClose=this._handleEscClose.bind(this),this._closeClick=this._closeClick.bind(this)}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_closeClick",value:function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close-button"))&&this.close(),t.stopPropagation()}},{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._closeClick),document.addEventListener("keydown",this._handleEscClose)}},{key:"deactivateEventListeners",value:function(){this._popup.removeEventListener("click",this._closeClick),document.removeEventListener("keydown",this._handleEscClose)}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),this.setEventListeners(),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},m.apply(this,arguments)}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(r);if(o){var n=b(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popup.querySelector(".popup__image "),e._description=e._popup.querySelector(".popup__place-name"),e}return e=u,(n=[{key:"open",value:function(t,e){m(b(u.prototype),"open",this).call(this),this._image.src=e,this._description.textContent=t,this._image.alt=t}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},w.apply(this,arguments)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function E(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(r);if(o){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return E(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._formElement=n._popup.querySelector(".popup__input-container"),n._inputList=n._formElement.querySelectorAll(".popup__item"),n._formElementSubmitButton=n._formElement.querySelector(".popup__save-button"),n._inputValues={},n._callbackSubmit=e,n._doCallback=n._doCallback.bind(E(n)),n}return e=u,(n=[{key:"_doCallback",value:function(t){this._callbackSubmit(t)}},{key:"_getInputValues",value:function(){var t=this;return this._inputList.forEach((function(e){t._inputValues[e.name]=e.value})),this._inputValues}},{key:"getFormValues",value:function(t){return this._getInputValues(t)}},{key:"getInputList",value:function(){return this._inputList}},{key:"open",value:function(){w(j(u.prototype),"open",this).call(this)}},{key:"close",value:function(){w(j(u.prototype),"close",this).call(this),this._formElement.reset()}},{key:"setEventListeners",value:function(){w(j(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",this._doCallback)}},{key:"deactivateEventListeners",value:function(){w(j(u.prototype),"deactivateEventListeners",this).call(this),this._formElement.removeEventListener("submit",this._doCallback)}},{key:"isLoading",value:function(t){var e=this;t?(this._formElementSubmitButton.textContent="Сохранение...",this._formElementSubmitButton.setAttribute("disabled",!0)):setTimeout((function(){e._formElementSubmitButton.textContent="Сохранить"}),400)}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},I.apply(this,arguments)}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function B(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}var q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(r);if(o){var n=R(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return B(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._button=n._popup.querySelector(".popup__save-button"),n._callbackSubmit=e,n._cardId="",n._cardElement="",n._doCallback=n._doCallback.bind(B(n)),n}return e=u,(n=[{key:"_doCallback",value:function(t){this._callbackSubmit(t)}},{key:"getIdCard",value:function(){return this._cardId}},{key:"open",value:function(t,e){return I(R(u.prototype),"open",this).call(this),this.setEventListeners(),this._cardId=t,this._cardElement=e}},{key:"close",value:function(){I(R(u.prototype),"close",this).call(this),this.deactivateEventListeners()}},{key:"setEventListeners",value:function(){I(R(u.prototype),"setEventListeners",this).call(this),this._button.addEventListener("click",this._doCallback)}},{key:"deactivateEventListeners",value:function(){I(R(u.prototype),"deactivateEventListeners",this).call(this),this._button.removeEventListener("click",this._doCallback)}},{key:"isLoading",value:function(t){var e=this;t?(this._button.textContent="Удаление...",this._button.setAttribute("disabled",!0)):setTimeout((function(){e._button.textContent="Да",e._button.removeAttribute("disabled",!0)}),400)}},{key:"delete",value:function(){this._cardElement.remove()}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}var x=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userNameSelector=e.userName,this._userDescriptionSelector=e.userDescription,this._userAvatarSelector=e.userAvatar,this._inputName=n.userName,this._inputStatus=n.userDescription}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(t){return{name:t.name,description:t.about,avatar:t.avatar}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.description,r=t.avatar;this._userNameSelector.textContent=e,this._userDescriptionSelector.textContent=n,this._userAvatarSelector.src=r}},{key:"setInput",value:function(t){var e=t.name,n=t.description;this._inputName.value=e,this._inputStatus.value=n}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),N={formSelector:".popup__container",inputSelector:".popup__item",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",errorClassTemplate:".popup__input-error_type_",errorClassActive:"popup__input-error_active",errorClass:"popup__item_invalid"},V={profile:document.querySelector('.popup__input-container[name="profile"]'),avatar:document.querySelector('.popup__input-container[name="avatar-edit"]'),addCard:document.querySelector('.popup__input-container[name="new-place"]')},U={userName:document.querySelector(".profile__name"),userDescription:document.querySelector(".profile__additional"),userAvatar:document.querySelector(".profile__avatar_image")},M=document.querySelector("#card-item").content;function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var J={renderer:function(t,e){W._container.append(ut(t,e))}},G={userName:document.querySelector("#name"),userDescription:document.querySelector("#job")},H={profile:document.querySelector(".popup_edit-profile"),addCard:document.querySelector(".popup_add-place"),editAvatar:document.querySelector(".popup_avatar-edit"),viewCard:document.querySelector(".popup_full-image"),deleteConfirm:document.querySelector(".popup_confidence")},z={profile:document.querySelector(".profile__edit-button"),avatar:document.querySelector(".profile__avatar_image"),addCard:document.querySelector(".profile__add-button")},$=document.querySelector(".cards"),K={handleCardClick:function(t,e){return et.open(t,e)},handleLikeClick:function(t){t._likeBtn.classList.contains("cards__like-button_active")?Q.deleteLike(t._cardId).then((function(e){t._likesCount.textContent=e.likes.length,t._likeBtn.classList.remove("cards__like-button_active")})).catch((function(t){return console.log(t)})):Q.likeCard(t._cardId).then((function(e){t._likesCount.textContent=e.likes.length,t._likeBtn.classList.add("cards__like-button_active")})).catch((function(t){return console.log(t)}))},handleCardDelete:function(t){tt.open(t._cardId,t.card)}},Q=new n({url:"https://mesto.nomoreparties.co/v1/cohort-65",headers:{authorization:"205e22e2-b113-4435-a34d-89a291a0c436","Content-Type":"application/json"}}),W=new f(J,$),X=new L(H.profile,(function(t){return function(t){t.preventDefault(),X.isLoading(!0);var e=X.getFormValues();Q.editProfile(e.name,e.job).then((function(t){it.setUserInfo(it.getUserInfo(t))})).then((function(){return X.close()})).catch((function(t){return console.log(t)})).finally((function(){return X.isLoading(!1)}))}(t)})),Y=new L(H.addCard,(function(t){return function(t){t.preventDefault(),Y.isLoading(!0);var e=Y.getFormValues();Q.sendCard(e.place,e.link).then((function(t){return W.addItem(ut(t))})).then((function(){return Y.close()})).catch((function(t){return console.log(t)})).finally((function(){return Y.isLoading(!1)}))}(t)})),Z=new L(H.editAvatar,(function(t){return function(t){t.preventDefault(),Z.isLoading(!0);var e=Z.getFormValues();Q.setNewAvatar(e.avatar).then((function(t){it.setUserInfo(it.getUserInfo(t))})).then((function(){return Z.close()})).catch((function(t){return console.log(t)})).finally((function(){return Z.isLoading(!1)}))}(t)})),tt=new q(H.deleteConfirm,(function(t){return function(t){t.preventDefault(),tt.isLoading(!0),Q.deleteCard(tt.getIdCard()).then((function(){return tt.delete()})).then((function(){return tt.close()})).catch((function(t){return console.log(t)})).finally((function(){return tt.isLoading(!1)}))}(t)})),et=new g(H.viewCard),nt=new i(N,V.profile),rt=new i(N,V.addCard),ot=new i(N,V.avatar),it=new x(U,G);function ut(t,e){return new c(t,M,e,K).returnCard()}Promise.all([Q.getProfile(),Q.getCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return F(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];it.setUserInfo(it.getUserInfo(o)),W.renderer(i,o._id)})).catch((function(t){return console.log(t)})),z.profile.addEventListener("click",(function(){V.profile.reset(),Q.getProfile().then((function(t){it.setInput(it.getUserInfo(t)),nt.clearMistakes(),X.open()}))})),z.avatar.addEventListener("click",(function(){ot.clearMistakes(),Z.open()})),z.addCard.addEventListener("click",(function(){rt.clearMistakes(),Y.open()})),nt.enableValidation(),rt.enableValidation(),ot.enableValidation()})();