import React from "react";
import { Link } from "react-router-dom";

export default function Recipe(props) {
  const { recipe } = props;
  return (
    <div>
      <div key={recipe._id}>
        <Link to={`/recipe/${recipe._id}`}>
          <img src={recipe.image} alt={recipe.name} />
        </Link>
        <div>
          <Link to={`/recipe/${recipe._id}`}>
            <h2>{recipe.name}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
