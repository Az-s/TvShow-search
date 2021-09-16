import {
    SHOW_SEARCH,
    SHOW_INFO,
    FETCH_SHOW_FAILURE,
} from "./actions";

const initialState = {
    shows: [],
    text: '',
    showInfo: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_SEARCH:
        return {...state, fetchShowLoading: true};
      case SHOW_INFO:
        return {...state, fetchShowLoading: false, shows: action.payload};
      default:
        return state;
    }
  };
  
  export default reducer;