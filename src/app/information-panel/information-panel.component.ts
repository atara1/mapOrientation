import { LocationData } from './../../assets/locationData';
import { Add, Delete } from './../store/actions/location.action';
import { AppState } from '../store/appState';
import { LocationInfo } from '../store/modles/locationInfo.modle';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MapService } from '../service/map.service';
import { Update } from '../store/actions/searchLocation.action';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-information-panel',
  templateUrl: './information-panel.component.html',
  styleUrls: ['./information-panel.component.scss']
})
export class InformationPanelComponent implements OnInit {
  locationData: Observable<LocationInfo[]>;
  userLocationName = '';

  constructor(private store: Store<AppState>, private map: MapService) {
    this.locationData = this.store.select('locationData');
  }

  ngOnInit(): void { }

  searchLocation(): void {
    this.map.search(this.userLocationName)
      .pipe(first())
      .subscribe(data => {
        const lngLatData: LocationData = data;
        this.store.dispatch(new Update(lngLatData));
      }, console.error);
  }

  addAnnontation(): void {
    this.map.search(this.userLocationName)
      .pipe(first()).subscribe(data => {
        const lngLatData: LocationData = data;
        if (lngLatData?.center) {
          this.store.dispatch(new Add(lngLatData));
        }
        else{
          this.store.dispatch(new Update(lngLatData)); /* if the location doesnt exist we update the store for the error message */
        }
      });
  }

  userSelected(item: LocationInfo): void {
    this.store.dispatch(new Update(item));
  }

  deleteLocation(item: LocationInfo): void {
    this.store.dispatch(new Delete(item));
  }

}
