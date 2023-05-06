export default class Api {
  constructor(apiConfig) {
    this._url = apiConfig.url;
    this._headers = apiConfig.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getProfile() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then(result => this._checkResponse(result));
  }

  editProfile(newName, newDescription) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: newName,
        about: newDescription
      })
    })
      .then(result => this._checkResponse(result));
  }

  getCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then(result => this._checkResponse(result));
  }

  sendCard(imageName, imageLink) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: imageName,
        link: imageLink
      })
    })
      .then(result => this._checkResponse(result));
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(result => this._checkResponse(result));
  }

  likeCard(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(result => this._checkResponse(result));
  }

  deleteLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(result => this._checkResponse(result));
  }

  setNewAvatar(imageLink) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ avatar: imageLink })
    })
      .then(result => this._checkResponse(result));
  }
















}
