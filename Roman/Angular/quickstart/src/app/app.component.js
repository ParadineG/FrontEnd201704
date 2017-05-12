"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var LOOMAD = [
    { id: 1, name: 'Kass' },
    { id: 2, name: 'Koer' },
    { id: 3, name: 'Karu' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.version = '4';
        // animal: Loomad = {id: 1, name: 'Kass'};
        this.animals = LOOMAD;
    }
    AppComponent.prototype.onSelect = function (animal) {
        this.selectedAnimal = animal;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>Hello {{name}}</h1>\n  <h2>Head aega {{name}} {{version}}!</h2>\n  <ul class=\"loomad\">\n    <li *ngFor=\"let animal of animals\"\n      [class.selected]=\"animal === selectedAnimal\"\n      (click)=\"onSelect(animal)\">\n        <span class=\"badge\">{{animal.id}}</span> {{animal.name}}\n    </li>\n  </ul>\n  <div *ngIf=\"selectedAnimal\">\n    <h2>{{selectedAnimal.name}} details!</h2>\n    <div><label>id: </label>{{selectedAnimal.id}}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"selectedAnimal.name\" placeholder=\"name\"/>\n    </div>\n  </div>\n  ",
        styles: [".selected{\n    background-color: yellow;\n  }"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map