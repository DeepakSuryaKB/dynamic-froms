import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { DynamicFormComponent } from './pages/dynamic-form/dynamic-form.component';
import { FormsDataComponent } from './pages/forms-data/forms-data.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'build/form', component: FormBuilderComponent },
  { path: 'fillfrom/:name', component: DynamicFormComponent },
  { path: 'fromdata/:name', component: FormsDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
