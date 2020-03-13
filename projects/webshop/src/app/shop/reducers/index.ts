import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as fromBrand from './brand.reducer';
import * as fromOS from './operating-system.reducer';
import * as fromPhone from './phone.reducer';

import { environment } from '../../../environments/environment';

export interface State {
    brands: any,
    os: any,
    phones: any,

}

export const reducers: ActionReducerMap<State> = {
    brands: fromBrand.reducer,
    os: fromOS.reducer,
    phones: fromPhone.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
