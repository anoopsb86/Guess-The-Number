(function (exports) {
  let route_conf = {
    login: { title: 'Login Page', handler: 'LoginPage' },
    home: { title: 'Home Page', handler: 'HomePage' },
    about: { title: 'About Page', handler: 'AboutPage' },
    contact: { title: 'Contact Page', handler: 'ContactPage' },
    logout: { title: 'Login Page', handler: 'LoginPage' },
  };

  class RouteHandler {
    get_handler(state) {
      // console.log(state);
      if (!route_conf[state]) return;
      if (!route_conf[state].handler) return;
      if (!exports[route_conf[state].handler]) return;

      return exports[route_conf[state].handler];
    }

    render(state) {
      if (!auth.is_loggedin() && state.state != 'login') {
        return this.goto('login');
      }

      const handler = this.get_handler(state.state);

      if (!handler) throw `${state.state} Route handler doesn't exist.`;

      new handler($('#app'));
    }

    goto(page) {
      if (!page) {
        let [h, p] = window.location.search.split('?page=');
        page = p || 'home';
      }

      //prettier-ignore
      history.pushState({ state: page }, route_conf[page].title, page == 'home' ? '/' : `/?page=${page}` );
      // console.log(route_conf[page].title);
    }
  }

  exports.routes = new RouteHandler();
})(window);
