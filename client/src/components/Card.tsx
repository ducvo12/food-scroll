import { useState } from "react";
import { Recipe } from "../lib/types";

export default function ImageCard({ recipe }: { recipe: Recipe | null }) {
  const [showRecipe, setShowRecipe] = useState(false);

  return (
    <div>
      <div className={`absolute w-full h-full bg-white rounded-xl shadow-lg transition-transform`}>
        {recipe && (
          <div className="flex flex-col h-full">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="m-3 bg-black rounded-md object-contain"
            />
            <div className="pl-3 pt-1 text-2xl">{recipe.title}</div>

            <div>
              <button
                onClick={() => setShowRecipe(true)}
                className="ml-3 mt-1 w-40 h-12 rounded-md bg-blue-300"
              >
                Show Recipe
              </button>
              <button
                onClick={() => setShowRecipe(false)}
                className="ml-3 mt-1 w-40 h-12 rounded-md bg-red-300"
              >
                Hide Recipe
              </button>
            </div>
          </div>
        )}
      </div>

      {recipe && showRecipe && (
        <div>
          <div className="absolute -right-[465px] h-full w-[450px] bg-white rounded-xl shadow-lg overflow-y-auto overflow-x-hidden">
            {recipe && (
              <div>
                <p className="pl-3 pt-1 text-lg font-semibold">Instructions:</p>
                <div
                  className="recipe-instructions ml-3 px-3 pt-1 text-lg"
                  dangerouslySetInnerHTML={{ __html: recipe.instructions }}
                />
              </div>
            )}
          </div>

          <div className="absolute -left-[400px] h-full w-96 bg-white rounded-xl shadow-lg overflow-y-auto overflow-x-hidden">
            {recipe && (
              <div>
                <p className="pl-3 pt-1 text-lg font-semibold">Ingredients:</p>
                <ul className="px-3 pt-1 text-lg list-disc list-inside">
                  {recipe.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>
                      {ingredient.amount} {ingredient.unit} {ingredient.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
