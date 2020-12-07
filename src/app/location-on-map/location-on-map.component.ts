import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-on-map',
  templateUrl: './location-on-map.component.html',
  styleUrls: ['./location-on-map.component.css']
})
export class LocationOnMapComponent implements OnInit {
 name: string= "";
  constructor() { }

  ngOnInit(): void {
  }

  setName(name:string){
    this.name = name;
    console.log(name);
  }
}
