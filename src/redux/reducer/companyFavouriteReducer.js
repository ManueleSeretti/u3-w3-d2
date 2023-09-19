import { ADD_COM_FAV, DEL_FAV } from "../action";

const initialState = {
  content: [],
};

const companysFavouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COM_FAV:
      return {
        ...state,

        content: [...state.content, action.payload],
      };
    case DEL_FAV:
      return {
        ...state,

        content: state.content.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};
export default companysFavouritesReducer;
