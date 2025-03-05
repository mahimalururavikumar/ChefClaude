import React from "react";
import Ingredients from "./Ingredients.jsx";
import {getRecipeFromMistral} from "./ai.js";
import Clauderecipe from "./Clauderecipe.jsx";
import { useRef, useEffect } from "react";

const MainContent = () => {
  const [ingredients, setIngredients] = React.useState(["Tomatoes", "Potato", "Lady Finger", "Brinjal"]);

  function addIngredient(formData) {
   
    const newIngredient = formData.get("ingredient").trim();

    if (newIngredient) {
      setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }
  }

  const  recipeSection = useRef(null);

  const [recipe, setRecipe] = React.useState("");

  async function getRecipe(){
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  useEffect(() => {
    if(recipe != "" && recipeSection != null){
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  },[recipe])


  return (
    <main className="flex flex-col items-center mt-20">
      <form 
        className="flex flex-col md:flex-row justify-center gap-4 items-center max-w-lg mx-auto p-4 w-full" 
        action = {addIngredient}
      >
        <input
          type="text"
          placeholder="Enter ingredient.. eg: Chilly"
          className="w-full p-2 shadow-md border border-gray-400 focus:outline-none rounded-sm transition-all duration-300"
          name="ingredient"
        />
        <button 
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-md transition-all ease-in-out duration-300 active:scale-95 focus:ring-2 hover:shadow-lg w-full md:w-auto"
        >
          Add Ingredient
        </button>
      </form>

      {
        ingredients.length > 0 && <Ingredients ingredients={ingredients} getRecipe={getRecipe} ref={recipeSection}/>
      }

      <Clauderecipe recipe={recipe}/>
    </main>
  );
};

export default MainContent;
