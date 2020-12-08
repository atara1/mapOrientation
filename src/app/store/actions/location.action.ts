import { Action } from '@ngrx/store';
import { LocationInfo } from '../modules/locationInfo.module';

export const ADD = '[LocationInfo] Add';
export const DELETE = '[LocationInfo] Delete';



export class Add implements Action {
    readonly type = ADD;
    constructor(public payload: LocationInfo) { }
}

export class Delete implements Action {
    readonly type = DELETE;
}

export type all = Add | Delete;