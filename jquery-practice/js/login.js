(function (exports) {
  exports.LoginPage = class {
    constructor(wrapper) {
      this.$wrapper = wrapper;
      this.render();
    }

    render() {
      this.$container = $(`
        <div class="cred-container">
          <img src="/loginLogo.png" alt="Login Logo" class="login-logo" />
          <h3 class="login-heading">LOGIN</h3>
          <form class="cred-form">
            <label for="email" class="email-text">Email Address</label>
            <input type="email" class="input-email" />
            <label for="email" class="password-text">Password</label>
            <input type="password" class="input-password" />
            <input
              type="submit"
              class="btn submit-btn"
              value="Submit"
            />
          </form>
        </div>
      `);

      this.setup_handlers();
      this.$wrapper.html(this.$container);
    }

    setup_handlers() {
      this.$submit = this.$container.find('input[type="submit"]');
      this.$email = this.$container.find('input[type="email"]');
      this.$password = this.$container.find('input[type="password"]');
      auth.logout();

      this.$submit.on('click', e => {
        e.preventDefault();
        // console.log(this.$email.val(), this.$password.val());
        auth.login(this.$email.val(), this.$password.val());

        routes.goto('home');
      });
    }
  };
})(window);
