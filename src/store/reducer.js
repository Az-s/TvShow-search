import {
    FETCH_SHOW_REQUEST,
    FETCH_SHOW_SUCCESS,
    FETCH_SHOW_FAILURE,
} from "./actions";

const initialState = {
    fetchShowLoading: false,
    shows: [],
    text: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SHOW_REQUEST:
        return {...state, fetchShowLoading: true};
      case FETCH_SHOW_SUCCESS:
        return {...state, fetchShowLoading: false, shows: action.payload};
      case FETCH_SHOW_FAILURE:
        return {...state, fetchShowLoading: false};
      default:
        return state;
    }
  };
  
  export default reducer;