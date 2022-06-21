/** @format */

import { legacyCreateStore as createStore } from 'redux';
import { reducer } from '../reducers/reducer';

export const store = createStore(reducer);
