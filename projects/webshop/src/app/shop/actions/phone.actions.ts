import { createAction, props } from '@ngrx/store';
import { Phone } from '../services/phones';

export const loaded = createAction(
    '[Phones API] Phones Loaded Success',
    props<{ payload: Phone[] }>()
);
export const filter = createAction(
    'FILTER',
    (evt: any) => (evt)
);
export const reset = createAction(
    'RESET',
);

