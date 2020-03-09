import { Action, createReducer, on } from '@ngrx/store';

export interface State {
    test: any;
}

export const initialState: State = {
    test: null,
};

const testReducer = createReducer(
    initialState
);

export function reducer(state: State | undefined, action: Action) {
    return testReducer(state, action);
}
