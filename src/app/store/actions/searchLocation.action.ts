import { Action, createAction, props } from '@ngrx/store';
import { LocationInfo } from '../../store/modles/locationInfo.modle';

export const Update = createAction(
    '[LocationInfo] Update',
    props<LocationInfo>()
);
