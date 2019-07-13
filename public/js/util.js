module.exports = {
  $(e) {
    try {
      if (!!e.target.dataset.e == false) {
        throw 'The field "data-e" was not found.';
        return;
      }
      this.setData({
        [e.target.dataset.e]: e.detail.value
      })
    } catch (E) {
      console.error(E)
    }
  },
}