import { counterReducer } from './counter/reducer';
import { createStore } from 'redux';

export const store = createStore(counterReducer);