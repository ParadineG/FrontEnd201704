/// <reference path='helper.ts' /> 
/// <reference path='page.ts' />

interface Picture{
    title: string,
    description: string,
    link: string
}

class Gallery extends Page {
    constructor() {
        super()
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    private _pictures : Picture[] = [{title:'Auto', description:'Üks Auto', link:'Auto.jpg'}, 
                                    {title:'Taevas', description:'Üks Taevas', link:'Taevas.jpg'}, 
                                    {title:'Taevas2', description:'Üks Taevas2', link:'Taevas2.jpg'}, 
                                    {title:'Tilgad', description:'Üks Tilgad', link:'Tilgad.jpg'}, 
                                    {title:'Tilk', description:'Üks Tilk', link:'Tilk.jpg'}, 
                                    {title:'TuhmSulps', description:'Üks TuhmSulps', link:'TuhmSulps.jpg'}, 
                                    {title:'TuhmSulps2', description:'Üks TuhmSulps2', link:'TuhmSulps2.jpg'}, 
                                    {title:'VeeSulps', description:'Üks VeeSulps', link:'VeeSulps.jpg'}, 
                                    {title:'VeeSulps2', description:'Üks VeeSulps2', link:'VeeSulps2.jpg'}, 
                                    {title:'VeeT6us', description:'Üks VeeT6us', link:'VeeT6us.jpg'}];
    private _template : string;
    private _microTemplate : string;
    private _picsModule : Element;
    private _list : Element;
    
    protected _cacheDOM() {
        this._template = Helper.getHTMLTemplate("templates/gallery-template.html");
        this._picsModule = document.querySelector('main');
        this._picsModule.outerHTML = this._template;
        this._picsModule = document.getElementById('gallery');
        this._microTemplate = this._picsModule.querySelector('script').innerText;
        this._list = this._picsModule.querySelector('#images');
    }
    protected _bindEvents(){

    }
    protected _render(){
        let pics = '';
        this._pictures.forEach(
            (value: Picture)=>{
                let parsePass1 = Helper.parseHTMLString(this._microTemplate, '{{caption}}', value.title);
                let parsePass2 = Helper.parseHTMLString(parsePass1, '{{alternative}}', value.description);
                let parsePass3 = Helper.parseHTMLString(parsePass2, '{{source}}', 'images/'+value.link);
                pics += parsePass3;
            }
        );
        this._list.innerHTML = pics;
    }
}