/// <reference path='helper.ts' />

var Animals = (function () {
    function Animals() {
        this._animals = ['Karu', 'Kass', 'Hunt'];
        this._cacheDOM();
        //this._bindEvents();
        //wthis._render();
    }
    Animals.prototype._cacheDOM = function () {
        //this._template = Helper.getHTMLTemplate('animal.htm');
        //this._animalsModule = document.getElementById('animalsModule');
        //this._submitButton = this._animalsModule.getElementsByClassName('submitButton').item(0) as HTMLButtonElement;
        //this._nameInput = this._animalsModule.getElementsByTagName('input').item(0) as HTMLInputElement;
        //this._animalList = this._animalsModule.getElementsByTagName('ul').item(0) as HTMLUListElement;
    };
    return Animals;
}());
