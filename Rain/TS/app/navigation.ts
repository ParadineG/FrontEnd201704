/// <reference path="helper.ts"/>
interface NavLink{
    name: string,
    link: string
}
/**
 * name
 */
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

 private _cacheDOM(){
        this._template = Helper.getHTMLTemplate("templates/nav_template.htm");
        this._navModule = document.getElementById('mainMenu');
        this._navModule.outerHTML = this._template;   //kirjutame navModule Template-iga üle
        this._navModule = document.getElementById('mainMenu');  // muudab navModule lõplikult ära
        this._microTemplate = this._navModule.querySelector('script').innerText; // võtab teksti template seest
        this._list = this._navModule.getElementsByTagName('ul').item(0);        
    }
    private _bindEvents(){
        this._button.addEventListener('click', this.addAnimals.bind(this));
    }
    //jargnev otsib sisestusest nime ja lisa see olemasolevatele nimedele
    private _render(){
        let animalsHTML = "";
        this._animals.forEach(
            (value: string) => {
                let animalHTML = Helper.parseHTMLString(this._template, '{{name}}', value);
                animalsHTML += animalHTML;
            }
        );
        this._list.innerHTML = animalsHTML;



}