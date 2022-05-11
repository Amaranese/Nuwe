import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';
import { LabelledValue, Settings } from './models/settings';

@Injectable({
  providedIn: 'root'
})
export class InitService {

    static initFactory(appInit: InitService){
        return () => appInit.init();
    }

    constructor(
        @Inject(LOCALE_ID) private localeId:string,
        private http: HttpClient
    ) {}

    init(){
        return this.http.get(`./assets/config.json?locale=${this.localeId}`).pipe(
            tap(s => {
                this._settings = Object.assign(new Settings(), s);
            }),
            switchMap(() => this.http.get(`./assets/countries/${this.localeId}/countries.json`)),
            tap((cs:any[]) => {
                const western = ['be','fr','lu','nl','de','ch','ca'];
                this._settings.data.countries = cs
                    .map(c => ({value: c.alpha2, label: c.name}))
                    .sort((a, b) => this.sortCountries(a, b, western));
            })
        ).toPromise()
    }

    private _settings: Settings;
    get settings(){
        return this._settings;
    }

    private sortCountries(a: LabelledValue, b: LabelledValue, western: string[]){
        const iA = western.indexOf(a.value);
        const iB = western.indexOf(b.value);

        if(iA > -1 && iB === -1){
            return -1;
        }
        else if(iA > -1 && iB > -1){
            return iA < iB ? -1 : 1;
        }

        return a.label < b.label ? -1 : 1;
    }
}
