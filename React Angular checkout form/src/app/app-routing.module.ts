import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path:'url-builder',
        loadChildren: () => import('./features/url-builder/url-builder.module').then(m => m.UrlBuilderModule)
    },
    {
        path:'**',
        loadChildren: () => import('./features/wizard/wizard.module').then((m) => m.WizardModule),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
