import { Action } from '@ngrx/store';
import { LocationInfo } from '../modules/locationInfo.module';

export const UPDATE = '[LocationInfo] Update';

export class Update implements Action {
    readonly type = UPDATE;
    constructor(public payload: LocationInfo) { }
}

export type all = Update;
