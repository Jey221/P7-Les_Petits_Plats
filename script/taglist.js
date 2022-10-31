function taglist() {
  // OUVERTURE TAG INGREDIENT
  document.querySelector('#btnIngredients').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#btnIngredients').style.setProperty('display', 'none');
    document.querySelector('#taglistIngredients').style.setProperty('display', 'block');
    document.querySelector('#btnUstensiles').style.setProperty('display', 'block');
    document.querySelector('#taglistUstensiles').style.setProperty('display', 'none');
    document.querySelector('#btnAppareils').style.setProperty('display', 'block');
    document.querySelector('#taglistAppareils').style.setProperty('display', 'none');
  });
  // FERMETURE TAG INGREDIENT
  document.querySelector('#iconTagIngredient').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#btnIngredients').style.setProperty('display', 'block');
    document.querySelector('#taglistIngredients').style.setProperty('display', 'none');
  });

  // OUVERTURE TAG APPAREILS
  document.querySelector('#btnAppareils').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#btnAppareils').style.setProperty('display', 'none');
    document.querySelector('#taglistAppareils').style.setProperty('display', 'block');
    document.querySelector('#btnIngredients').style.setProperty('display', 'block');
    document.querySelector('#taglistIngredients').style.setProperty('display', 'none');
    document.querySelector('#btnUstensiles').style.setProperty('display', 'block');
    document.querySelector('#taglistUstensiles').style.setProperty('display', 'none');
  });
  // FERMETURE TAG APPAREILS
  document.querySelector('#iconTagAppareils').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#btnAppareils').style.setProperty('display', 'block');
    document.querySelector('#taglistAppareils').style.setProperty('display', 'none');
  });

  // OUVERTURE TAG USTENSILES
  document.querySelector('#btnUstensiles').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#btnUstensiles').style.setProperty('display', 'none');
    document.querySelector('#taglistUstensiles').style.setProperty('display', 'block');
    document.querySelector('#btnIngredients').style.setProperty('display', 'block');
    document.querySelector('#taglistIngredients').style.setProperty('display', 'none');
    document.querySelector('#btnAppareils').style.setProperty('display', 'block');
    document.querySelector('#taglistAppareils').style.setProperty('display', 'none');
  });
  // FERMETURE TAG USTENSILES
  document.querySelector('#iconTagUstensiles').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#btnUstensiles').style.setProperty('display', 'block');
    document.querySelector('#taglistUstensiles').style.setProperty('display', 'none');
  });

  return taglist;
}

// INGREDIENTS
function getIngredientsFrom(recipes) {
  const allIngredients = [];
  for (let i = 0; i < recipes.length; i += 1) {
    const { ingredients } = recipes[i];
    ingredients.map(({ ingredient }) => {
      allIngredients.push(`${ingredient.toLowerCase()}`);
      return ingredient;
    });
  }
  console.log('ingredient array', [allIngredients]);
  const ingredientNorepeat = new Set(allIngredients);
  console.log('ingredient no repeat', ingredientNorepeat);
  return ingredientNorepeat;
}

function displayIngredients(ingredients) {
  document.querySelector('#listIngredient').innerHTML = '';
  const zoneList = document.createElement('ul');
  document.querySelector('#taglistIngredients');
  for (const element of ingredients) {
    const list = document.createElement('li');
    zoneList.appendChild(list);
    list.innerText = element;
    console.log(element);
  }
  document.querySelector('#listIngredient').appendChild(zoneList);
}

// APPAREILS
function getAppareilsFrom(recipes) {
  const allAppareils = [];
  for (let i = 0; i < recipes.length; i += 1) {
    const appareils = recipes[i].appliance;
    allAppareils.push(appareils);
  }

  const appareilNorepeat = new Set(allAppareils);
  return appareilNorepeat;
}

function displayAppareils(appareils) {
  for (const element of appareils) {
    const list = document.createElement('p');
    document.querySelector('#listAppareils').appendChild(list);
    list.innerText = element;
  }
}

// USTENSILES
function getUstensilesFrom(recipes) {
  const allUstensiles = [];
  for (let i = 0; i < recipes.length; i += 1) {
    const ustensiles = recipes[i].ustensils;
    allUstensiles.push(ustensiles);
  }

  const ustensileNorepeat = new Set(allUstensiles);
  return ustensileNorepeat;
}

function displayUstensiles(ustensiles) {
  for (const element of ustensiles) {
    const list = document.createElement('p');
    document.querySelector('#listUstensiles').appendChild(list);
    list.innerText = element;
  }
}

// MISE EN PLACE DES LISTES INGREDIENTS/APPAREILS/USTENSILES
export default function displayTags(recipes) {
  const ingredients = getIngredientsFrom(recipes);
  displayIngredients(ingredients);
  const appareils = getAppareilsFrom(recipes);
  displayAppareils(appareils);
  const ustensiles = getUstensilesFrom(recipes);
  displayUstensiles(ustensiles);
  taglist();
}
