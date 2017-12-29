import { combineReducers } from 'redux'
import wallet from './wallet';

const combineReduce = combineReducers({
  wallet
});

export const rootReducer = (state, action) => {
  return combineReduce(state, action);
}