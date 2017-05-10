/// <reference path='helper.ts' /> 
interface NavLink{
    name: string,
    link: string
}
class Navigation {
    constructor(navs : NavLink[]) {
        this._navs = navs;
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    private _navs : NavLink[];
    private _template : string;
    private _microTemplate : string;
    private _navModule : HTMLElement;
    private _list : HTMLUListElement;

    private _cacheDOM() {
        this._template = Helper.getHTMLTemplate("templates/nav-template.html");
        this._navModule = document.getElementById('mainMenu');
        this._navModule.outerHTML = this._template;
        this._navModule = document.getElementById('mainMenu');
        this._microTemplate = this._navModule.querySelector('script').innerText;
        this._list = this._navModule.getElementsByTagName('ul').item(0);
    }
    private _bindEvents(){
        window.addEventListener('hashchange', this._urlChanged.bind(this));
    }
    private _render(){
        let navsLinks = '';
        this._navs.forEach(
            (value: NavLink)=>{
                let parsePass1 = Helper.parseHTMLString(this._microTemplate, '{{name}}', value.name);
                let parsePass2 = Helper.parseHTMLString(parsePass1, '{{link}}', value.link);
                let setActive = (window.location.hash === value.link) ? ' active' : '';
                let parsePass3 = Helper.parseHTMLString(parsePass2, '{{active}}', setActive);
                navsLinks += parsePass3;
            }
        );
        this._list.innerHTML = navsLinks;
    }
    _urlChanged(e){
        this._render();
    }
}