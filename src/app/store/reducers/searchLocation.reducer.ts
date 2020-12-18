import { Action, createReducer, on } from '@ngrx/store';
import { LocationInfo } from '../../store/modles/locationInfo.modle';
import * as searchLocation from '../actions/searchLocation.action';



const defaultState: LocationInfo = { center: null, text: '' };


const reducer = createReducer(
  defaultState,
  on(searchLocation.Update, (state: LocationInfo, newData: LocationInfo) => {
          return newData;
  })
);

export function searchLocationReducer(state: LocationInfo | undefined, action: Action): LocationInfo {
  console.log(state, action);
  return reducer(state, action);
}
