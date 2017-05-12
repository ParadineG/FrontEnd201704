/// <reference path='helper.ts' />

class Highlighter {
  private _contentDOM : string;

  constructor(url : string) {
    this._contentDOM = Helper.getHTML(url);
    $('#comment-content').html(this._contentDOM);
  }

  public init() {
    $('#ins-button').click(function() {
      this._insertTag('ins');
    }.bind(this));

    $('#del-button').click(function() {
      this._insertTag('del');
    }.bind(this));

    $('#mark-button').click(function() {
      this._insertTag('mark');
    }.bind(this));

    $('#clear-button').click(function() {
      this._removeTag();
    }.bind(this));

    document.addEventListener("selectionchange", this._updateButtons);
    this._updateButtons();
  }

  private _insertTag(tag : string) {
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

  private _removeTag() {
    var selection = window.getSelection();
    if (selection.rangeCount !== 0 && !selection.isCollapsed) {
      var range = window.getSelection().getRangeAt(0);
      console.log(range.commonAncestorContainer);
      var selectionContents = range.extractContents();
      range.insertNode(document.createTextNode(selectionContents.textContent));
      //node.parentElement.removeChild(node);
      return true;
    } else {
      return false;
    }
  }

  private _updateButtons() {
    var selection = window.getSelection();
    if (selection.rangeCount !== 0 && !selection.isCollapsed) {
      console.log("00--" + window.getSelection().getRangeAt(0).startContainer.nodeName + ": " + window.getSelection().getRangeAt(0).startOffset);
      $('#ins-button,#del-button,#mark-button,#clear-button')
        .removeClass('disabled');
    } else {
      $('#ins-button,#del-button,#mark-button,#clear-button')
        .addClass('disabled');
    }
  }
}
