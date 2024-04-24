import api from "@/configs/api";

export const FETCH_WORKERS_REQUEST = "FETCH_WORKERS_REQUEST";
export const FETCH_WORKERS_SUCCESS = "FETCH_WORKERS_SUCCESS";
export const FETCH_WORKERS_FAILURE = "FETCH_WORKERS_FAILURE";

export const getWorker = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_WORKERS_REQUEST });

    try {
      const response = await api.get(`/workers`);
      dispatch({
        type: FETCH_WORKERS_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_WORKERS_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    try {
      await api.get("/auth/logout");

      dispatch({ type: "LOGOUT_USER" });

      localStorage.removeItem("token");
    } catch (error) {
      // Handle any error that occurs during the logout process
      // ...
    }
  };
};
