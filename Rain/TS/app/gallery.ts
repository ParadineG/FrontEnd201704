/// <reference path="helper.ts"/>
/// <reference path="page.ts"/>
interface Picture{
    title: string,
    description: string,
    link: string
}


/**
 * Gallery extends Page
 */
class Gallery extends Page {
    constructor() {
        super()  //kutsub välja Page construktori
        this._cacheDOM();
        this._bindEvents();
        this._render();
        
    }
    private _pictures : Picture[] = [{title: 'Auto', description: 'Üks auto', link: 'Auto.jpg'},
            {title: 'Taevas', description: 'Üks Taevas', link: 'Taevas.jpg'},
            {title: 'Taevas2', description: 'Üks Taevas2', link: 'Taevas2.jpg'},
            {title: 'Tilgad', description: 'Tilgad', link: 'Tilgad.jpg'},
            {title: 'Tilk', description: 'Üks Tilk', link: 'Tilk.jpg'} ];
        
    private _template : string;
    private _microTemplate : string;
    private _picsModule : Element;
    private _list : Element;

    protected _cacheDOM(){
             this._template = Helper.getHTMLTemplate("templates/gallery-template.htm");
        this._picsModule = document.querySelector('main');  // otsib üles index.html-is <main> ja asendab galeriiga
        this._picsModule.outerHTML = this._template;   //kirjutame Module Template-iga üle
        this._picsModule = document.getElementById('gallery');  // muudab picsModule lõplikult ära selles cache-s
        this._microTemplate = this._picsModule.querySelector('script').innerText; // võtab ühe pildi template teiste template-de seest
        this._list = this._picsModule.querySelector('#images');     //koostab listi mida kuvada
                
    }
    protected _bindEvents(){
                                      // siin võiks olla pildil klikates tegevus .. (nt ava uuel lehel)
    }
  
    protected _render(){
      let pics = '';
        this._pictures.forEach(
            (value: Picture) => {
                let parsePass1 = Helper.parseHTMLString(this._microTemplate, '{{caption}}', value.title);
                let parsePass2 = Helper.parseHTMLString(parsePass1, '{{alternative}}', value.description);
                let setActive = (window.location.hash === value.link) ? ' active' : '';
                let parsePass3 = Helper.parseHTMLString(parsePass2, '{{source}}','images/'+ value.link);
               pics += parsePass3;

            }
        );
        this._list.innerHTML = pics;
            }
         
 } 
   