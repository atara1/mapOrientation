import * as locationAction from '../actions/location.action';
import { LocationInfo } from '../modules/locationInfo.module';

export type Action = locationAction.all;

const defualtState: LocationInfo = {
    center: [0, 0],
    text: 'defualt'
}

const newState = (state, newState) => {
    return Object.assign({}, state, newState);
}

export function locationReducer(state: LocationInfo = defualtState, action: Action) {
    console.log(action.type, state);

    switch (action.type) {
        case locationAction.ADD:{
            return newState(state, { text: action.payload }); //this will override the text in the state
        }
        case locationAction.DELETE: {
            return defualtState;
        }
        default:
            return state;
    }
}