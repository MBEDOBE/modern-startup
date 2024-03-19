(function () {
  'use strict';

  var mainNav = document.querySelector('#mainNav');

  if (mainNav) {
    // collapse Navbar
    var collapseNavbar = function () {
      var scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop;

      if (scrollTop > 100) {
        mainNav.classList.add('navbar-shrink');
      } else {
        mainNav.classList.remove('navbar-shrink');
      }
    };
    // collapse if page is not at the top
    collapseNavbar();
    // collapse when page is scrolled
    document.addEventListener('scroll', collapseNavbar);
  }
});
