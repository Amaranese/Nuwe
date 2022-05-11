import { Pipe, PipeTransform } from '@angular/core';
import { Settings } from 'src/app/models/settings';

@Pipe({
  name: 'mealType'
})
export class MealTypePipe implements PipeTransform {

    /**
     *
     */
    constructor(private settings: Settings) {}
    
    transform(value: string): string {
        return this.settings.data.meals.find(o => o.value === value)?.label;
    }

}
