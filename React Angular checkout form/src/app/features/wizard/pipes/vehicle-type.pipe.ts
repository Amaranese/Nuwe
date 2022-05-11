import { Pipe, PipeTransform } from '@angular/core';
import { Settings } from 'src/app/models/settings';

@Pipe({
  name: 'vehicleType'
})
export class VehicleTypePipe implements PipeTransform {

    /**
     *
     */
    constructor(private settings: Settings) {}
    
    transform(value: string): string {
        return this.settings.data.vehicles.find(o => o.value === value)?.label;
    }

}
