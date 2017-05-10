/// <reference path="helper.ts"/>
/// <reference path="navigation.ts"/>
/// <reference path="animals.ts"/> 
// ---see määrab ära et helper.ts peaks olema enne kui animals.ts
console.log("main.ts");
class App{
    constructor(){
        this._bindEvents();
        this._setup();
    }
    private _navLinks : NavLink[] = [{name:'Pealeht', link:'#home'},       //menüü sisu
                                        {name:'Galerii', link:'#gallery'},
                                        {name:'Üritus', link:'#event'}];
    private page : Page; 
    _bindEvents(){
        window.addEventListener('hashchange', this._urlChanged.bind(this));   // vajalik menüü muutusteks
    }
    _setup(){    //see redirectib lehe 0 positsiooni lingile ehk #home
        if(window.location.hash === '')
            window.location.hash = this._navLinks[0].link;
        let animals = new Animals();
/* animals.showAnimals();
animals.addAnimals('lehm');
animals.showAnimals();
animals.removeAnimals(1);
animals.showAnimals();
(async () => {
(await Helper.getHTMLTemplate('animal_template.htm'));
})();         ---- seda enam pole vaja */


    }



_urlChanged(e){
    this._navLinks.forEach(        
        (value: NavLink) =>{
            if(window.location.hash === value.link){
                //
                //
                console.log(value.link);
            }
        }
    );
}
}

let app = new App();    // See kutsub välja classi App ja paneb ta funktsiooni ning peidab sisu
