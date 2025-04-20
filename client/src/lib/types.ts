export interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
}

export interface Recipe {
  title: string;
  image: string;
  readyInMinutes: number;
  extendedIngredients: Ingredient[];
  instructions: string;
}
