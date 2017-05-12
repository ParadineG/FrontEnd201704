var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Helper;
(function (Helper) {
    function getHTMLTemplate(file) {
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
    Helper.getHTMLTemplate = getHTMLTemplate;
    function parseHTML(target, mustache, content) {
        return target.replace(mustache, content);
    }
    Helper.parseHTML = parseHTML;
})(Helper || (Helper = {}));
/// <reference path='helper.ts' />
/**
* Animals
*/
var Animals = (function () {
    function Animals() {
        this._animals = ['Karu', 'Kass', 'Hunt'];
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    Animals.prototype._cacheDOM = function () {
        this._template = Helper.getHTMLTemplate('templates/animal.htm');
        this._animalsModule = document.getElementById('animalsModule');
        this._submitButton = this._animalsModule.getElementsByClassName('submitButton').item(0);
        this._nameInput = this._animalsModule.getElementsByTagName('input').item(0);
        this._animalList = this._animalsModule.getElementsByTagName('ul').item(0);
    };
    Animals.prototype._bindEvents = function () {
        this._submitButton.addEventListener('click', this.addAnimal.bind(this));
    };
    Animals.prototype._render = function () {
        var _this = this;
        var animalsHTML = "";
        this._animals.forEach(function (animalName) {
            var animalHTML = Helper.parseHTML(_this._template, '{{name}}', animalName);
            animalsHTML += animalHTML;
        });
        this._animalList.innerHTML = animalsHTML;
    };
    Animals.prototype.showAnimals = function () {
        console.log(this._animals);
    };
    Animals.prototype.addAnimal = function (type) {
        var animalType = (typeof type === 'string')
            ? type : this._nameInput.value;
        this._animals.push(animalType);
        this._render();
    };
    Animals.prototype.removeAnimal = function (index) {
        if (index < 0 || index >= this._animals.length) {
            console.error('Index ' + index + ' out of bounds');
        }
        else {
            this._animals.splice(index, 1);
        }
        this._render();
    };
    return Animals;
}());
var Navigation = (function () {
    function Navigation(navLinks) {
        this._navLinks = navLinks;
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    Navigation.prototype._cacheDOM = function () {
        this._template = Helper.getHTMLTemplate('templates/navigation.htm');
        this._navModule = document.getElementById('mainMenu');
        this._navModule.outerHTML = this._template;
        this._navModule = document.getElementById('mainMenu');
        this._microTemplate = this._navModule.querySelector('script').innerText;
        this._navList = this._navModule.getElementsByTagName('ul').item(0);
    };
    Navigation.prototype._bindEvents = function () {
        window.addEventListener('hashchange', this._urlChanged.bind(this));
    };
    Navigation.prototype._render = function () {
        var _this = this;
        var navigationHTML = "";
        this._navLinks.forEach(function (value) {
            var active = (window.location.hash === value.link ? ' active' : '');
            var elementHTML = Helper.parseHTML(_this._microTemplate, '{{name}}', value.name);
            elementHTML = Helper.parseHTML(elementHTML, '{{link}}', value.link);
            elementHTML = Helper.parseHTML(elementHTML, '{{active}}', active);
            navigationHTML += elementHTML;
        });
        this._navList.innerHTML = navigationHTML;
    };
    Navigation.prototype._urlChanged = function (e) {
        this._render();
    };
    return Navigation;
}());
/**
* Page
*/
var Page = (function () {
    function Page() {
        //this._cacheDOM();
        //this._bindEvents();
        //this._render();
    }
    Page.prototype._cacheDOM = function () {
    };
    Page.prototype._bindEvents = function () {
    };
    Page.prototype._render = function () {
    };
    return Page;
}());
/// <reference path='page.ts' />
/// <reference path='helper.ts' />
var Gallery = (function (_super) {
    __extends(Gallery, _super);
    function Gallery() {
        var _this = _super.call(this) || this;
        _this._pictures = _this._getPictures();
        _this._cacheDOM();
        _this._bindEvents();
        _this._render();
        return _this;
    }
    Gallery.prototype._cacheDOM = function () {
        this._template = Helper.getHTMLTemplate('templates/gallery.htm');
        this._picsModule = document.querySelector('main');
        this._picsModule.outerHTML = this._template;
        this._picsModule = document.getElementById('gallery');
        this._microTemplate = this._picsModule.querySelector('script').innerText;
        this._picsList = this._picsModule.querySelector('#images');
    };
    Gallery.prototype._bindEvents = function () {
    };
    Gallery.prototype._render = function () {
        var _this = this;
        var picsHTML = "";
        this._pictures.forEach(function (value) {
            var elementHTML = Helper.parseHTML(_this._microTemplate, '{{caption}}', value.title);
            elementHTML = Helper.parseHTML(elementHTML, '{{alternative}}', value.description);
            elementHTML = Helper.parseHTML(elementHTML, '{{source}}', 'images/' + value.link);
            picsHTML += elementHTML;
        });
        this._picsList.innerHTML = picsHTML;
    };
    Gallery.prototype._getPictures = function () {
        var pictures = [
            { title: 'Auto', description: 'Auto kirjeldus', link: 'Auto.png' },
            { title: 'Tevas', description: 'Taeva kirjeldus', link: 'Taevas.png' },
            { title: 'Tilgad', description: 'Tilkade kirjeldus', link: 'Tilgad.png' },
            { title: 'Tool', description: 'Tooli kirjeldus', link: 'Tool.png' },
            { title: 'Juust', description: 'Juustu kirjeldus', link: 'Juust.png' },
            { title: 'Tort', description: 'Tordi kirjeldus', link: 'Tort.png' }
        ];
        return pictures;
    };
    return Gallery;
}(Page));
/// <reference path='animals.ts' />
/// <reference path='navigation.ts' />
/// <reference path='page.ts' />
/// <reference path='gallery.ts' />
var App = (function () {
    function App() {
        this._navLinks = [
            { name: 'Pealeht', link: '#home' },
            { name: 'Galerii', link: '#gallery' },
            { name: 'Üritus', link: '#event' }
        ];
        this._bindEvents();
        this._setup();
    }
    App.prototype._bindEvents = function () {
        window.addEventListener('hashchange', this._urlChanged.bind(this));
    };
    App.prototype._setup = function () {
        if (window.location.hash === '') {
            window.location.hash = this._navLinks[0].link;
        }
        this._urlChanged();
        var navigation = new Navigation(this._navLinks);
        //let animals = new Animals();
    };
    App.prototype._urlChanged = function () {
        var _this = this;
        this._navLinks.forEach(function (value) {
            if (window.location.hash === value.link) {
                switch (value.link) {
                    case '#home':
                        _this._page = new Gallery();
                        break;
                    case '#gallery':
                        _this._page = new Gallery();
                        break;
                    case '#event':
                        _this._page = new Gallery();
                        break;
                    default:
                        break;
                }
            }
        });
    };
    return App;
}());
var app = new App();
//# sourceMappingURL=app.js.map