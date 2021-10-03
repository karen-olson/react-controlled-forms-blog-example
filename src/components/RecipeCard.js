import React, { useState } from "react";

function RecipeCard({ recipe, onClick }) {
  // Call useState to keep track of each recipe card's current like count and "saved" status.
  // Initialize each state variable to the current corresponding value in the database.
  const [likes, setLikes] = useState(recipe.likes);
  const [saved, setSaved] = useState(recipe.saved);

  // When a user clicks a button, see if they clicked the "like" or "save" button.
  // Update the correct state variable ("likes" or "saved").
  // Make a copy of the current recipe and update the correct property.
  // Send the updated recipe to the App component using onClick.
  function handleClick(e) {
    let updatedRecipe;
    if (e.target.name === "likeButton") {
      setLikes((likes) => likes + 1);
      updatedRecipe = { ...recipe, likes: likes + 1 };
    } else if (e.target.name === "saaveButton") {
      setSaved(!saved);
      updatedRecipe = { ...recipe, saved: !saved };
    }

    onClick(updatedRecipe);
  }

  // Render one recipe card using data from the current recipe.
  // Add a click event listener to each button.
  return (
    <li className="card" key={recipe.id}>
      <h2>{recipe.name}</h2>
      <button onClick={handleClick} name="likeButton">
        Like
      </button>
      <span>{recipe.likes}</span>
      <button onClick={handleClick} name="saveButton">
        {saved ? "Unsave" : "Save"}
      </button>
      <img className="thumbnail" src={recipe.image} alt={recipe.name}></img>
    </li>
  );
}

export default RecipeCard;
