import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlBuilderComponent } from './url-builder.component';

const routes: Routes = [
    {
        path:'**',
        component: UrlBuilderComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UrlBuilderRoutingModule { }
