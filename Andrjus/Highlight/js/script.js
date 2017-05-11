"use strict";
$(document).ready(function() {
    highlighter.init();
});

var highlighter = (function () {

  var insertTag = function(tag) {
    var selection = window.getSelection();
    if (selection.rangeCount !== 0 && !selection.isCollapsed) {
      var range = window.getSelection().getRangeAt(0);
      var selectionContents = range.extractContents();
      var element = document.createElement(tag);
      element.appendChild(selectionContents);
      range.insertNode(element);
      return true;
    } else {
      return false;
    }
  }

  var updateButtons = function() {
    var selection = window.getSelection();
    if (selection.rangeCount !== 0 && !selection.isCollapsed) {
      $('#ins-button,#del-button,#mark-button,#clear-button')
        .removeClass('disabled');
    } else {
      $('#ins-button,#del-button,#mark-button,#clear-button')
        .addClass('disabled');
    }
  };

  return {
    init: function () {
      $('#ins-button').click(function() {
        insertTag('ins');
      });

      $('#del-button').click(function() {
        insertTag('del');
      });

      $('#mark-button').click(function() {
        insertTag('mark');
      });

      $('#clear-button').click(function() {
        alert('TODO');
      });

      document.addEventListener("selectionchange", function() {
          updateButtons();
      });
      updateButtons();

    }
  };

})();
