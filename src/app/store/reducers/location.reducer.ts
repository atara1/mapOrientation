import * as locationAction from '../actions/location.action';
import { LocationInfo } from '../../store/modles/locationInfo.modle';
import { createReducer, on, Action } from '@ngrx/store';


const defaultState: LocationInfo[] = [];

const reducer = createReducer(
    defaultState,
    on(locationAction.Add, (state: LocationInfo[], newData: LocationInfo) => {
        const foundInState: LocationInfo = state.find(ele => {
            return compareLocations(ele, newData);
        });
        if (!foundInState) {
            return [...state, newData];
        }
        else{
            return state;
        }
    }),
    on(locationAction.Delete, (state: LocationInfo[], newData: LocationInfo) => {
        return state.filter(ele => {
            return ele.text !== newData.text;
        });
    })
);

export function locationReducer(state: LocationInfo[] | undefined, action: Action): LocationInfo[] {
    return reducer(state, action);
}

function compareLocations(firstLocation: LocationInfo, secondLocation: LocationInfo): boolean {

    for (let index = 0; index < firstLocation?.center?.length; index++) {
        if (firstLocation.center[index] !== secondLocation.center[index]) {
            return false;
        }
    }
    return firstLocation?.text === secondLocation?.text;
}
