import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Recipe from "../models/recipeModel.js";

const recipeRouter = express.Router();

recipeRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const recipes = await Recipe.find({});
    res.send(recipes);
  })
);
recipeRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createdRecipes = await Recipe.insertMany(data.recipes);

    res.send({ createdRecipes });
  })
);

export default recipeRouter;
