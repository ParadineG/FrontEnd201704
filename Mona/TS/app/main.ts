/// <reference path ='helper.ts' />
/// <reference path ='animals.ts' />
console.log('main.ts');

let animals = new Animals();
animals.showAnimals();
animals.addAnimal('Lehm');
animals.showAnimals();
animals.removeAnimal(3);
animals.showAnimals();
 (async () => {
    console.log (await Helper.getHTMLTemplate('animal-template.htm') );
} )();
