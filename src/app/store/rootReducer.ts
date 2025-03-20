import type { Action } from 'redux';
import { combineReducers } from '@reduxjs/toolkit';

import reducers from './reducers';

const LOGOUT_ACTION = 'auth/logout/fulfilled';

const rootReducer = combineReducers(reducers);

const resettableRootReducer = (
  state: ReturnType<typeof rootReducer> | undefined,
  action: Action,
) => {
  return rootReducer(action.type === LOGOUT_ACTION ? undefined : state, action);
};

export default resettableRootReducer;
