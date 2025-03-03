import React from 'react';

const Ingredients = (props) => {
  const ingredientsListItems = props.ingredients.map(ingredient => (
    <li key={ingredient} className="bg-gray-100 px-3 py-1 rounded-lg shadow-sm text-gray-800">
      {ingredient}
    </li>
  ));

  return (
    <>
      <section className="flex flex-col text-left items-start p-6 max-w-lg mx-auto shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Ingredients on hand:</h2>

        <ul className="grid grid-cols-3 gap-2 w-full">{ingredientsListItems}</ul>

        {props.ingredients.length > 3 && (
          <div className="bg-green-100 p-4 mt-4 rounded-lg shadow-md w-full">
            <div>
              <h3 className="text-xl font-semibold text-green-700">Ready for a recipe?</h3>
              <p className="text-gray-600">Generate a recipe from your list of ingredients.</p>
            </div>
            <button
              onClick={props.getRecipe}
              className="mt-3 px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 transition-all"
            >
              Get a recipe
            </button>
          </div>
        )}
      </section>

      <h1 className="text-center text-gray-600 pt-28 text-sm font-semibold">
        @2025 by Ravi Web Developer
      </h1>
    </>
  );
};

export default Ingredients;
