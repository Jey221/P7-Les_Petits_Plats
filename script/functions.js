export default function search(array, searchString) {
  const filter = array.filter((recipe) => recipe.name.toLowerCase().includes(searchString.toLowerCase()));
  return filter;
}

export function searchByTags(recipes, filter, type) {
  if (type === 'ingredients') {
    const newRecipes = recipes.filter((recipe) => {
      const ingredients = recipe.ingredients.map((ing) => ing.ingredient.toLowerCase());
      if (ingredients.includes(filter.toLowerCase())) {
        return true;
      }
      return false;
    });
    return newRecipes;
  }
  return recipes;
}
