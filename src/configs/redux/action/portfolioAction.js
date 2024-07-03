import api from "@/configs/api";


export const ADD_PORTFOLIO_REQUEST = "ADD_PORTFOLIO_REQUEST";
export const ADD_PORTFOLIO_SUCCESS = "ADD_PORTFOLIO_SUCCESS";
export const ADD_PORTFOLIO_FAILURE = "ADD_PORTFOLIO_FAILURE";

export const addExperience = (portfolioData) => {
  return async (dispatch) => {
    dispatch({ type: ADD_PORTFOLIO_REQUEST });

    try {
      const response = await api.post(
        "/portfolio",
        portfolioData
      );
      dispatch({ type: ADD_PORTFOLIO_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ADD_PORTFOLIO_FAILURE, payload: error.message });
    }
  };
};
