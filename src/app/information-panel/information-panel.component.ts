import { Add, Delete } from './../store/actions/location.action';
import { AppState } from '../store/appState';
import { LocationInfo } from './../store/modules/locationInfo.module';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreModule, Store } from '@ngrx/store';
//import * as locationAction from '../store/actions/location.action';


@Component({
  selector: 'app-information-panel',
  templateUrl: './information-panel.component.html',
  styleUrls: ['./information-panel.component.css']
})
export class InformationPanelComponent implements OnInit {
  locationData: Observable<LocationInfo>;
@Output() name = new EventEmitter<string>();
userLocationName: string ="";

  constructor(private store: Store<AppState>) { 
    this.locationData = this.store.select("locationData");
  }

  ngOnInit(): void {
  }

  setLocation(){
    console.log(`the user location input:${this.userLocationName}`);
    this.name.emit(this.userLocationName);
  }

  // addLocation(locationToAdd: LocationInfo) {
  //   this.store.dispatch(new Add(locationToAdd));
  // }

  // deleteLocation() {
  //   this.store.dispatch(new Delete());
  // }


}
