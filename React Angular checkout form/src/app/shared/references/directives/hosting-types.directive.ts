import { Directive } from '@angular/core';
import { Settings } from 'src/app/models/settings';

@Directive({
  selector: '[appHostingTypes]',
  exportAs: 'hostingTypes'
})
export class HostingTypesDirective {

    get items(){
        return this.settings.data.hostingTypes;
    }

    constructor(private settings: Settings) { }

}
