import { LocationOnMapComponent } from './location-on-map/location-on-map.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'locationOnMap',
    component: LocationOnMapComponent
  },
  {
    path: '',
    redirectTo: '/locationOnMap',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
