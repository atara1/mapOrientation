import * as locationAction from '../actions/location.action';
import { LocationInfo } from '../modules/locationInfo.module';

export type Action = locationAction.all;

const defaultState: LocationInfo[] = []

// const newState = (state, newState) => {
//     return Object.assign({}, state, newState);
// }

export function locationReducer(state: LocationInfo[] = defaultState, action: Action) {
    console.log(action.type, state);

    switch (action.type) {
        case locationAction.ADD:{
            return [...state, action.payload];
            //return newState(state, { center: action.payload });
        }
        case locationAction.DELETE: {
            return defaultState;
        }
        default:
            return state;
    }
}