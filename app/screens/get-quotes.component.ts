import { Component } from '@angular/core';

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
  postcodeFrom: string;
  postcodeTo: string;

  lat: number = 52.1759431;
  lng: number = 17.6365497;
}