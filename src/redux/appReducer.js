/* eslint-disable import/prefer-default-export */
import { HIDE_LOADER, SHOW_LOADER, HIDE_ALERT, SHOW_ALERT } from './types';

const initialState = {
  loading: false,
  alert: null,
};

export const appReducer = (action, state = initialState) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    case HIDE_ALERT:
      return { ...state, alert: null };
    default: return state;
  }
};
