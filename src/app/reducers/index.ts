import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as fromTest from './test.reducer';

import { environment } from '../../environments/environment';

export interface State {
    test: any;
}

export const reducers: ActionReducerMap<State> = {
    test: fromTest.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
