import React, { useState } from "react";

const Card = ({ recipe, recipes, index }) => {

  const [ingredient, setIngrediant] = useState([]);


  const handleIngrediants = (i) => {
    console.log('i', i)
    setIngrediant(recipes[i].recipe);
  };

  console.log('ingredient', ingredient)

  return (
    <div className="card m-2 " style={{ width: "18rem" }}>
      <img
        src={recipe.image}
        className="card-img-top mt-2"
        alt="No Image"
        width={50}
      />
      <div className="card-body">
        <h5 className="card-title text-center">{recipe.label}</h5>
        <h6 className="text-center">{recipe.dishType}</h6>
        <div className="text-center">
          <span>(Calories:{Math.floor(recipe.calories)})</span>
        </div>

        <div>
          <button
            type="button"
            class="btn btn-outline-primary btn-sm m-1 w-100 "
            onClick={() => handleIngrediants(index)}
          >
            Ingredients
          </button>

          <button className="btn btn-outline-secondary btn-sm m-1 w-100">
            See complete recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
