import 'rxjs';
import { combineEpics } from 'redux-observable';
import * as actions from '../actions';

const walletEpic = actions$ =>
  actions$.ofType(actions.INCREASE_WALLET_MONEY)
    .switchMap(q => {
      return 10000;
    })

export const rootEpic = combineEpics(
  walletEpic
);