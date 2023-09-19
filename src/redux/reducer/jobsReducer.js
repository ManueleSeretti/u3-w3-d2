import { GET_ERROR_OFF, GET_ERROR_ON, GET_LOADING_OFF, GET_LOADING_ON, SET_JOBS } from "../action";

const initialState = {
  content: [],
  isLoading: false,
  hasError: false,
  errorMessage: "",
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return { ...state, content: action.payload };
    case GET_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };
    case GET_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };
    case GET_ERROR_ON:
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload,
      };
    case GET_ERROR_OFF:
      return {
        ...state,
        hasError: false,
        errorMessage: "",
      };

    default:
      return state;
  }
};
export default jobsReducer;
