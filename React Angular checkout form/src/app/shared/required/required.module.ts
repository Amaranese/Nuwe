import { NgModule } from "@angular/core";
import { RequiredDirective } from "./required.directive";

@NgModule({
    declarations:[RequiredDirective],
    exports:[RequiredDirective]
})
export class RequiredModule{}