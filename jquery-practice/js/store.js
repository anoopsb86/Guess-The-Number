let store = {
  is_user_exists: function () {
    return !!sessionStorage.getItem('user');
  },

  get_user: function (key) {
    return sessionStorage.getItem(key);
  },

  set_item: function (key, value) {
    return sessionStorage.setItem(key, value);
  },

  remove_item: function (key) {
    sessionStorage.removeItem(key);
  },
};
