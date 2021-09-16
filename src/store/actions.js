import axios from "axios";

export const SHOW_SEARCH = 'SHOW_SEARCH';
export const SHOW_INFO = 'SHOW_INFO';
export const FETCH_SHOW_FAILURE = 'FETCH_SHOW_FAILURE';

export const fetchShowRequest = () => ({ type: SHOW_SEARCH });
export const fetchShowSuccess = show => ({ type: SHOW_INFO, payload: show });
export const fetchShowFailure = () => ({type: FETCH_SHOW_FAILURE});

export const fetchShow = () => {
    return async dispatch => {
        try {
            dispatch(fetchShowRequest());
            const response = await axios.get('http://api.tvmaze.com/search/shows?q=' );
            dispatch(fetchShowSuccess(response.data));
        } catch (e) {
            dispatch(fetchShowFailure());
        }
    };
};

export const fetchShowInfo = () => {
    return async (dispatch, getState) => {
        // const { show } = getState();

        let url = 'http://api.tvmaze.com/shows/' ;
        const response = await axios.get(url);

        dispatch(fetchShowSuccess(response.data));
    };
};
