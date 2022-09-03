/* eslint-disable import/prefer-default-export */
import { CREATE_CONFERENCE, FETCH_CONFERENCES } from './types';

const initialState = {
  conferences: [],
  fetchedConferences: [],
};

// Pure Functions
// eslint-disable-next-line default-param-last
export const conferenceReducer = (state = initialState, action) => {
  console.log(action, state);
  switch (action.type) {
    case CREATE_CONFERENCE:
      return { ...state, conferences: state.conferences.concat([action.payload]) };
    case FETCH_CONFERENCES:
      return { ...state, fetchedConferences: action.payload };
    default: return state;
  }
};
