import * as locationNameAction from '../actions/locationName.action';
// import { LocationInfo } from '../modules/locationInfo.module';

export type Action = locationNameAction.all;

const defualtState: string = "";

const newState = (state, newState) => {
    return Object.assign({}, state, newState);
}

export function locationNameReducer(state: string = defualtState, action: Action) {
    console.log(action.type, state);

    switch (action.type) {           
 
            case locationNameAction.EDIT:{
                return newState(state, { text: action.payload });
            }
    
        default:
            return state;
    }
}