import {
  FETCH_WORKERS_REQUEST,
  FETCH_WORKERS_SUCCESS,
  FETCH_WORKERS_FAILURE,
} from "@/configs/redux/action/workerAction";

const initialState = {
  workers: [],
  loading: false,
  error: null,
};

const workerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORKERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_WORKERS_SUCCESS:
      return {
        ...state,
        loading: false,
        workers: action.payload,
      };
    case FETCH_WORKERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default workerReducer;
