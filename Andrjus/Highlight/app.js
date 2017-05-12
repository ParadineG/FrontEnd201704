var Helper;
(function (Helper) {
    function getHTML(file) {
        var partialHTML = '';
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    partialHTML = this.responseText;
                }
                else {
                    console.error('Request failed for: ' + file);
                }
            }
        };
        request.open('GET', file, false);
        request.send();
        return partialHTML;
    }
    Helper.getHTML = getHTML;
    function parseHTML(target, mustache, content) {
        return target.replace(mustache, content);
    }
    Helper.parseHTML = parseHTML;
})(Helper || (Helper = {}));
/// <reference path='helper.ts' />
var Highlighter = (function () {
    function Highlighter(url) {
        this._contentDOM = Helper.getHTML(url);
        $('#comment-content').html(this._contentDOM);
    }
    Highlighter.prototype.init = function () {
        $('#ins-button').click(function () {
            this._insertTag('ins');
        }.bind(this));
        $('#del-button').click(function () {
            this._insertTag('del');
        }.bind(this));
        $('#mark-button').click(function () {
            this._insertTag('mark');
        }.bind(this));
        $('#clear-button').click(function () {
            this._removeTag();
        }.bind(this));
        document.addEventListener("selectionchange", this._updateButtons);
        this._updateButtons();
    };
    Highlighter.prototype._insertTag = function (tag) {
        var selection = window.getSelection();
        if (selection.rangeCount !== 0 && !selection.isCollapsed) {
            var range = window.getSelection().getRangeAt(0);
            var selectionContents = range.extractContents();
            var element = document.createElement(tag);
            element.appendChild(selectionContents);
            range.insertNode(element);
            return true;
        }
        else {
            return false;
        }
    };
    Highlighter.prototype._removeTag = function () {
        var selection = window.getSelection();
        if (selection.rangeCount !== 0 && !selection.isCollapsed) {
            var range = window.getSelection().getRangeAt(0);
            console.log(range.commonAncestorContainer);
            var selectionContents = range.extractContents();
            range.insertNode(document.createTextNode(selectionContents.textContent));
            //node.parentElement.removeChild(node);
            return true;
        }
        else {
            return false;
        }
    };
    Highlighter.prototype._updateButtons = function () {
        var selection = window.getSelection();
        if (selection.rangeCount !== 0 && !selection.isCollapsed) {
            console.log("00--" + window.getSelection().getRangeAt(0).startContainer.nodeName + ": " + window.getSelection().getRangeAt(0).startOffset);
            $('#ins-button,#del-button,#mark-button,#clear-button')
                .removeClass('disabled');
        }
        else {
            $('#ins-button,#del-button,#mark-button,#clear-button')
                .addClass('disabled');
        }
    };
    return Highlighter;
}());
/// <reference path='highlighter.ts' />
$(document).ready(function () {
    var highlighter = new Highlighter('JavaScript - Wikipedia.htm');
    highlighter.init();
});
//# sourceMappingURL=app.js.map