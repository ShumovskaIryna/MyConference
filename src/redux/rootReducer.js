/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import { conferenceReducer } from './conferenceReducer';
// import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
  conferences: conferenceReducer,
  // app: appReducer
});
