'use strict';

window.onscroll = function() {
  let prevScrollPos = window.pageYOffset;
  if (prevScrollPos < 300) {
    document.getElementById("header").style.top = "0px";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
};
