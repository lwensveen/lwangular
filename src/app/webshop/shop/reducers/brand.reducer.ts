import { Action, createAction, createReducer, on, props } from '@ngrx/store';
import { Brand } from '../services/brands';

export interface State {
    brands: Brand[];
}

export const initialState: State = {
    brands: [],
};

const test = createAction('[Brands API] Brands Loaded Success', props<{ payload: Brand[] }>());

const brandReducer = createReducer(
    initialState,
    on(test, (state, action) => ({...state, brands: action.payload})),
);

export function reducer(state: State | undefined, action: Action) {
    return brandReducer(state, action);
}
