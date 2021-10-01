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

// When a new recipe is passed up from NewRecipeForm, post it to the database.
// On a successful POST request, use setRecipes to add the new recipe to the array.
  function onRecipeSubmit(formData) {
    fetch("http://localhost:3001/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((formData) => setRecipes([...recipes, formData]));
  }

  return (
    <div className="App">
      <Recipes />
      <SavedRecipes />
      <NewRecipeForm ={onRecipeSubmit}/>
    </div>
  );
}

export default App;
