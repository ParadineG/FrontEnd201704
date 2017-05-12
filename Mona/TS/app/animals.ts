console.log('animals.ts');
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
    private _template: string;
    private _animalsModule : HTMLElement;
    private _button : HTMLButtonElement;
    private _input  : HTMLInputElement;
    private _list   : HTMLUListElement;

    private _cacheDOM() {
        this._template = Helper.getHTMLTemplate("templates/animal-template.html");
        this._animalsModule = document.getElementById('animalsModule');
        this._button = this._animalsModule.getElementsByClassName('button').item(0) as HTMLButtonElement;
        this._input = this._animalsModule.getElementsByTagName('input').item(0);
        this._list = this._animalsModule.getElementsByTagName('ul').item(0);
    }
    private _bindEvents(){
        console.log(this._button);
        this._button.addEventListener('click', this.addAnimal.bind(this));
    }
    private _render(){
        let animalsHTML = "";
        this._animals.forEach(
            (value: string)=>{
                let animalHTML = Helper.parseHTMLString(this._template, '{{name}}', value);
                animalsHTML += animalHTML;
            }
        );
        this._list.innerHTML = animalsHTML;
    }
    showAnimals(){
        console.log(this._animals);
    }

    addAnimal(name){
        let animalName = (typeof name === 'string') ? name : this._input.value;
        console.log(animalName);
        this._animals.push(animalName);
        this._render();
    }

    removeAnimal(index = 0){
        let lastAnimal = this._animals.length-1;
        if(lastAnimal === index)
            this._animals.pop();
        else if(lastAnimal > index && index >= 0){
            this._animals.splice(index, 1);
        }
        this._render();
    }
}