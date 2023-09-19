import { SET_COMPANYS } from "../action";

const initialState = {
  content: [],
};

const companysReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPANYS:
      return { ...state, content: action.payload };

    default:
      return state;
  }
};
export default companysReducer;
