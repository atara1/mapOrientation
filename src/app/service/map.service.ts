import { features, mapboxOutput } from './../../assets/type';
import { LocationData } from './../../assets/locationData';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MapService {
  map: mapboxgl.Map;
  zoom = 12
  constructor(private httpClient: HttpClient) {

  }

  public buildMap(Longitude: number, Latitude: number) {
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: environment.mapbox.style,
      zoom: this.zoom,
      center: [Longitude, Latitude]
    })
    this.map.addControl(new mapboxgl.NavigationControl());
    this.createMark(Longitude, Latitude);
  }

  public search(event: string): Promise<LocationData> {
    let res: LocationData = new LocationData();
    const searchTerm = event.toLowerCase();
    if (searchTerm && searchTerm.length > 0) {
      return this.searchLocation(searchTerm)
        .then((featurs) => {
          let findLocation = featurs?.find(ele => {
            return ele.place_name.toLowerCase().includes(event.toLowerCase());
          });
          if (!!findLocation) {
            res.center = findLocation.center;
            res.text = findLocation.place_name;
            return res;
          }
          else {
            return {center: null , text: event};
          }
        });
    }
  }

  private createMark(lng: number, lat: number) {
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

  private searchLocation(query: string): Promise<features[]> {
    let url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    return this.httpClient.get(url + query + `.json?access_token=${environment.mapbox.accessToken}`)
      .pipe(map((res: mapboxOutput) => {
        return res.features;
      }),
        catchError(this.handelError)).toPromise()
  }

}
