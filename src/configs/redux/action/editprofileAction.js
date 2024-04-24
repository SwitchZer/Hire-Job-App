import api from "@/configs/api";

// Action Types
export const FETCH_PROFILE_REQUEST = "FETCH_PROFILE_REQUEST";
export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
export const FETCH_PROFILE_FAILURE = "FETCH_PROFILE_FAILURE";
export const EDIT_PROFILE_REQUEST = "EDIT_PROFILE_REQUEST";
export const EDIT_PROFILE_SUCCESS = "EDIT_PROFILE_SUCCESS";
export const EDIT_PROFILE_FAILURE = "EDIT_PROFILE_FAILURE";
export const ADD_SKILL_REQUEST = "ADD_SKILL_REQUEST";
export const ADD_SKILL_SUCCESS = "ADD_SKILL_SUCCESS";
export const ADD_SKILL_FAILURE = "ADD_SKILL_FAILURE";
export const REMOVE_SKILL_REQUEST = "REMOVE_SKILL_REQUEST";
export const REMOVE_SKILL_SUCCESS = "REMOVE_SKILL_SUCCESS";
export const REMOVE_SKILL_FAILURE = "REMOVE_SKILL_FAILURE";

// Action Creators
export const fetchProfileRequest = () => ({
  type: FETCH_PROFILE_REQUEST,
});

export const fetchProfileSuccess = (profile) => ({
  type: FETCH_PROFILE_SUCCESS,
  payload: profile,
});

export const fetchProfileFailure = (error) => ({
  type: FETCH_PROFILE_FAILURE,
  payload: error,
});

export const editProfileRequest = () => ({
  type: EDIT_PROFILE_REQUEST,
});

export const editProfileSuccess = () => ({
  type: EDIT_PROFILE_SUCCESS,
});

export const editProfileFailure = (error) => ({
  type: EDIT_PROFILE_FAILURE,
  payload: error,
});

export const fetchProfile = () => {
  return (dispatch) => {
    dispatch(fetchProfileRequest());

    api
      .get("/workers/profile")
      .then((response) => {
        const profile = response.data.data;
        dispatch(fetchProfileSuccess(profile));
      })
      .catch((error) => {
        dispatch(fetchProfileFailure(error.message));
      });
  };
};

export const editProfile = (data) => {
  return (dispatch) => {
    dispatch(editProfileRequest());

    api
      .put("/workers/profile", data)
      .then(() => {
        dispatch(editProfileSuccess());
      })
      .catch((error) => {
        dispatch(editProfileFailure(error.message));
      });
  };
};

export const addSkillRequest = () => ({
  type: ADD_SKILL_REQUEST,
});

export const addSkillSuccess = (skill) => ({
  type: ADD_SKILL_SUCCESS,
  payload: skill,
});

export const addSkillFailure = (error) => ({
  type: ADD_SKILL_FAILURE,
  payload: error,
});

export const removeSkillRequest = () => ({
  type: REMOVE_SKILL_REQUEST,
});

export const removeSkillSuccess = (skillId) => ({
  type: REMOVE_SKILL_SUCCESS,
  payload: skillId,
});

export const removeSkillFailure = (error) => ({
  type: REMOVE_SKILL_FAILURE,
  payload: error,
});

export const addSkill = (skill) => {
  return (dispatch) => {
    dispatch(addSkillRequest());

    api
      .post("/skills", { skill })
      .then((response) => {
        dispatch(addSkillSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(addSkillFailure(error.message));
      });
  };
};

export const removeSkill = (id) => {
  return (dispatch) => {
    dispatch(removeSkillRequest());

    api
      .delete(`/skills/${id}`)
      .then(() => {
        dispatch(removeSkillSuccess(id));
      })
      .catch((error) => {
        dispatch(removeSkillFailure(error.message));
      });
  };
};
