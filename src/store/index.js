import { counterReducer } from './counter/reducer';
import { createStore } from 'react-redux';

export const store = createStore(counterReducer);