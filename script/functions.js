export function search(recipes, searchString) {
  const filter = recipes.filter((recipe) => {
    const ingredients = recipe.ingredients.map((ing) => ing.ingredient.toLowerCase());
    const appareils = recipe.appliance.toLowerCase();
    const ustensiles = recipe.ustensils;
    const descriptions = recipe.description;
    if (ingredients.includes(searchString.toLowerCase())) {
      return true;
    } if (appareils.includes(searchString.toLowerCase())) {
      return true;
    } if (ustensiles.includes(searchString.toLowerCase())) {
      return true;
    } if (descriptions.includes(searchString.toLowerCase())) {
      return true;
    }
    return false;
  });
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
  } if (type === 'appareils') {
    const newRecipes = recipes.filter((recipe) => {
      const appareils = recipe.appliance.toLowerCase();
      if (appareils.includes(filter.toLowerCase())) {
        return true;
      }
      return false;
    });
    return newRecipes;
  } if (type === 'ustensiles') {
    const newRecipes = recipes.filter((recipe) => {
      const ustensiles = recipe.ustensils;
      if (ustensiles.includes(filter)) {
        return true;
      }
      return false;
    });
    return newRecipes;
  }
  return recipes;
}
