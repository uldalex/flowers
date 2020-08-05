/* global document */

const ready = require('../../js/utils/documentReady.js');

ready(function(){

  var burgers = document.querySelectorAll('.burger__btn');

  for (var i = 0; i < burgers.length; i++) {
    var burger = burgers[i];
    burger.addEventListener('click', showBurgerTarget);
  }

  function showBurgerTarget() {
    var targetId = this.getAttribute('data-target-id');
    var targetClassToggle = this.getAttribute('data-target-class-toggle');
    if (targetId && targetClassToggle) {
      this.classList.toggle('burger__btn--close');
      document.getElementById(targetId).classList.toggle(targetClassToggle);
    }
  }

});
