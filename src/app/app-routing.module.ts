import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SearchDataComponent } from './search-data/search-data.component';

const routes: Routes = [
  {path:"",redirectTo:"registration",pathMatch:"full"},
  {path:"registration",component:RegistrationComponent},
  {path:"search-data",component:SearchDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
