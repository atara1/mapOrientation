import { LocationInfo } from '../store/modles/locationInfo.modle';
export interface AppState {
  locationData: LocationInfo[];
  searchLocation: LocationInfo;
}
