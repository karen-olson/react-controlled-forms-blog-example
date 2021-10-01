import React, { useState } from "react";

function NewRecipeForm() {
  const [formData, setFormData] = useState({
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

  return (
    <>
      <div>New Recipe Form</div>
    </>
  );
}

export default NewRecipeForm;
