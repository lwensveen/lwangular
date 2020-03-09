import { Action, createAction, createReducer, on, props } from '@ngrx/store';
import { OperatingSystem } from '../services/operatingSystem';

export interface State {
    operatingSystems: OperatingSystem[];
}

export const initialState: State = {
    operatingSystems: [],
};

const test = createAction('[OperatingSystems API] OperatingSystems Loaded Success', props<{ payload: OperatingSystem[] }>());

const operatingSystemReducer = createReducer(
    initialState,
    on(test, (state, action) => ({...state, operatingSystems: action.payload})),
);

export function reducer(state: State | undefined, action: Action) {
    return operatingSystemReducer(state, action);
}
