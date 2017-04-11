import { Component, Output, EventEmitter } from '@angular/core';
import { Coordinates } from '../Coordinates.class';
import { AppService } from "../app.service";

@Component({
  selector: 'postcode-lookup',
  templateUrl: 'app/components/postcode-lookup-input.component.html'
})
export class PostCodeLookupComponent {
  postcode: string;
  @Output() postcodeChange = new EventEmitter();

  constructor(private appService: AppService) { }

  lookup(){
    this.appService.postcode_lookup(this.postcode).subscribe((data) => {
      if(data.status === 'OK'){
        this.postcodeChange.next(new Coordinates(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng));
      }
    });
  }
}