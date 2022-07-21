(function (exports) {
  exports.HomePage = class extends exports.Page {
    constructor(wrapper) {
      super(wrapper);
      this.render();
    }

    render() {
      this.$container_page = $(`
        <div class="cred-container">
          <h3 class="login-heading">HOME PAGE</h3>
        </div>
      `);

      this.$content_wrapper.html(this.$container_page);
    }
  };
})(window);
