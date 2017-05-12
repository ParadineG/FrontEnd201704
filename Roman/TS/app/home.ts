/// <reference path='animals.ts' /> 
/// <reference path='helper.ts' /> 
/// <reference path='page.ts' />
interface Greeting{
    id: number,
    content: string
}
class Home extends Page {
        constructor() {
        super()
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    private _template : string;
    private _restJSON : Greeting;
    private _homeModule : Element;
    private _button : HTMLButtonElement;
    private _list : Element;
    
    protected _cacheDOM() {
        this._template = Helper.getHTMLTemplate("templates/home-template.html");
        this._homeModule = document.querySelector('main');
        this._homeModule.outerHTML = this._template;
        this._homeModule = document.getElementById('home');
        this._button = this._homeModule.querySelector('#refresh') as HTMLButtonElement;
        this._list = this._homeModule.querySelector('#restOutput');
        let animals = new Animals();
        this._refresh();
    }
    protected _bindEvents(){
        this._button.addEventListener('click', this._refresh.bind(this));
    }
    protected _render(){
        
        this._list.innerHTML = 'Id: '+ this._restJSON.id + 
            ' Sisu: ' + this._restJSON.content;
    }
    private _refresh(){
        let restAnswer = Helper.getHTMLTemplate('http://rest-service.guides.spring.io/greeting');
        this._restJSON = JSON.parse(restAnswer) as Greeting;
        this._render();
    }
}