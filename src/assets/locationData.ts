
export class LocationData {
  center: Array<number>;
  text: string

  constructor(data = null) {
    this.center = data?.center;
    this.text = data?.text
  }

}