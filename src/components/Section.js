export default class Section {
  constructor({ renderer }, containerSelector) {
      this._renderer = renderer;
      this.container = containerSelector;
  }

  renderer(items, userId) {
    items.forEach(item => {
      this._renderer(item, userId);
    })
  }

  addItem(element) {
      this.container.prepend(element);
  }

}
