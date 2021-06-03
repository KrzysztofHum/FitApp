import React from "react";
import { Link } from "react-router-dom";

export default function Recipe(props) {
  const { recipe } = props;
  return (
    <div>
      <div key={recipe._id} className="card">
        <Link to={`/recipe/${recipe._id}`}>
          <img src={recipe.image} alt={recipe.name} />
        </Link>
        <div className="card-body">
          <Link to={`/recipe/${recipe._id}`}>
            <h2>{recipe.name}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
