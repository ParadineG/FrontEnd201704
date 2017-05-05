console.log("animals.ts");
/**
 * Animals
 */
class Animals {
    constructor() {
        
    }
    private _animals = ['Karu', 'Kass', 'Hunt'];
    showAnimals(){
        console.log(this._animals);
    }

    addAnimals(name = 'Koer'){
        this._animals.push(name); // push lisab viimasele elemendile

    }
    removeAnimals(index = 0){
        let lastAnimal = this._animals.length-1;
        if(lastAnimal === index)
         this._animals.pop();
         else if(lastAnimal > index && index >= 0 ){
             this._animals.splice(index, 1);
         }
    }
}