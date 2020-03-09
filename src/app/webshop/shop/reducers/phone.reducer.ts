import { Action, createReducer, on } from '@ngrx/store';
import { Phone } from '../services/phones';
import { filter, loaded } from '../actions/phone.actions';

export interface State {
    phones: Phone[];
}

export const initialState: State = {
    phones: [],
};


const phoneReducer = createReducer(
    initialState,
    on(loaded, (state, action) => {
        return ({...state, phones: action.payload});
    }),
    on(filter, (state, evt) => {
        return ({...state, phones: state.phones.filter(phone => phone.brand === evt.evt.source.value)});
    }),
);

export function reducer(state: State | undefined, action: Action) {
    return phoneReducer(state, action);
}
