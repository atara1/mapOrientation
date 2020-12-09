import { LocationData } from './../../assets/locationData';
import { Add, Delete } from './../store/actions/location.action';
import { AppState } from '../store/appState';
import { LocationInfo } from './../store/modules/locationInfo.module';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MapService } from '../service/map.service';
import { Update } from '../store/actions/searchLocation.action';

@Component({
  selector: 'app-information-panel',
  templateUrl: './information-panel.component.html',
  styleUrls: ['./information-panel.component.css']
})
export class InformationPanelComponent implements OnInit {
  locationData: Observable<LocationInfo[]>;
  searchLocationData: Observable<string>;
  userLocationName: string = "";

  constructor(private store: Store<AppState>, private map: MapService) {
    this.locationData = this.store.select("locationData");
  }

  ngOnInit(): void {
  }

  searchLocation(): void {
    this.map.search(this.userLocationName)
      .then(data => {
        let lngLatData: LocationData = data;
        this.store.dispatch(new Update(lngLatData));
      });
  }

  addAnnontation(): void {
    this.map.search(this.userLocationName)
      .then(data => {
        let lngLatData: LocationData = data;
        if (lngLatData?.center) {
          this.store.dispatch(new Add(lngLatData));
        }
      });
  }

  userSelected(item: LocationInfo): void {
    this.store.dispatch(new Update(item));
  }

  deleteLocation(item: LocationInfo): void {
    this.store.dispatch(new Delete(item));
    // console.log(`The ${item.text} was deleted.`);
  }

}
