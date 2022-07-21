// iife
// arguments

(function () {
  window.onpopstate = history.onpushstate = function (e) {
    routes.render(e.state);
  };
})();

(function (history) {
  let push_state = history.pushState;

  history.pushState = function (state) {
    push_state.apply(history, arguments);

    if (typeof history.onpushstate == 'function') {
      history.onpushstate({ state: state });
      // console.log(history.onpushstate({ state: state }));
    }
  };
})(window.history);

$(document).ready(() => {
  routes.goto();
});
