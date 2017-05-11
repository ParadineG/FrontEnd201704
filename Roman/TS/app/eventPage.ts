/// <reference path='helper.ts' /> 
/// <reference path='page.ts' />
type Joined = 'Yes' | 'Maybe' | 'No';

interface Participant{
    name: string,
    joined: Joined
}

class EventPage extends Page {
        constructor() {
        super()
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    private _participant : Participant[] = [{name:'Juku Salument', joined:'Yes'}, 
                                            {name:'Kalle Lomp', joined:'No'},
                                            {name:'Mari Tamm', joined:'Yes'}];
    private _template : string;
    private _microTemplate : string;
    private _peopleModule : Element;
    private _list : Element;
    
    protected _cacheDOM() {
        this._template = Helper.getHTMLTemplate("templates/event-template.html");
        this._peopleModule = document.querySelector('main');
        this._peopleModule.outerHTML = this._template;
        this._peopleModule = document.getElementById('event');
        this._microTemplate = this._peopleModule.querySelector('script').innerText;
        this._list = this._peopleModule.querySelector('ul');
    }
    protected _bindEvents(){

    }
    protected _render(){
        let people = '';
        this._participant.forEach(
            (value: Participant)=>{
                let parsePass1 = Helper.parseHTMLString(this._microTemplate, '{{name}}', value.name);
                let parsePass2 = Helper.parseHTMLString(parsePass1, '{{joined}}', value.joined);
                people += parsePass2;
            }
        );
        this._list.innerHTML = people;
    }
}