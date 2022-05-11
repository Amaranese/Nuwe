import { Directive } from '@angular/core';
import { Settings } from 'src/app/models/settings';

@Directive({
  selector: '[appDestinations]',
  exportAs: 'destinations'
})
export class DestinationsDirective {
    get items(){
        return this.settings.data.destinations;
    }

    constructor(private settings: Settings) { }
}
