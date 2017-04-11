import { Component } from '@angular/core';
import { Coordinates } from '../Coordinates.class';

@Component({
  selector: 'get-quote',
  templateUrl: 'app/screens/get-quotes.component.html',
  styles: [`
    agm-map {
       height: 300px;
     }
  `]
})

export class GetQuotesComponent {
  coordinates: Coordinates[] = [new Coordinates(0,0), new Coordinates(0,0)];

  setCoordinates(index: number, coords: Coordinates): void{
    this.coordinates[index] = coords;
  }
}