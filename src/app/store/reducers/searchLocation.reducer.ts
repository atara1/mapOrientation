import { Action, createReducer, on } from '@ngrx/store';
import { LocationInfo } from '../../store/modles/locationInfo.modle';
import * as searchLocation from '../actions/searchLocation.action';

const defaultState: LocationInfo = { center: null, text: '' };

const reducer = createReducer(
  defaultState,
  on(searchLocation.Update, (newData: LocationInfo) => {
          return newData;
  })
);

export function searchLocationReducer(state: LocationInfo | undefined, action: Action): LocationInfo {
  return reducer(state, action);
}
