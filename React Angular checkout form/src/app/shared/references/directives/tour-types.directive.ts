import { Directive } from '@angular/core';
import { Settings } from 'src/app/models/settings';

@Directive({
  selector: '[appTourTypes]',
  exportAs: 'tourTypes'
})
export class TourTypesDirective {

    get items(){
        return this.settings.data.types;
    }

    constructor(private settings: Settings) { }

}
