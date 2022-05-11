import { Pipe, PipeTransform } from '@angular/core';
import { Settings } from 'src/app/models/settings';

@Pipe({
  name: 'tourType'
})
export class TourTypePipe implements PipeTransform {

    /**
     *
     */
    constructor(private settings: Settings) {}
    
    transform(value: string): string {
        return this.settings.data.types.find(o => o.value === value)?.label;
    }
}
