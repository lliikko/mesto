import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._image = this._popup.querySelector('.popup__image ');
        this._description = this._popup.querySelector('.popup__place-name');
    }

    open(description, image) {
        super.open();
        this._image.src = image;
        this._description.textContent = description;
        this._image.alt = description;
    }
}
