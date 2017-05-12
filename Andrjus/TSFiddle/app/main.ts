/// <reference path='animals.ts' />
/// <reference path='navigation.ts' />
/// <reference path='page.ts' />
/// <reference path='gallery.ts' />

class App {
  private _page : Page;
  private _navLinks : NavLink[] = [
    {name: 'Pealeht', link: '#home'},
    {name: 'Galerii', link: '#gallery'},
    {name: 'Üritus', link: '#event'}
  ]

  constructor() {
    this._bindEvents();
    this._setup();
  }

  private _bindEvents() {
    window.addEventListener('hashchange', this._urlChanged.bind(this));
  }

  private _setup() {
    if (window.location.hash === '') {
      window.location.hash = this._navLinks[0].link;
    }
    this._urlChanged();
    let navigation = new Navigation(this._navLinks);
    //let animals = new Animals();
  }

  private _urlChanged() {
    this._navLinks.forEach((value: NavLink) => {
      if (window.location.hash === value.link) {
        switch(value.link) {
            case '#home':
                this._page = new Gallery();
                break;
            case '#gallery':
                this._page = new Gallery();
                break;
            case '#event':
                this._page = new Gallery();
                break;
            default:
                break;
        }
      }
    });
  }

}

let app = new App();
