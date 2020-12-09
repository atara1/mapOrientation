import * as searchLocation from '../actions/searchLocation.action';
import { LocationInfo } from '../modules/locationInfo.module';

export type Action = searchLocation.all;

const defaultState: LocationInfo = { center: null, text: '' };

export function searchLocationReducer(state: LocationInfo = defaultState, action: Action) {
    console.log(action.type, state);

    switch (action.type) {
        case searchLocation.UPDATE: {
            return action.payload;
        }

        default:
            return state;
    }
}