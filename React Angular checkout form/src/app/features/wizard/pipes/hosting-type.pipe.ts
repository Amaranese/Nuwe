import { Pipe, PipeTransform } from '@angular/core';
import { Settings } from 'src/app/models/settings';

@Pipe({
  name: 'hostingType'
})
export class HostingTypePipe implements PipeTransform {

    /**
     *
     */
    constructor(private settings: Settings) {}
    
    transform(value: string): string {
        return this.settings.data.hostingTypes.find(o => o.value === value)?.label;
    }
}
