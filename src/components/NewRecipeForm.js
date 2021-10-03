import React, { useState } from "react";

function NewRecipeForm({ onRecipeSubmit }) {
  // Call useState and set the initial value of newRecipe to a recipe object that matches the recipe
  // objects in the recipes array.
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    category: "",
    image: "",
    prepTimeInMinutes: "",
    servings: "",
    ingredients: [],
    instructions: [],
    sourceUrl: "",
    likes: 0,
    saved: false,
  });

  // When a change event happens in the form (whenever a user enters input), get the name of the input
  // element and its current value. Use the state setter function to update newRecipe.
  // This triggers a re-render of the Form component after each keystroke.
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setNewRecipe({ ...newRecipe, [name]: value });
  }

  // When the user is finished entering their input, copy the newRecipe, and edit any properties
  // that need to be re-formatted to match the format in db.json.
  // Then, send the formatted recipeObject up to App using onRecipeSubmit, and reset newRecipe
  // to its original value. This will re-render Form, and the form will appear cleared on the screen.
  function handleSubmit(e) {
    e.preventDefault();

    const recipeObject = {
      ...newRecipe,
      ingredients: newRecipe.ingredients.split("\n"),
      instructions: newRecipe.instructions.split("\n"),
      prepTimeInMinutes: parseInt(newRecipe.prepTimeInMinutes),
      servings: parseInt(newRecipe.servings),
      category: newRecipe.category.toLowerCase(),
    };

    onRecipeSubmit(recipeObject);

    setNewRecipe({
      name: "",
      category: "",
      image: "",
      prepTimeInMinutes: "",
      servings: "",
      ingredients: [],
      instructions: [],
      sourceUrl: "",
      likes: 0,
      saved: false,
    });
  }

  // Render a controlled form by synchronizing the form input elements with state.
  // Set the "value" property of each input to the corresponding property of newRecipe.
  // Add event listeners to each input so they can update state each time a change event happens.
  return (
    <div>
      <h1>Add a Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={newRecipe.name}
        />

        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
          value={newRecipe.category}
        />

        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          value={newRecipe.image}
        />

        <label htmlFor="prepTimeInMinutes">Prep Time in Minutes</label>
        <input
          type="text"
          name="prepTimeInMinutes"
          placeholder="Enter a number"
          onChange={handleChange}
          value={newRecipe.prepTimeInMinutes}
        />

        <label htmlFor="servings">Servings</label>
        <input
          type="text"
          name="servings"
          placeholder="Enter a number"
          onChange={handleChange}
          value={newRecipe.servings}
        />

        <label htmlFor="ingredients">Ingredients</label>
        <textarea
          name="ingredients"
          placeholder="Ingredients list"
          onChange={handleChange}
          value={newRecipe.ingredients}
          rows="8"
          cols="50"
        />

        <label htmlFor="instructions">Instructions</label>
        <textarea
          name="instructions"
          placeholder="Instructions"
          onChange={handleChange}
          value={newRecipe.instructions}
          rows="8"
          cols="50"
        />

        <label htmlFor="sourceUrl">Source URL</label>
        <input
          type="text"
          name="sourceUrl"
          placeholder="Enter a link to the original recipe"
          onChange={handleChange}
          value={newRecipe.sourceUrl}
        />

        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewRecipeForm;
