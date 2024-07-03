import api from "@/configs/api";

export const FETCH_PROFILE_REQUEST = "FETCH_PROFILE_REQUEST";
export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
export const FETCH_PROFILE_FAILURE = "FETCH_PROFILE_FAILURE";

export const getWorkerProfile = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_PROFILE_REQUEST });

    api
      .get("/workers/profile/self")
      .then((response) => {
        dispatch({
          type: FETCH_PROFILE_SUCCESS,
          payload: response.data.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_PROFILE_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const getRecruiterProfile = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PROFILE_REQUEST });

    try {
      const response = await api.get(`/recruiters/profile`);
      dispatch({
        type: FETCH_PROFILE_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PROFILE_FAILURE,
        payload: error.message,
      });
    }
  };
};
