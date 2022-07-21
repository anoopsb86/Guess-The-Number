(function (exports) {
  exports.Page = class {
    constructor(wrapper) {
      this.$wrapper = wrapper;
      this.init_dom();
    }

    init_dom() {
      this.$nav_wrapper = $('<div class="nav-container"></>');
      this.$content_wrapper = $('<div class="content-container"></>');
      //Navbar
      this.navbar = new exports.Navbar(this.$nav_wrapper);
      this.$wrapper.html(this.$nav_wrapper).append(this.$content_wrapper);
    }
  };
})(window);

// class Page {
//     NavbarHandler();
// }

// class HomePage extends Page {
//   constructor(wrapper) {
//     this.$wrapper = wrapper;
//     this.render();
//   }

//   render() {
//     this.$container_page = $(`
//           <div class="cred-container">
//             <h3 class="login-heading">HOME PAGE</h3>
//           </div>
//             `);

//     this.$wrapper.html(this.$container_page);
//   }
// }

// class AboutPage extends Page {
//   constructor(wrapper) {
//     this.$wrapper = wrapper;
//     this.render();
//   }

//   render() {
//     this.$container_page = $(`
//           </nav>
//           <div class="cred-container">
//             <h3 class="login-heading">ABOUT PAGE</h3>
//           </div>
//             `);

//     this.$wrapper.html(this.$container_page);
//   }
// }
