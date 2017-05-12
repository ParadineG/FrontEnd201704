interface NavLink {
  name : string;
  link : string;
}

class Navigation {
  private _navLinks : NavLink[];
  private _template : string;
  private _microTemplate : string;
  private _navModule : HTMLElement;
  private _navList : HTMLUListElement;

  constructor(navLinks : NavLink[]) {
    this._navLinks = navLinks;
    this._cacheDOM();
    this._bindEvents();
    this._render();
  }

  private _cacheDOM() {
    this._template = Helper.getHTMLTemplate('templates/navigation.htm');
    this._navModule = document.getElementById('mainMenu');
    this._navModule.outerHTML = this._template;
    this._navModule = document.getElementById('mainMenu');
    this._microTemplate = this._navModule.querySelector('script').innerText;
    this._navList = this._navModule.getElementsByTagName('ul').item(0) as HTMLUListElement;
  }

  private _bindEvents() {
    window.addEventListener('hashchange', this._urlChanged.bind(this));
  }

  private _render() {
    let navigationHTML = "";
    this._navLinks.forEach((value : NavLink) => {
      let active = (window.location.hash === value.link ? ' active' : '')
      let elementHTML = Helper.parseHTML(this._microTemplate, '{{name}}', value.name);
      elementHTML = Helper.parseHTML(elementHTML, '{{link}}', value.link);
      elementHTML = Helper.parseHTML(elementHTML, '{{active}}', active);
      navigationHTML+= elementHTML;
    });
    this._navList.innerHTML = navigationHTML;
  }

  private _urlChanged(e) {
    this._render();
  }
}
