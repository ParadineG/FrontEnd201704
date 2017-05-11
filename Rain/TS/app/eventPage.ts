/// <reference path="helper.ts"/>
/// <reference path="page.ts"/>
type Joined = 'Yes' | 'Maybe' | 'No';

interface Participant{
        name: string,
        joined: Joined

}
/**
 * name
 */
class EventPage extends Page {
        constructor() {
        super()  //kutsub välja Page construktori
        this._cacheDOM();
        this._bindEvents();
        this._render();
        
    }
    private _participant : Participant[]  ;
        
    private _template : string;
    private _microTemplate : string;
    private _peopleModule : Element;
    private _list : Element;

    protected _cacheDOM(){
             this._template = Helper.getHTMLTemplate("templates/event-template.htm");
        this._peopleModule = document.querySelector('main');  // otsib üles index.html-is <main> ja asendab galeriiga
        this._peopleModule.outerHTML = this._template;   //kirjutame Module Template-iga üle
        this._peopleModule = document.getElementById('event');  // muudab picsModule lõplikult ära selles cache-s
        this._microTemplate = this._peopleModule.querySelector('script').innerText; // võtab ühe pildi template teiste template-de seest
        this._list = this._peopleModule.querySelector('ul');     //koostab listi mida kuvada
                
    }
    protected _bindEvents(){
                                      // siin võiks olla pildil klikates tegevus .. (nt ava uuel lehel)
    }
  
    protected _render(){
        this._participant = JSON.parse(localStorage.getItem('people'));
      let people = '';
        this._participant.forEach(
            (value: Participant) => {
                let parsePass1 = Helper.parseHTMLString(this._microTemplate, '{{name}}', value.name);
                let parsePass2 = Helper.parseHTMLString(parsePass1, '{{joined}}', value.joined);
                people += parsePass2;

            }
        );
        this._list.innerHTML = people;
            }
         
 } 
   