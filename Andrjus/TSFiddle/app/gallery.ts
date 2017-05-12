/// <reference path='page.ts' />
/// <reference path='helper.ts' />

interface Picture {
  title : string;
  description : string;
  link : string;
}

class Gallery extends Page {

  private _pictures : Picture[];
  private _template : string;
  private _microTemplate : string;
  private _picsModule : Element;
  private _picsList : Element;

  constructor() {
    super();
    this._pictures = [
      {title: 'Auto', description: 'Auto kirjeldus', link: 'Auto.png'},
      {title: 'Tevas', description: 'Taeva kirjeldus', link: 'Taevas.png'},
      {title: 'Tilgad', description: 'Tilkade kirjeldus', link: 'Tilgad.png'},
      {title: 'Tool', description: 'Tooli kirjeldus', link: 'Tool.png'},
      {title: 'Juust', description: 'Juustu kirjeldus', link: 'Juust.png'},
      {title: 'Tort', description: 'Tordi kirjeldus', link: 'Tort.png'}
    ];
    this._cacheDOM();
    this._bindEvents();
    this._render();
  }

  protected _cacheDOM() {
    this._template = Helper.getHTMLTemplate('templates/gallery.htm');
    this._picsModule = document.querySelector('main');
    this._picsModule.outerHTML = this._template;
    this._picsModule = document.getElementById('gallery');
    this._microTemplate = this._picsModule.querySelector('script').innerText;
    this._picsList = this._picsModule.querySelector('#images');
  }

  protected _bindEvents() {

  }

  protected _render() {
    let picsHTML = "";
    this._pictures.forEach((value : Picture) => {
      let elementHTML = Helper.parseHTML(this._microTemplate, '{{caption}}', value.title);
      elementHTML = Helper.parseHTML(elementHTML, '{{alternative}}', value.description);
      elementHTML = Helper.parseHTML(elementHTML, '{{source}}', 'images/' + value.link);
      picsHTML+= elementHTML;
    });
    this._picsList.innerHTML = picsHTML;
  }

  private _getPictures() {
    let pictures : Picture[] = [
      {title: 'Auto', description: 'Auto kirjeldus', link: 'Auto.png'},
      {title: 'Tevas', description: 'Taeva kirjeldus', link: 'Taevas.png'},
      {title: 'Tilgad', description: 'Tilkade kirjeldus', link: 'Tilgad.png'},
      {title: 'Tool', description: 'Tooli kirjeldus', link: 'Tool.png'},
      {title: 'Juust', description: 'Juustu kirjeldus', link: 'Juust.png'},
      {title: 'Tort', description: 'Tordi kirjeldus', link: 'Tort.png'}
    ];
    return pictures;
  }
}
