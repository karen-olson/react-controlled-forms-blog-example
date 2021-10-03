import React, { useState, useEffect } from "react";
import "../App.css";
import Recipes from "./Recipes";
import SavedRecipes from "./SavedRecipes";
import NewRecipeForm from "./NewRecipeForm";

function App() {
  // Invoke useState to create a recipes state variable and setRecipes setter function.
  const [recipes, setRecipes] = useState([]);

  // Call useEffect to fetch data from json-server. Set recipes to the data you receive.
  // Include an empty dependencies array so data is only fetched when the app is first mounted.
  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((resp) => resp.json())
      .then((recipes) => setRecipes(recipes));
  }, []);

  // When a new recipe is passed up from NewRecipeForm, use fetch() to post it to the database.
  // On a successful POST request, use setRecipes to add the new recipe to the array.
  function onRecipeSubmit(newRecipe) {
    fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((response) => response.json())
      .then((newRecipe) => setRecipes([...recipes, newRecipe]));
  }

  // When a user clicks the "like" or "save" button on a RecipeCard, onClick is called.
  // onClick udpates the liked or saved recipe in the database and calls setRecipes.
  // This causes a re-render of the entire app since recipes lives at the top of the component tree.
  function onClick(updatedRecipe) {
    console.log("updated recipe: ", updatedRecipe);
    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.id === updatedRecipe.id) {
        return updatedRecipe;
      } else {
        return recipe;
      }
    });

    console.log("updated recipes: ", updatedRecipes);

    fetch(`http://localhost:3000/recipes/${updatedRecipe.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRecipe),
    })
      .then((response) => response.json())
      .then(() => setRecipes(updatedRecipes));
  }

  // Render Recipes, SavedRecipes, and NewRecipeForm. Pass necessary state variables and callback
  // functions down as props.
  return (
    <div className="App">
      <Recipes recipes={recipes} onClick={onClick} />
      <SavedRecipes recipes={recipes} onClick={onClick} />
      <NewRecipeForm onRecipeSubmit={onRecipeSubmit} />
    </div>
  );
}

export default App;
