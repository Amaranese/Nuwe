import { Directive } from '@angular/core';
import { Settings } from 'src/app/models/settings';

@Directive({
    selector: '[appVehicleTypes]',
    exportAs: 'vehicleTypes'
})
export class VehicleTypesDirective {

    get items(){
        return this.settings.data.vehicles;
    }

    constructor(private settings: Settings) {
    }
}
