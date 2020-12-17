import { Features, MapboxOutput } from './../../assets/locationData';
import { LocationData } from './../../assets/locationData';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const URL_SEARCH = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
@Injectable({
  providedIn: 'root'
})
export class MapService {
  map: mapboxgl.Map;
  zoom = 12;
  constructor(private httpClient: HttpClient) {}


  public search(placeName: string): Observable<LocationData> {
    return this.searchLocation(placeName).pipe(
      map(features => {
        const findLocation = features?.find(ele => {
          return ele.place_name.toLowerCase().includes(placeName.toLowerCase());
        });
        if (!!findLocation) {
          return { center: findLocation.center, text: findLocation.place_name };
        }
        else {
          return { center: null, text: placeName };
        }
      }));
  }

  private searchLocation(query: string): Observable<Features[]> {
    return this.httpClient
      .get(`${URL_SEARCH}${query}.json?access_token=${environment.mapbox.accessToken}`)
      .pipe(map((res: MapboxOutput) => res.features));
  }
}
