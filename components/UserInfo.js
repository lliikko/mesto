export default class UserInfo {
  constructor(userName, userDescription) {
      this._userName = userName;
      this._userDescription = userDescription;
  }

  getUsetInfo() {
      const userData = {
          userName: this._userName.textContent,
          userDescription: this._userDescription.textContent
      };

      return userData;
  }

  setUserInfo(name, description) {
      this._userName.textContent = name;
      this._userDescription.textContent = description;
  }
}
