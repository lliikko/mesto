export default class UserInfo {
  constructor(profileSelectors, profileFormInputs) {
    this._userNameSelector = profileSelectors.userName;
    this._userDescriptionSelector = profileSelectors.userDescription;
    this._userAvatarSelector = profileSelectors.userAvatar;
    this._inputName = profileFormInputs.userName;
    this._inputStatus = profileFormInputs.userDescription;
    this._id = null;
  }

  getUserInfo(data) {
    return {
      name: data.name,
      about: data.about,
      avatar: data.avatar
    }
  }
  getUserId() {
    return this._id;
  }

  setUserId(userId) {
    this._id = userId;
  }
  
  setUserInfo({ name, about, avatar }) {
    this._userNameSelector.textContent = name;
    this._userDescriptionSelector.textContent = about;
    this._userAvatarSelector.src = avatar;
  }


}
