/// <reference path="animals.ts"/>
/// <reference path="helper.ts"/>
/// <reference path="page.ts"/>
interface Greeting{
    id: number,
     content: string
}

class Home extends Page {
        constructor() {
        super()  //kutsub välja Page construktori
        this._cacheDOM();
        this._bindEvents();
        this._render();
        
    }
    
        
    private _template : string;
    private _restAnswer : string;
    private _homeModule : Element;
    private _button : HTMLButtonElement;
    private _list : Element;

    protected _cacheDOM(){
             this._template = Helper.getHTMLTemplate("templates/home-template.htm");
        this._homeModule = document.querySelector('main');  // otsib üles index.html-is <main> ja asendab galeriiga
        this._homeModule.outerHTML = this._template;   //kirjutame Module Template-iga üle
        this._homeModule = document.getElementById('home');  // muudab picsModule lõplikult ära selles cache-s
        // this._restAnswer = Helper.getHTMLTemplate('http://rest-service.guides.spring.io/greeting'); // võtab ühe pildi template teiste template-de seest
        this._button = this._homeModule.querySelector('#refresh') as HTMLButtonElement;
        
        
        this._list = this._homeModule.querySelector('#restOutput');     //koostab listi mida kuvada
        let animals = new Animals();  //Peab olema reast 23 allpool - !!! Animals class ise juba kuvab, sellepärast kasutama 
        
        
                
    }
    protected _bindEvents(){
         this._button.addEventListener('click', this._render.bind(this));
                                     
    }
  
    protected _render(){
        this._restAnswer = Helper.getHTMLTemplate('http://rest-service.guides.spring.io/greeting');
        let restJSON = JSON.parse(this._restAnswer) as Greeting;   // loeb sisu JSON.parse teeb objektiks ja ütleb et loe interface formaadis
       this._list.innerHTML = 'ID: '+ restJSON.id + ' Sisu: ' + restJSON.content;
            }
         
 } 
   
