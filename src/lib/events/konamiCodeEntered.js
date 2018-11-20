'use strict';

var triggers = [];
var enteredKeys = [];
var konami = "38,38,40,40,37,39,37,39,66,65";

window.addEventListener("keydown", function(e) {
  enteredKeys.push(e.keyCode);

  while (enteredKeys.length > 10) {
    enteredKeys.shift();
  }

  if (enteredKeys.join(',') === konami) {
    triggers.forEach(function(trigger) {
      trigger();
    });
  }
}, true);


module.exports = function(settings, trigger) {
  triggers.push(trigger);
};
