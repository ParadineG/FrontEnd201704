/// <reference path="helper.ts"/>
/// <reference path="animals.ts"/> 
// ---see määrab ära et helper.ts peaks olema enne kui animals.ts
console.log("main.ts");
class App{
    constructor(){
        this._setup();
    }
    private _navLinks : NavLink[] = [{name:'Pealeht', link:'#home'},       //menüü sisu
                                        {name:'Pealeht', link:'#home'},
                                        {name:'Pealeht', link:'#home'}];
    private page : Page; 
    _setup(){
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

}

let app = new App();
