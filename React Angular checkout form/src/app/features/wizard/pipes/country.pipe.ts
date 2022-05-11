import { Pipe, PipeTransform } from '@angular/core';
import { Settings } from 'src/app/models/settings';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {

    /**
     *
     */
    constructor(private settings: Settings) {}

    transform(countryKey: string): string {
        return this.settings.data.countries.find(l => l.value === countryKey)?.label;
    }
}
