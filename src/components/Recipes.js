import RecipeCard from "./RecipeCard";

function Recipes({ recipes, onClick }) {
  // Take the recipes array and transform each element into a RecipeCard component.
  // Returns a new array of RecipeCard components.
  const recipeCards = recipes.map((recipe) => (
    <RecipeCard recipe={recipe} onClick={onClick} key={recipe.id} />
  ));

  // Render the array of RecipeCards.
  return (
    <>
      <h1>Recipes</h1>
      <ul id="card-container">{recipeCards}</ul>
    </>
  );
}

export default Recipes;
