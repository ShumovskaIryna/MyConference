import { CREATE_CONFERENCE, SHOW_LOADER, HIDE_LOADER, HIDE_ALERT, REQUEST_CONFERENCES, SHOW_ALERT } from './types';

export function createConference(conference) {
  return {
    type: CREATE_CONFERENCE,
    payload: conference,
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}
export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });

    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
}

export function fetchPosts() {
  return {
    type: REQUEST_CONFERENCES,
  };
}
// return async dispatch => {
//       try {
//     dispatch(showLoader())
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
//     const json = await response.json()
//     setTimeout(() => {
//         dispatch({ type: FETCH_POSTS, payload: json })
//         dispatch(hideLoader())
//     }, 1000)
//        } catch (e) {
//          dispatch(showAlert('Ой-ой-ой... Щось пішло не так'))
//      dispatch(hideLoader())
//     }
// }
