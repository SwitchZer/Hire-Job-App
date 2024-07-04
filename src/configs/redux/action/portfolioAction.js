import api from "@/configs/api";

export const ADD_PORTFOLIO_REQUEST = "ADD_PORTFOLIO_REQUEST";
export const ADD_PORTFOLIO_SUCCESS = "ADD_PORTFOLIO_SUCCESS";
export const ADD_PORTFOLIO_FAILURE = "ADD_PORTFOLIO_FAILURE";
export const FETCH_PORTFOLIO_REQUEST = "FETCH_PORTFOLIO_REQUEST";
export const FETCH_PORTFOLIO_SUCCESS = "FETCH_PORTFOLIO_SUCCESS";
export const FETCH_PORTFOLIO_FAILURE = "FETCH_PORTFOLIO_FAILURE";

export const addPortfolio = (portfolioData) => {
  return async (dispatch) => {
    dispatch({ type: ADD_PORTFOLIO_REQUEST });

    try {
      const response = await api.post("/portfolio", portfolioData);
      dispatch({ type: ADD_PORTFOLIO_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ADD_PORTFOLIO_FAILURE, payload: error.message });
    }
  };
};

export const getMyPortfolio = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_PORTFOLIO_REQUEST });
      const response = await api.get("/portofolio");
      dispatch({ type: FETCH_PORTFOLIO_SUCCESS, payload: response.data.data });
    } catch (error) {
      dispatch({ type: FETCH_PORTFOLIO_FAILURE, payload: error });
    }
  };
};

export const getPortfolio = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_PORTFOLIO_REQUEST });
      const response = await api.get(`/portofolio/${id}`);
      dispatch({ type: FETCH_PORTFOLIO_SUCCESS, payload: response.data.data });
    } catch (error) {
      dispatch({ type: FETCH_PORTFOLIO_FAILURE, payload: error });
    }
  };
};
