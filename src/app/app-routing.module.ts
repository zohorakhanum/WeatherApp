import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
import { CityViewComponent } from './city-view/city-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/cityview', pathMatch: 'full' },
  { path: 'cityview', component: CityViewComponent },
  { path: 'city/:cityid', component: CityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
