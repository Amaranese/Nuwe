import { Directive } from '@angular/core';
import { Settings } from 'src/app/models/settings';

@Directive({
  selector: '[appMealTypes]',
  exportAs: 'mealTypes'
})
export class MealTypesDirective {

    get items(){
        return this.settings.data.meals;
    }

    constructor(private settings: Settings) { }
}
