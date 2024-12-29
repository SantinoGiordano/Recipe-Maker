"use client";
import { useState } from "react";
import foodData from "@/data/food.json";

interface Recipe {
  id: string;//changed id to string, change back to number for issues
  name: string;
  ingredients: string[];
  steps: { description: string }[];
}
//this code uses Set, to filter out any data that repeats itself, then .flatmap() takes all the reduced arrays and combines them into one
const IngredientFilter: React.FC = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const allIngredients = Array.from(
    new Set(foodData.flatMap((recipe: Recipe) => recipe.ingredients))
  );
  //.some() checks if one is then returns all as a true
  const filteredRecipes = foodData.filter((recipe: Recipe) =>
    recipe.ingredients.some((ingredient) =>
      selectedIngredients.includes(ingredient)
    )
  );

  const handleCheckboxChange = (ingredient: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Filter Recipes by Ingredients</h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-3">Select Ingredients:</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {allIngredients.map((ingredient) => (
              <div key={ingredient} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={ingredient}
                  checked={selectedIngredients.includes(ingredient)}
                  onChange={() => handleCheckboxChange(ingredient)}
                  className="h-5 w-5"
                />
                <label htmlFor={ingredient} className="text-lg">
                  {ingredient}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Filtered Recipes:</h2>
        {filteredRecipes.length > 0 ? (
          <ul>
            {filteredRecipes.map((recipe) => (
              <li
                key={recipe.id}
                className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-bold">{recipe.name}</h3>
                <ul className="list-disc pl-5">
                  {recipe.ingredients.map((ingredient, idx) => (
                    <li key={idx}>{ingredient}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p>No recipes found with the selected ingredients.</p>
        )}
      </div>
    </div>
  );
};

export default IngredientFilter;
