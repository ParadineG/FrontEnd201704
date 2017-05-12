/// <reference path='helper.ts' />

/**
* Animals
*/
class Animals {
  private _template : string;
  private _animals = ['Karu', 'Kass', 'Hunt'];
  private _animalsModule : HTMLElement;
  private _nameInput : HTMLInputElement;
  private _submitButton : HTMLButtonElement;
  private _animalList:  HTMLUListElement;

  constructor() {
    this._cacheDOM();
    this._bindEvents();
    this._render();
  }

  private _cacheDOM() {
    this._template = Helper.getHTMLTemplate('templates/animal.htm');
    this._animalsModule = document.getElementById('animalsModule');
    this._submitButton = this._animalsModule.getElementsByClassName('submitButton').item(0) as HTMLButtonElement;
    this._nameInput = this._animalsModule.getElementsByTagName('input').item(0) as HTMLInputElement;
    this._animalList = this._animalsModule.getElementsByTagName('ul').item(0) as HTMLUListElement;
  }

  private _bindEvents() {
    this._submitButton.addEventListener('click', this.addAnimal.bind(this))
  }

  private _render() {
    let animalsHTML = "";
    this._animals.forEach(animalName => {
      let animalHTML = Helper.parseHTML(this._template, '{{name}}', animalName);
      animalsHTML+= animalHTML;
    });
    this._animalList.innerHTML = animalsHTML;
  }

  showAnimals() {
    console.log(this._animals);
  }

  addAnimal(type) {
    let animalType = (typeof type === 'string')
      ? type : this._nameInput.value;
    this._animals.push(animalType);
    this._render();
  }

  removeAnimal(index : number) {
    if (index < 0 || index >= this._animals.length) {
      console.error('Index ' + index + ' out of bounds')
    } else {
      this._animals.splice(index, 1);
    }
    this._render();
  }
}
