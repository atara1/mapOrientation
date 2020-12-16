import { Features, MapboxOutput } from './../../assets/type';
import { LocationData } from './../../assets/locationData';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable, from, EMPTY } from 'rxjs';

const URL_SEARCH = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
@Injectable({
  providedIn: 'root'
})
export class MapService {
  map: mapboxgl.Map;
  zoom = 12;
  constructor(private httpClient: HttpClient) {

  }

  public buildMap(Longitude: number, Latitude: number): void {
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: environment.mapbox.style,
      zoom: this.zoom,
      center: [Longitude, Latitude]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    this.createMark(Longitude, Latitude);
  }

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

  private createMark(lng: number, lat: number): void {
    const marker = new mapboxgl.Marker({
      draggable: true
    }).setLngLat([lng, lat])
      .addTo(this.map);


    marker.on('drag', () => {
      console.log(marker.getLngLat());
    });
  }

  handelError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error);
  }

  private searchLocation(query: string): Observable<Features[]> {
    // const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    return this.httpClient
      .get(`${URL_SEARCH}${query}.json?access_token=${environment.mapbox.accessToken}`)
      .pipe(map((res: MapboxOutput) => res.features));
  }
}
