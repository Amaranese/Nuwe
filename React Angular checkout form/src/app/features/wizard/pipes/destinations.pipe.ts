import { Pipe, PipeTransform } from '@angular/core';
import { Settings } from 'src/app/models/settings';

@Pipe({
    name: 'destinations'
})
export class DestinationsPipe implements PipeTransform {
    /**
     *
     */
    constructor(private settings: Settings) {}
    
    transform(values: string[]): string[] {
        return this.settings.data.destinations
            .filter(d => values.indexOf(d.value) > -1)
            .map(d => d.label);
    }
}
