import { createAction, props } from '@ngrx/store';
import { Phone } from '../services/phones';

export const loaded = createAction(
    '[Phones API] Phones Loaded Success',
    props<{ payload: Phone[] }>()
);
