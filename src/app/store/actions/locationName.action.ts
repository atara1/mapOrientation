import { Action } from '@ngrx/store';
// import { LocationInfo } from '../modules/locationInfo.module';

export const EDIT = '[string] Edit';

export class Edit implements Action {
    readonly type = EDIT;
    constructor( public payload: string){}
 
}

export type all = Edit;