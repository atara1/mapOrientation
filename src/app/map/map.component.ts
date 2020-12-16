import { MapService } from './../service/map.service';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/appState';
import { Observable, Subscription } from 'rxjs';
import { LocationInfo } from '../store/modules/locationInfo.module';
import { skip } from 'rxjs/operators';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {
  searchLocationData: Observable<LocationInfo>;
  isLocationNotFound: boolean = false;
  private subscription: Subscription;

  constructor(private map: MapService, private store: Store<AppState>) {
    this.searchLocationData = this.store.select('searchLocation');
  }

  ngOnInit(): void {
    this.subscription = this.searchLocationData
      .subscribe(data => {
        if (data && data.center) {
          this.map.buildMap(data.center[0], data.center[1]);
        }
        else {
          this.map.buildMap(0, 0);
        }
      });
    this.searchLocationData.pipe(skip(1)).subscribe(data => {
      this.isLocationNotFound = !(data && data.center);
    });

  }

  @HostListener('window:unload', ['$event'])
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
