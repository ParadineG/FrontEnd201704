console.log("animals.ts");
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
        this._template = Helper.getHTMLTemplate("templates/animal_template.htm");
        this._animalsModule = document.getElementById('animalsModule');
        this._button = this._animalsModule.getElementsByClassName('button').item(0);
        this._input = this._animalsModule.getElementsByTagName('input').item(0);
        this._list = this._animalsModule.getElementsByTagName('ul').item(0);
    };
    Animals.prototype._bindEvents = function () {
        this._button.addEventListener('click', this.addAnimals.bind(this));
    };
    //jargnev otsib sisestusest nime ja lisa see olemasolevatele nimedele
    Animals.prototype._render = function () {
        var _this = this;
        var animalsHTML = "";
        this._animals.forEach(function (value) {
            var animalHTML = Helper.parseHTMLString(_this._template, '{{name}}', value);
            animalsHTML += animalHTML;
        });
        this._list.innerHTML = animalsHTML;
    }; //uuendab visuaalset elementi
    Animals.prototype.showAnimals = function () {
    };
    Animals.prototype.addAnimals = function (name) {
        var animalName = (typeof name === 'string') ? name : this._input.value;
        this._animals.push(animalName); // push lisab viimasele elemendile
        this._render();
    };
    Animals.prototype.removeAnimals = function (index) {
        if (index === void 0) { index = 0; }
        var lastAnimal = this._animals.length - 1;
        if (lastAnimal === index)
            this._animals.pop();
        else if (lastAnimal > index && index >= 0) {
            this._animals.splice(index, 1);
        }
        this._render();
    };
    return Animals;
}());
var Helper;
(function (Helper) {
    function getHTMLTemplate(file) {
        var templateHTML = 'fail';
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                templateHTML = this.responseText;
            }
        };
        xmlHttp.open('GET', file, false);
        xmlHttp.send();
        return templateHTML;
    }
    Helper.getHTMLTemplate = getHTMLTemplate;
    function parseHTMLString(target, mustache, content) {
        return target.replace(mustache, content);
    }
    Helper.parseHTMLString = parseHTMLString;
})(Helper || (Helper = {}));
/// <reference path="helper.ts"/>
/**
 * name
 */
var Navigation = (function () {
    function Navigation(navs) {
        this._navs = navs;
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    Navigation.prototype._cacheDOM = function () {
        this._template = Helper.getHTMLTemplate("templates/nav-template.htm");
        this._navModule = document.getElementById('mainMenu');
        this._navModule.outerHTML = this._template; //kirjutame navModule Template-iga üle
        this._navModule = document.getElementById('mainMenu'); // muudab navModule lõplikult ära
        this._microTemplate = this._navModule.querySelector('script').innerText; // võtab teksti template seest
        this._list = this._navModule.getElementsByTagName('ul').item(0);
    };
    Navigation.prototype._bindEvents = function () {
        window.addEventListener('hashchange', this._urlChanged.bind(this));
    };
    // otsib menüü kuvamiseks nimesid ja linke
    Navigation.prototype._render = function () {
        var _this = this;
        var navsLinks = '';
        this._navs.forEach(function (value) {
            var parsePass1 = Helper.parseHTMLString(_this._microTemplate, '{{name}}', value.name);
            var parsePass2 = Helper.parseHTMLString(parsePass1, '{{link}}', value.link);
            navsLinks += parsePass2;
        });
        this._list.innerHTML = navsLinks;
    };
    Navigation.prototype._urlChanged = function (e) {
        this._render();
    };
    return Navigation;
}());
/// <reference path="helper.ts"/>
/// <reference path="navigation.ts"/>
/// <reference path="animals.ts"/> 
// ---see määrab ära et helper.ts peaks olema enne kui animals.ts
console.log("main.ts");
var App = (function () {
    function App() {
        this._navLinks = [{ name: 'Pealeht', link: '#home' },
            { name: 'Galerii', link: '#gallery' },
            { name: 'Üritus', link: '#event' }];
        this._bindEvents();
        this._setup();
    }
    App.prototype._bindEvents = function () {
        window.addEventListener('hashchange', this._urlChanged.bind(this)); // vajalik menüü muutusteks
    };
    App.prototype._setup = function () {
        if (window.location.hash === '')
            window.location.hash = this._navLinks[0].link;
        var nav = new Navigation(this._navLinks);
        var animals = new Animals();
        /* animals.showAnimals();
        animals.addAnimals('lehm');
        animals.showAnimals();
        animals.removeAnimals(1);
        animals.showAnimals();
        (async () => {
        (await Helper.getHTMLTemplate('animal_template.htm'));
        })();         ---- seda enam pole vaja */
    };
    //saame vahetada lehekülgi
    App.prototype._urlChanged = function (e) {
        this._navLinks.forEach(function (value) {
            if (window.location.hash === value.link) {
                //if(value.link ===)
                //this.page = new Gallery);
                console.log(value.link);
            }
        });
    };
    return App;
}());
var app = new App(); // See kutsub välja classi App ja paneb ta funktsiooni ning peidab sisu
console.log("page.ts");
/**
 * Page
 */
var Page = (function () {
    function Page() {
    }
    Page.prototype._cacheDOM = function () {
    };
    Page.prototype._bindEvents = function () {
    };
    Page.prototype._render = function () {
    };
    return Page;
}());
//# sourceMappingURL=app.js.map