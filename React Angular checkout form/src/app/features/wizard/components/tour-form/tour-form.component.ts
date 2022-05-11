import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tour-form',
  templateUrl: './tour-form.component.html',
})
export class TourFormComponent {

    @Input()
    form: FormGroup;

    @Input()
    isMobile: boolean = true;
}
