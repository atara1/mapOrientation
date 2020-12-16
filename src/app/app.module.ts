import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationPanelComponent } from './information-panel/information-panel.component';
import { LocationOnMapComponent } from './location-on-map/location-on-map.component';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { locationReducer } from './store/reducer/location.reducer';
import { FlexLayoutModule } from '@angular/flex-layout';
import { searchLocationReducer } from './store/reducer/searchLocation.reducer';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    InformationPanelComponent,
    LocationOnMapComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({
      locationData: locationReducer,
      searchLocation: searchLocationReducer
    }),
    FlexLayoutModule,
    NgxMapboxGLModule.withConfig({ accessToken: environment.mapbox.accessToken })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
