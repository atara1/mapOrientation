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
// import { locationNameReducer } from './store/reducer/locationName.reducer';


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
    StoreModule.forRoot({locationState: locationReducer, 
      // locationNameState: locationNameReducer 
    
    
    })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
