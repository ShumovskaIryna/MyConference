/* eslint-disable import/prefer-default-export */
import { CREATE_CONFERENCE } from './types';
import { showAlert } from './actions';

const forbidden = [];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_CONFERENCE) {
        const found = forbidden.filter((w) => action.payload.title.includes(w));
        if (found.length) {
          return dispatch(showAlert(''));
        }
      }
      return next(action);
    };
  };
}
