import { Update } from './../store/actions/searchLocation.action';
import { LocationData } from './../../assets/locationData';
import { AppState } from '../store/appState';
import { LocationInfo } from '../store/modles/locationInfo.modle';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { MapService } from '../service/map.service';
import { first } from 'rxjs/operators';
import * as locationActions from './../store/actions/location.action';
import * as searchLocationActions from '../store/actions/searchLocation.action';

@Component({
  selector: 'app-information-panel',
  templateUrl: './information-panel.component.html',
  styleUrls: ['./information-panel.component.scss']
})
export class InformationPanelComponent implements OnInit {
  locationData$: Observable<LocationInfo[]>;
  userLocationName = '';
 // searchLocationData$: Observable<LocationInfo>;

  constructor(private store: Store<AppState>, private map: MapService) {
    this.locationData$ = store.pipe(select('locationData'));

//  this.searchLocationData$ = store.pipe(select('searchLocation')); //this.store.select('searchLocation');
  }

  ngOnInit(): void { }

  searchLocation(): void {

    this.store.dispatch(searchLocationActions.LocationSearch({query: this.userLocationName}));
    // this.map.search(this.userLocationName)
    //   .pipe(first())
    //   .subscribe(data => {
    //     const lngLatData: LocationData = data;
    //     this.store.dispatch(searchLocationActions.Update(lngLatData));
    //   }, console.error);
  }

  addAnnontation(): void {
    this.map.search(this.userLocationName)
      .pipe(first()).subscribe(data => {
        const lngLatData: LocationData = data;
        if (lngLatData?.center) {
          this.store.dispatch(locationActions.Add(lngLatData));
        }
        else {
          /* if the location doesnt exist we update the store for the error message */
          this.store.dispatch(searchLocationActions.Update(lngLatData));
        }
      });
  }

  userSelected(item: LocationInfo): void {
    this.store.dispatch(searchLocationActions.Update(item));
  }

  deleteLocation(item: LocationInfo): void {
    this.store.dispatch(locationActions.Delete(item));
  }
}
