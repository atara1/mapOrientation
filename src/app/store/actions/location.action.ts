import { createAction, props } from '@ngrx/store';
import { LocationInfo } from '../../store/modles/locationInfo.modle';


export const Add = createAction(
    '[LocationInfo] Add',
    props<LocationInfo>()
);

export const Delete = createAction(
    '[LocationInfo] Delete',
    props<LocationInfo>()
);
