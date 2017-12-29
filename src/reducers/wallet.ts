import { combineReducers } from 'redux';
import { DECREASE_WALLET_MONEY, INCREASE_WALLET_MONEY } from '../actions';

const initialState = {
  walletMoney: 10000
}

function walletReducer(state = initialState, action) {
  switch ( action.type ) {
    case INCREASE_WALLET_MONEY:
      return {
        walletMoney: this.state + 100
      };
    case DECREASE_WALLET_MONEY:
      return {
        walletMoney: this.state - 100
      };
    default:
      return state;
  }
}

export default walletReducer;