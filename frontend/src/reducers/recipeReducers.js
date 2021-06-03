import {
  RECIPE_LIST_FAIL,
  RECIPE_LIST_REQUEST,
  RECIPE_LIST_SUCCESS,
} from "../constants/userConstants";

export const recipeListReducer = (state = { recipes: [] }, action) => {
  switch (action.type) {
    case RECIPE_LIST_REQUEST:
      return { loading: true };
    case RECIPE_LIST_SUCCESS:
      return { loading: false, recipes: action.payload };
    case RECIPE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
