import RecipeCard from "./RecipeCard";

function SavedRecipes({ recipes, onClick }) {
  // Filter the recipes array to see which recipes have been saved ("saved: true")
  // Once you receive a new array that contains only saved recipes,
  // use .map to transform each recipe object into a RecipeCard component.
  const savedRecipeCards = recipes
    .filter((recipe) => recipe.saved === true)
    .map((recipe) => (
      <RecipeCard recipe={recipe} onClick={onClick} key={recipe.id} />
    ));

  // Render the array of savedRecipeCard components.
  return (
    <>
      <h1>Saved Recipes</h1>
      <div className="card-container">{savedRecipeCards}</div>
    </>
  );
}

export default SavedRecipes;
