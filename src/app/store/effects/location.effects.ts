import { MapService } from './../../service/map.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import * as searchLocationActions from '../actions/searchLocation.action';
// https://www.youtube.com/watch?v=AnB4g5hWb9k

@Injectable()
export class LocationEffects {
    constructor(private actions$: Actions,
                private mapService: MapService) {}

    updateSearchLocation$ = createEffect(() => this.actions$
    .pipe(ofType(searchLocationActions.LocationSearch),
        switchMap(data =>
            this.mapService.search(data.query)
            .pipe(map((res) => searchLocationActions.Update(res)
            )),
            // catchError(() => EMPTY
        ),
    ),
    );

}
