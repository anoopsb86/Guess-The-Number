(function (exports) {
  exports.Navbar = class {
    constructor(wrapper) {
      this.$wrapper = wrapper;
      this.render_nav();
    }

    render_nav() {
      this.$container = $(`
        <nav class="nav">
          <div class="nav__link navbar">
            <a class="home-link" page="home" href="">home</a>
            <a class="about-link" page="about" href="">about</a>
            <a class="contact-link" page="contact" href="">contact</a>
            <a class="logout-link" page="login" href="">Logout</a>
          </div>
        </nav>
      `);
      this.$wrapper.html(this.$container);

      this.click_handlers();
    }

    click_handlers() {
      this.$container.on('click', 'a', function (e) {
        e.preventDefault();
        console.log($(this));
        routes.goto($(this).attr('page'));
      });
    }

    // home_handler() {
    //   this.$home = this.$container.find('a[class="home-link"]');

    //   this.$home.on('click', e => {
    //     e.preventDefault();
    //     routes.goto('home');
    //   });
    // }

    // about_handler() {
    //   this.$about = this.$container.find('a[class="about-link"]');

    //   this.$about.on('click', e => {
    //     e.preventDefault();
    //     routes.goto('about');
    //   });
    // }

    // contact_handler() {
    //   this.$contact = this.$container.find('a[class="contact-link"]');

    //   this.$contact.on('click', e => {
    //     e.preventDefault();
    //     routes.goto('contact');
    //   });
    // }

    // logout_handler() {
    //   this.$logout = this.$container.find('a[class="logout-link"]');

    //   this.$logout.on('click', e => {
    //     e.preventDefault();
    //     auth.logout();
    //     routes.goto('login');
    //   });
    // }
  };
})(window);
