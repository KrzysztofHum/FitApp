import axios from "axios";
import {
  RECIPE_LIST_FAIL,
  RECIPE_LIST_REQUEST,
  RECIPE_LIST_SUCCESS,
} from "../constants/userConstants";

export const listRecipes = () => async (dispatch) => {
  dispatch({
    type: RECIPE_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get('https://fit-appp.herokuapp.com/api/recipes');
    dispatch({ type: RECIPE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: RECIPE_LIST_FAIL, payload: error.message });
  }
};
