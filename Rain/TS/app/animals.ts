console.log("animals.ts");
/**
 * Animals
 */
class Animals {
    constructor() {
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    private _animals = ['Karu', 'Kass', 'Hunt'];
    private _template : string;
    private _animalsModule : HTMLElement;
    private _button : HTMLButtonElement;
    private _input : HTMLInputElement;
    private _list : HTMLDListElement;
    private _cacheDOM(){
        this._template = Helper.getHTMLTemplate("animal_template.htm");
        this._animalsModule = document.getElementById('animalsModule');
        this._button = this._animalsModule.getElementsByClassName('button').item(0) as HTMLButtonElement;
        this._input = this._animalsModule.getElementsByTagName('input').item(0);
        this._list = this._animalsModule.getElementsByTagName('ul').item(0);
        
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

    } //uuendab visuaalset elementi
    showAnimals(){
        
    }

    addAnimals(name){
        let animalName = (typeof name === 'string') ? name : this._input.value;
        this._animals.push(animalName); // push lisab viimasele elemendile
        this._render();
    }
    removeAnimals(index = 0){
        let lastAnimal = this._animals.length-1;
        if(lastAnimal === index)
         this._animals.pop();
         else if(lastAnimal > index && index >= 0 ){
             this._animals.splice(index, 1);
         }
         this._render();
    }
}
