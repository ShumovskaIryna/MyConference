/* eslint-disable import/prefer-default-export */
import { CREATE_CONFERENCE, FETCH_CONFERENCES } from './types';

const initialState = {
  conferences: [],
  fetchedConferences: [],
};

// Pure Functions
export const conferenceReducer = (action, state = initialState) => {
  switch (action.type) {
    case CREATE_CONFERENCE:
      return { ...state, conferences: state.conferences.concat([action.payload]) };
    case FETCH_CONFERENCES:
      return { ...state, fetchedConferences: action.payload };
    default: return state;
  }
};
