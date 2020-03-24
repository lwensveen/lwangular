import { Action, createReducer, createSelector, on } from '@ngrx/store';
import { Phone } from '../services/phones';
import { loaded } from '../actions/phone.actions';
import * as fromPhone from './phone.reducer';

export interface State {
    phones: Phone[];
}

export const initialState: State = {
    phones: [],
};

// @ts-ignore
export const selectPhones = (state: State) => state.phones.phones;

const phoneReducer = createReducer(
    initialState,
    on(loaded, (state, action) => {
        return ({...state, phones: action.payload});
    })
);

export function reducer(state: State | undefined, action: Action) {
    return phoneReducer(state, action);
}

export const selectFilteredPhones = createSelector(
    selectPhones,
    (phones: Phone[] , props) => {
        if (phones && props.evt.source.value && props.evt.checked === true) {
            return phones.filter((phone: Phone) => phone.brand === props.evt.source.value || phone.os === props.evt.source.value);
        } else {
            return phones;
        }
    }
);
