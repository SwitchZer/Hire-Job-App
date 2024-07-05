import {
  ADD_PORTFOLIO_REQUEST,
  ADD_PORTFOLIO_SUCCESS,
  ADD_PORTFOLIO_FAILURE,
  FETCH_PORTFOLIO_REQUEST,
  FETCH_PORTFOLIO_SUCCESS,
  FETCH_PORTFOLIO_FAILURE,
  FETCH_MYPORTFOLIO_REQUEST,
  FETCH_MYPORTFOLIO_SUCCESS,
  FETCH_MYPORTFOLIO_FAILURE,
} from "@/configs/redux/action/portfolioAction";

const initialState = {
  portfolio: [],
  myPortfolio: [],
  loading: false,
  error: null,
};

const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PORTFOLIO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_PORTFOLIO_SUCCESS:
      return {
        ...state,
        portfolio: [...state.portfolio, action.payload],
        loading: false,
        error: null,
      };
    case ADD_PORTFOLIO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_PORTFOLIO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PORTFOLIO_SUCCESS:
      return {
        ...state,
        portfolio: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_PORTFOLIO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_MYPORTFOLIO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MYPORTFOLIO_SUCCESS:
      return {
        ...state,
        portfolio: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_MYPORTFOLIO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default portfolioReducer;
