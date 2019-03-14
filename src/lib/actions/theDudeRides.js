'use strict';

module.exports = function(settings) {
  // TODO Perform some action.
  var dudeDiv = document.createElement('div');
  dudeDiv.id = 'theDude';
  dudeDiv.style.cssText = 'display: none; opacity: 0; transition: 2s';
  
  var dudeImg = document.createElement('img');
  dudeImg.src = 'http://launchdemo.co/img/theDude.gif';
  dudeImg.alt = 'thedude';
  dudeDiv.appendChild(dudeImg);

  var refNode = document.body.firstChild;
  refNode.parentNode.insertBefore(dudeDiv, refNode);

  var dudeRides = document.getElementById('theDude');
  dudeRides.style.display = 'block';
  requestAnimationFrame(function() {
    dudeRides.style.opacity = 1;
  });
  window.setTimeout(function() {
    requestAnimationFrame(function() {
      dudeRides.style.opacity = 0
    });
    dudeRides.style.display = 'none';
  }, 5000);
};
