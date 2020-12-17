import { LocationInfo } from '../../store/modles/locationInfo.modle';
import * as searchLocation from '../actions/searchLocation.action';


export type Action = searchLocation.all;

const defaultState: LocationInfo = { center: null, text: '' };

export function searchLocationReducer(state: LocationInfo = defaultState, action: Action): LocationInfo {

  switch (action.type) {
    case searchLocation.UPDATE: {
      return action.payload;
    }

    default:
      return state;
  }
}
