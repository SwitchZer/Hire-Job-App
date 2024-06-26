import {
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
} from "@/configs/redux/action/editprofileAction";
import {
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE,
} from "@/configs/redux/action/editprofileAction";
import {
  ADD_SKILL_REQUEST,
  ADD_SKILL_SUCCESS,
  ADD_SKILL_FAILURE,
  REMOVE_SKILL_REQUEST,
  REMOVE_SKILL_SUCCESS,
  REMOVE_SKILL_FAILURE,
} from "@/configs/redux/action/editprofileAction";

const initialState = {
  skills: [],
  profile: null,
  loading: false,
  error: null,
};

const editprofileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };
    case FETCH_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case EDIT_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case EDIT_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_SKILL_REQUEST:
    case REMOVE_SKILL_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ADD_SKILL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        skills: [...state.skills, action.payload],
      };
    case REMOVE_SKILL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        skills: state.skills.filter((skill) => skill.id !== action.payload),
      };
    case ADD_SKILL_FAILURE:
    case REMOVE_SKILL_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default editprofileReducer;
