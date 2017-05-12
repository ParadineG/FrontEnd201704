import { Component } from '@angular/core';

export interface Loomad {
  id: number;
  name: string;
}
const LOOMAD: Loomad[] = [
  {id: 1, name: 'Kass'},
  {id: 2, name: 'Koer'},
  {id: 3, name: 'Karu'}
];

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <h2>Head aega {{name}} {{version}}!</h2>
  <ul class="loomad">
    <li *ngFor="let animal of animals"
      [class.selected]="animal === selectedAnimal"
      (click)="onSelect(animal)">
        <span class="badge">{{animal.id}}</span> {{animal.name}}
    </li>
  </ul>
  <div *ngIf="selectedAnimal">
    <h2>{{selectedAnimal.name}} details!</h2>
    <div><label>id: </label>{{selectedAnimal.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="selectedAnimal.name" placeholder="name"/>
    </div>
  </div>
  `,
  styles: [`.selected{
    background-color: yellow;
  }`]
})
export class AppComponent {
  name = 'Angular';
  version = '4';
  // animal: Loomad = {id: 1, name: 'Kass'};
  animals = LOOMAD;
  selectedAnimal: Loomad;
  onSelect(animal: Loomad): void {
    this.selectedAnimal = animal;
  }
}
