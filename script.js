import ScrollOut from "scroll-out";

ScrollOut({
  onShown: function(el) {
    // use the web animation API
    el.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
  },
  onHidden: function(el) {
    // hide the element initially
    el.style.opacity = 0;
  }
});



// Offcanvas (Side Navbar)

const offcanvasElementList = document.querySelectorAll('.offcanvas')
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))