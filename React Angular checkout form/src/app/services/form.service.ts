import { Injectable } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { map, tap } from 'rxjs/operators';
import { CAMPING, GUIDED_TOUR, NO_SUV_HOSTING, SUV } from '../constants';
import { Settings } from '../models/settings';

@Injectable()
export class FormService {
    readonly form: FormGroup;

    constructor(private fb: FormBuilder, private settings: Settings) {
        this.form = this.createForm();
    }

    private createForm() {
        return this.fb.group({
            tour: this.createTourForm(),
            contact: this.createContactForm(),
            preferences: this.createPreferencesForm(),
        });
    }

    private createTourForm() {
        const tourType = new FormControl(null, Validators.required);
        const attendants = new FormControl(
            { value: null, disabled: true },
            Validators.required
        );
        const isDuration = new FormControl(null, Validators.required);
        const startDate = new FormControl(null, Validators.required);
        const endDate = new FormControl(
            { value: null, disabled: true },
            Validators.required
        );
        const duration = new FormControl({ value: null, disabled: true }, [
            Validators.required,
            Validators.min(1),
        ]);
        const destinations = new FormControl(null, Validators.required);
        const safariExperiments = new FormControl(null);

        tourType.valueChanges
            .pipe(tap((v) => this.tourTypeChange(v, attendants)))
            .subscribe();

        startDate.valueChanges
            .pipe(
                tap((d: Date) => {
                    if (endDate.value && endDate.value < d) {
                        endDate.reset(null);
                    }
                })
            )
            .subscribe();

        isDuration.valueChanges
            .pipe(
                tap((v) => {
                    if (v) {
                        duration.enable();
                        this.disableAndReset(endDate);
                    } else {
                        endDate.enable();
                        this.disableAndReset(duration);
                    }
                })
            )
            .subscribe();

        return this.fb.group({
            destinations,
            safariExperiments,
            tourType,
            attendants,
            isDuration,
            startDate,
            endDate,
            duration,
        });
    }

    private createContactForm() {
        const form = this.fb.group({
            title: [null, Validators.required],
            firstName: [null, Validators.required],
            lastName: [null, Validators.required],
            country: [
                null,
                [
                    Validators.required,
                    this.validateCountry(this.settings.data.countries),
                ],
            ],
            mobile: [null, Validators.required],
            email: [null, [Validators.email, Validators.required]],
            adultNumber: [1, Validators.required],
            childrenNumber: [0, Validators.required],
            has4YearsKids: [
                { value: false, disabled: true },
                Validators.required,
            ],
        });

        const has4YearsKids = form.get('has4YearsKids');

        form.get('childrenNumber')
            ?.valueChanges.pipe(
                map((v) => (isNaN(+v) || v > 0 ? true : false)),
                tap((e) =>
                    e ? has4YearsKids?.enable() : has4YearsKids?.disable()
                )
            )
            .subscribe();

        return form;
    }

    private createPreferencesForm() {
        const hostingType = new FormControl(null, Validators.required);
        const mealType = new FormControl(
            { value: null, disabled: true },
            Validators.required
        );
        const vehicleType = new FormControl(null, Validators.required);

        hostingType.valueChanges
            .pipe(tap((v) => this.hostingTypeChange(v, mealType, vehicleType)))
            .subscribe();

        return this.fb.group({
            hostingType,
            mealType,
            vehicleType,
            travelDescription: [null],
        });
    }

    private validateCountry(countryList: any[]) {
        return (control: AbstractControl) =>
            countryList.find(e => e.value === control.value) !== null
                ? null
                : { country: true };
    }

    /**
     *
     * @param value
     * @param attendants
     */
    private tourTypeChange(value: string, attendants: FormControl) {
        if (value === GUIDED_TOUR) {
            attendants.enable();
            attendants.setValue(['guide']);
        } else {
            attendants.disable();
            attendants.setValue(null);
        }
    }

    /**
     *
     * @param value
     * @param mealType
     */
    private hostingTypeChange(
        value: string,
        mealType: FormControl,
        vehicleType: FormControl
    ) {
        if (value === CAMPING) {
            mealType.disable();
            mealType.setValue(null);
        } else {
            mealType.enable();
        }

        if (NO_SUV_HOSTING.includes(value) && vehicleType.value === SUV) {
            vehicleType.setValue(null);
        }
    }

    private disableAndReset(control: AbstractControl) {
        control.disable();
        control.reset(null, { emitEvent: false });
    }
}
