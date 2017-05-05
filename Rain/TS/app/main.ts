/// <reference path="helper.ts"/>
/// <reference path="animals.ts"/> 
// ---see määrab ära et helper.ts peaks olema enne kui animals.ts
console.log("main.ts");

let animals = new Animals();
animals.showAnimals();
animals.addAnimals('lehm');
animals.showAnimals();
animals.removeAnimals(1);
animals.showAnimals();
(async () => {
console.log(await Helper.getHTMLTemplate('animal_template.htm'));
})();
