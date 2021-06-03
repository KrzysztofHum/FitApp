import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listRecipes } from "../actions/recipeActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Recipe from "../components/Recipe";

export default function RecipesScreen() {
  const dispatch = useDispatch();
  const recipeList = useSelector((state) => state.recipeList);
  const { loading, error, recipes } = recipeList;
  useEffect(() => {
    dispatch(listRecipes());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <div>
          <div>
            <input type="text" placeholder="Szukaj..." />
          </div>
          <div>
            {recipes.map((recipe) => (
				<Recipe key={recipe._id} recipe = {recipe}></Recipe>
			))}
          </div>
        </div>
      )}
    </div>
  );
}
