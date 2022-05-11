import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appRequired]',
})
export class RequiredDirective {
    @HostBinding('class.app-required')
    required: boolean = true;

    @Input()
    set appRequired(r: any){
        this.required = r === false ? false: true;
    }
}
