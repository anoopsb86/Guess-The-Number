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
            <a class="logout-link" page="logout" href="">Logout</a>
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
  };
})(window);
