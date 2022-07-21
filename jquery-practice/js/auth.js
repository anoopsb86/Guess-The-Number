(function (exports) {
  class AuthHandler {
    is_loggedin() {
      return store.is_user_exists();
    }

    login(email, password) {
      store.set_item('user', {
        email: email,
        password: password,
      });
    }

    logout() {
      store.remove_item('user');
    }
  }

  exports.auth = new AuthHandler();
})(window);
