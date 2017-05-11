/// <reference path="helper.ts"/>
/// <reference path="navigation.ts"/>
/// <reference path="gallery.ts"/>
/// <reference path="animals.ts"/> 
/// <reference path="eventPage.ts"/> 
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
        let nav = new Navigation(this._navLinks);
        this._urlChanged();
        this._checkParams();
        Helper.onParameterChange(()=>{
                alert('Tere');
        });
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


//saame vahetada lehekülgi
_urlChanged(){
     Helper.formatEmails('at-email', '(ät)')    //vahetab välja (ät) ilusa @ vastu, inimesed näevad ilusti kui robotid vana (ät)
    this._navLinks.forEach(        
        (value: NavLink) =>{
            if(window.location.hash === value.link){
                if(value.link === this._navLinks[0].link)
                this.page = new Gallery();//
                else if(value.link === this._navLinks[1].link)
                 this.page = new Gallery();
                else if(value.link === this._navLinks[2].link)
                this.page = new EventPage();


                console.log(value.link);
            }
        }
    );
}
_checkParams(){
    let name = Helper.getParameterByName('name');
    if(name){
        alert(name);
    }

}
}

let app = new App();    // See kutsub välja classi App ja paneb ta funktsiooni ning peidab sisu
