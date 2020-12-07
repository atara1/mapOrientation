
export class LocationData {
center: Array<number>;
text: string

  //  center: (2) [-122.463, 37.7648]
///context: (2) [{…}, {…}]
////geometry: {type: "Point", coordinates: Array(2)}
//id: "place.15734669613559250"
// place_name: "San Francisco, California, United States"
// place_type: ["place"]
// properties: {wikidata: "Q62"}
// relevance: 1
// text: "San Francisco"
// type: "Feature"

    constructor(data){
this.center = data.center;
this.text = data.text
    }


}