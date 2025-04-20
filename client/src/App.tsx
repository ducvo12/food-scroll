"use client";

import { useState } from "react";
import Card from "./components/Card.tsx";
import SwipeButtons from "./components/SwipeButtons.tsx";
import axios from "axios";
import { Recipe } from "./lib/types.ts";

export default function Home() {
  const handleLike = () => {};
  const handleDislike = () => {};
  const resetCards = () => {};

  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRecipe = async () => {
    setLoading(true);
    setError(null);
    setRecipe(null);

    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/random?number=1&apiKey=${
          import.meta.env.VITE_SPOONACULAR_KEY
        }`
      );
      if (!res.ok) throw new Error(`API error: ${res.statusText}`);
      const data = await res.json();
      const r = data.recipes[0];
      setRecipe({
        title: r.title,
        image: r.image,
        readyInMinutes: r.readyInMinutes,
        extendedIngredients: r.extendedIngredients.map((ing: any) => ({
          id: ing.id,
          name: ing.name,
          amount: ing.amount,
          unit: ing.unit
        })),
        instructions: r.instructions
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-rose-100 to-teal-100 overflow-hidden">
      <div className="w-4/12">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Image Swiper</h1>

        <div className="relative h-[550px] w-full">
          <Card recipe={recipe} showRecipe={false} />
          {error}
        </div>

        <SwipeButtons onLike={fetchRecipe} onDislike={fetchRecipe}></SwipeButtons>
      </div>
    </main>
  );
}
