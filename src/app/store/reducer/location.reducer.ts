import * as locationAction from '../actions/location.action';
import { LocationInfo } from '../modules/locationInfo.module';

export type Action = locationAction.all;

const defaultState: LocationInfo[] = []

export function locationReducer(state: LocationInfo[] = defaultState, action: Action) {
    console.log(action.type, state);
    switch (action.type) {
        case locationAction.ADD: {
            let foundInState: LocationInfo = state.find(ele => {    
                return compareLocations (ele ,action.payload);
            });
            if (!foundInState) // if the new location doesnt found in the state
                return [...state, action.payload];
        }
        case locationAction.DELETE: {
            return state.filter(ele => {
                return ele !== action.payload;
            });
        }
        default:
            return state;
    }




}

function compareLocations(firstLocation: LocationInfo , secondLocation: LocationInfo): boolean{

    for( let index=0;index<firstLocation?.center?.length;index++){
    if( firstLocation.center[index] !== secondLocation.center[index])
    return false;
}
if(firstLocation?.text !== secondLocation?.text){
return false;
}

return true;

}