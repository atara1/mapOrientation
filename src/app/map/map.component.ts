import { Component, OnInit, OnDestroy, HostListener, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/appState';
import { Observable, Subscription } from 'rxjs';
import { LocationInfo } from '../store/modles/locationInfo.modle';
import { skip } from 'rxjs/operators';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy, AfterViewInit {

  searchLocationData$: Observable<LocationInfo>;
  isLocationNotFound = false;
  centerMarker: [number, number] = [0, 0];
  private subscriptions: Subscription[] = [];
  mapbox: Map; /* this is the mapbox of angular - ngx-mapbox-gl */

  constructor(private store: Store<AppState>) {
    this.searchLocationData$ = this.store.select('searchLocation');
  }

  ngAfterViewInit(): void {
    console.log(this);
  }

  ngOnInit(): void {
    this.subscriptions.push(this.searchLocationData$
      .subscribe(data => {
        if (data && data.center) {
          this.mapbox.setCenter(data.center);
          this.centerMarker = data.center;
        }
      }));
    this.subscriptions.push(this.searchLocationData$.pipe(skip(1)).subscribe(data => {
      this.isLocationNotFound = !(data && data.center);
    }));

  }

  @HostListener('window:unload', ['$event'])
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
