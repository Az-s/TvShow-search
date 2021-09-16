import axios from "axios";

export const FETCH_SHOW_REQUEST = 'FETCH_PROFILE_REQUEST';
export const FETCH_SHOW_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_SHOW_FAILURE = 'FETCH_PROFILE_FAILURE';

export const fetchShowRequest = () => ({ type: FETCH_SHOW_REQUEST });
export const fetchShowSuccess = show => ({ type: FETCH_SHOW_SUCCESS, payload: show });
export const fetchShowFailure = () => ({ type: FETCH_SHOW_FAILURE });

export const fetchShow = () => {
    return async dispatch => {
        try {
            dispatch(fetchShowRequest());
            const response = await axios.get('http://api.tvmaze.com/search/shows?q=');
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
