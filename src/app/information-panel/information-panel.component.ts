import { LocationData } from './../../assets/locationData';
import { Add, Delete } from './../store/actions/location.action';
import { AppState } from '../store/appState';
import { LocationInfo } from './../store/modules/locationInfo.module';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreModule, Store } from '@ngrx/store';
import { MapService } from '../service/map.service';
import { Update } from '../store/actions/searchLocation.action';
//import * as locationAction from '../store/actions/location.action';


@Component({
  selector: 'app-information-panel',
  templateUrl: './information-panel.component.html',
  styleUrls: ['./information-panel.component.css']
})
export class InformationPanelComponent implements OnInit {
  locationData: Observable<LocationInfo[]>;
searchLocationData: Observable<string>;

  userLocationName: string = "";
  @Output() name = new EventEmitter<string>();
  @Output() addLocation = new EventEmitter<string>();
 

  constructor(private store: Store<AppState>, private map: MapService) {
    this.locationData = this.store.select("locationData");
//this.searchLocationData = this.store.select("searchLocation");

    // this.locationData.subscribe( data =>{
    //   console.log(data); //locationinfo[]
    // })
  }

  ngOnInit(): void {
  }

  searchLocation() {
    console.log(`The user location input: ${this.userLocationName}`);
    this.map.search(this.userLocationName).then(data => {
      let lngLatData: LocationData = data;
      // if (lngLatData) {
      //   this.map.buildMap(lngLatData?.center[0], lngLatData?.center[1]);   
      // }     
        this.store.dispatch(new Update(lngLatData));
    });
  
  }

  addAnnontation() {
    debugger
    this.map.search(this.userLocationName).then(data => {
      let lngLatData: LocationData = data;
      if (lngLatData?.center) {
        this.store.dispatch(new Add(lngLatData));
      }
    });
  }

  userSelected(item){
    console.log(`User selectd ${item.text}`)
    this.map.buildMap(item.center[0], item.center[1]);
  }

  deleteLocation(item){

this.store.dispatch(new Delete(item));
console.log(this.store);
console.log(`The ${item.text} was deleted.`);
  }



}
