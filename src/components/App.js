import React, { useState } from "react";
import "../App.css";
import Recipes from "./Recipes";
import SavedRecipes from "./SavedRecipes";
import NewRecipeForm from "./NewRecipeForm";

function App() {
  const [recipes, setRecipes] = useState([]);

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
