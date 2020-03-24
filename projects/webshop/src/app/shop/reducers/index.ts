import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as fromBrand from './brand.reducer';
import * as fromOS from './operating-system.reducer';
import * as fromPhone from './phone.reducer';

import { environment } from '../../../environments/environment';

export interface AppState {
    brands: fromBrand.State,
    os: fromOS.State,
    phones: fromPhone.State,
}

export const reducers: ActionReducerMap<AppState> = {
    brands: fromBrand.reducer,
    os: fromOS.reducer,
    phones: fromPhone.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
