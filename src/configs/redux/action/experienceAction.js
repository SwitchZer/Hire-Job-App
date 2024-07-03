import api from "@/configs/api";

export const ADD_EXPERIENCE_REQUEST = "ADD_EXPERIENCE_REQUEST";
export const ADD_EXPERIENCE_SUCCESS = "ADD_EXPERIENCE_SUCCESS";
export const ADD_EXPERIENCE_FAILURE = "ADD_EXPERIENCE_FAILURE";

export const addExperience = (experienceData) => {
  return async (dispatch) => {
    dispatch({ type: ADD_EXPERIENCE_REQUEST });

    try {
      const response = await api.post("/experience", experienceData);
      dispatch({ type: ADD_EXPERIENCE_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ADD_EXPERIENCE_FAILURE, payload: error.message });
    }
  };
};
