// Mise en place d'une fonction de recherche sur la barre principale
export function filterElements(content, elements) {
  let display = 0;
  if (content.length > 2) {
    for (let i = 0; i < elements.length; i += 1) {
      if (elements[i].textContent.toLowerCase().includes(content.toLowerCase())) {
        elements[i].style.display = 'block';
        display += 1;
      } else {
        elements[i].style.display = 'none';
      }
    }
    displayError(display);
  } else {
    for (let i = 0; i < elements.length; i += 1) {
      elements[i].style.display = 'block';
    }
  }
}

// Mise en place d'une fonction de recherche sur la barre des tags
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

// Mise en place d'un message d'erreur si la rechche ne correspond à aucune recette
function displayError(displayRecipeNumber) {
  const errorElt = document.querySelector('#errorMessage');
  if (displayRecipeNumber === 0) {
    if (errorElt === null) {
      const error = document.createElement('div');
      error.setAttribute('id', 'errorMessage');
      error.setAttribute('class', 'w-100 mt-5');
      error.innerHTML = `
        <p class="text-center h1"> Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc </p>
      `;
      document.querySelector('#contentRecipes').appendChild(error);
    }
  } else {
    errorElt?.remove();
  }
}
