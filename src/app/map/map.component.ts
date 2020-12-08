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
        let findLocation = featurs?.find(ele => {
          return ele.place_name.toLowerCase().includes(event.toLowerCase());
        });
        this.address = !!findLocation ? findLocation["center"] : [];
        if (this.address && this.address.length > 0) {
          this.map.buildMap(this.address[0], this.address[1]);
        }
      }, (error) => {
        console.log("error occore: ", error);
      });
    }
    else {
      this.address = [];
    }
  }

  addAnnontation(event: string) {
    this.search(event);
    console.log(`The user insert the ${event} to the list`)
    //atara - to do - add to store and the list
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
