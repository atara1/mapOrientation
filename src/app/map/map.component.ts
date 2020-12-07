import { LocationData } from './../../assets/locationData';
import { feature } from './../../assets/type';
import { MapService } from './../service/map.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  name: string;
  @Input() locationname: string = "";
  address: number[] = [];
  selectedAddress: LocationData = null;

  constructor(private map: MapService) { }

  ngOnInit(): void {
    this.map.buildMap(0, 0);
  }

  search(event: string) {
    const searchTerm = event.toLowerCase();
    if (searchTerm && searchTerm.length > 0) {
      this.map.search_word(searchTerm).subscribe((featurs) => {
        this.address = featurs.find(ele => {
          return ele.place_name.toLowerCase().includes(event.toLowerCase());
        })["center"];
        this.map.buildMap(this.address[0], this.address[1]);
      }, (error) => {
        console.log("error occore: ", error);
      });


    }
    else {
      this.address = [];
    }
  }


  // searchLocation(){
  //   this.map.searchLocation(this.address).subscribe( data =>{
  //     console.log(data);
  //     this.selectedAddress = data;
  //   }, (error)=>{
  //       console.log("error occore: " ,error);
  //     });
  // }

}
