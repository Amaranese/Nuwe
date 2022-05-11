import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-preferences-form',
  templateUrl: './preferences-form.component.html',
})
export class PreferencesFormComponent {
    @Input()
    form: FormGroup;
}
