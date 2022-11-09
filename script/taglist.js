import recipes from './recipes.js';

// OUVERTURE ET FERMETURE DES TAGLIST
function openIngredient() {
  document.querySelector('#btnIngredients').style.setProperty('display', 'none');
  document.querySelector('#taglistIngredients').style.setProperty('display', 'block');
  document.querySelector('.tag_ingredients').classList.toggle('col-6');
}
function closeIngredient() {
  document.querySelector('#btnIngredients').style.setProperty('display', 'flex');
  document.querySelector('#taglistIngredients').style.setProperty('display', 'none');
  document.querySelector('.tag_ingredients').classList.remove('col-6');
}

function openAppareil() {
  document.querySelector('#btnAppareils').style.setProperty('display', 'none');
  document.querySelector('#taglistAppareils').style.setProperty('display', 'block');
  document.querySelector('.tag_appareil').classList.toggle('col-6');
}
function closeAppareil() {
  document.querySelector('#btnAppareils').style.setProperty('display', 'flex');
  document.querySelector('#taglistAppareils').style.setProperty('display', 'none');
  document.querySelector('.tag_appareil').classList.remove('col-6');
}

function openUstensiles() {
  document.querySelector('#btnUstensiles').style.setProperty('display', 'none');
  document.querySelector('#taglistUstensiles').style.setProperty('display', 'block');
  document.querySelector('.tag_ustensiles').classList.toggle('col-6');
}
function closeUstensiles() {
  document.querySelector('#btnUstensiles').style.setProperty('display', 'flex');
  document.querySelector('#taglistUstensiles').style.setProperty('display', 'none');
  document.querySelector('.tag_ustensiles').classList.remove('col-6');
}

function taglist() {
  // OUVERTURE TAG INGREDIENT
  document.querySelector('#btnIngredients').addEventListener('click', (e) => {
    e.preventDefault();
    openIngredient();
    closeUstensiles();
    closeAppareil();
  });
  // FERMETURE TAG INGREDIENT
  document.querySelector('#iconTagIngredient').addEventListener('click', (e) => {
    e.preventDefault();
    closeIngredient();
  });

  // OUVERTURE TAG APPAREILS
  document.querySelector('#btnAppareils').addEventListener('click', (e) => {
    e.preventDefault();
    openAppareil();
    closeIngredient();
    closeUstensiles();
  });
  // FERMETURE TAG APPAREILS
  document.querySelector('#iconTagAppareils').addEventListener('click', (e) => {
    e.preventDefault();
    closeAppareil();
  });

  // OUVERTURE TAG USTENSILES
  document.querySelector('#btnUstensiles').addEventListener('click', (e) => {
    e.preventDefault();
    openUstensiles();
    closeIngredient();
    closeAppareil();
  });
  // FERMETURE TAG USTENSILES
  document.querySelector('#iconTagUstensiles').addEventListener('click', (e) => {
    e.preventDefault();
    closeUstensiles();
  });

  return taglist;
}
// INGREDIENTS
// liste des ingrédients sans repétition
function getIngredientsFrom(recipes) {
  const allIngredients = [];
  for (let i = 0; i < recipes.length; i += 1) {
    const { ingredients } = recipes[i];
    ingredients.map(({ ingredient }) => {
      allIngredients.push(`${ingredient.toLowerCase()}`);
      return ingredient;
    });
  }
  const ingredientNorepeat = new Set(allIngredients);
  return ingredientNorepeat;
}
// affichage des ingrédients
function displayIngredients(ingredients, filter) {
  document.querySelector('#listIngredient').innerHTML = '';
  const zoneList = document.createElement('ul');
  zoneList.setAttribute('class', 'list-unstyled row');
  zoneList.setAttribute('id', 'listItemIngredients');
  for (const element of ingredients) {
    if (!filter?.includes(element)) {
      const list = document.createElement('li');
      list.setAttribute('class', 'ingredientListItem col-4 pb-1');
      zoneList.appendChild(list);
      list.innerText = element;
    }
  }
  document.querySelector('#listIngredient').appendChild(zoneList);
}

// APPAREILS
// liste des appareils sans repétition
function getAppareilsFrom(recipes) {
  const allAppareils = [];
  for (let i = 0; i < recipes.length; i += 1) {
    const appareils = recipes[i].appliance;
    allAppareils.push(appareils);
  }

  const appareilNorepeat = new Set(allAppareils);
  return appareilNorepeat;
}
// affichage des appareils
function displayAppareils(appareils, filter) {
  document.querySelector('#listAppareils').innerHTML = '';
  const zoneList = document.createElement('ul');
  zoneList.setAttribute('class', 'list-unstyled row');
  zoneList.setAttribute('id', 'listItemAppareils');
  for (const element of appareils) {
    if (!filter?.includes(element)) {
      const list = document.createElement('li');
      list.setAttribute('class', 'appareilListItem col-4');
      zoneList.appendChild(list);
      list.innerText = element;
    }
  }
  document.querySelector('#listAppareils').appendChild(zoneList);
}

// USTENSILES
// liste des ustensiles sans repétition
function getUstensilesFrom(recipes) {
  const allUstensiles = [];
  for (let i = 0; i < recipes.length; i += 1) {
    const ustensiles = recipes[i].ustensils;
    allUstensiles.push(ustensiles);
  }
  const ustensileNorepeat = new Set(allUstensiles.flat());
  return ustensileNorepeat;
}
// affichage des ustensiles
function displayUstensiles(ustensiles, filter) {
  document.querySelector('#listUstensiles').innerHTML = '';
  const zoneList = document.createElement('ul');
  zoneList.setAttribute('class', 'list-unstyled row');
  zoneList.setAttribute('id', 'listItemUstensiles');
  for (const element of ustensiles) {
    if (!filter?.includes(element)) {
      const list = document.createElement('li');
      list.setAttribute('class', 'ustensileListItem col-4');
      zoneList.appendChild(list);
      list.innerText = element;
    }
  }
  document.querySelector('#listUstensiles').appendChild(zoneList);
}

// FILTRE DE RECHERCHE SUR LES TAGLISTS
// Récupération des datas
const data = {
  appareils: getAppareilsFrom(recipes),
  ingredients: getIngredientsFrom(recipes),
  ustensiles: getUstensilesFrom(recipes),
  mainSearch: '',
  searchLength: 0,
};

// Filtre sur les tags ingrédients
const handlerIng = {
  set(obj, prop, value) {
    function searchIngredient(array, searchString) {
      const filter = array.filter((ingredients) => ingredients.toLowerCase().includes(searchString.toLowerCase()));
      return filter;
    }
    obj[prop] = value;
    switch (prop) {
      case 'filtredIngredient':
        displayIngredients(value);
        break;
      case 'mainSearch':
        if (value.length > 2 && data.searchLength <= value.length) {
          proxyIng.filtredIngredient = searchIngredient(data.filtredIngredient, value);
        } else if (value.length > 2 && data.searchLength > value.length) {
          proxyIng.filtredIngredient = searchIngredient(data.ingredients, value);
        } else {
          proxyIng.filtredIngredient = [...data.ingredients];
        }
        break;
      default:
        break;
    }
    return true;
  },
};

let proxyIng = new Proxy(data, handlerIng);

proxyIng.filtredIngredient = getIngredientsFrom(recipes);
//
document.querySelector('#searchIngredient').addEventListener('keyup', (e) => {
  proxyIng.mainSearch = e.target.value;
  proxyIng.searchLength = e.target.value.length;
});

// Filtre sur les tag appareils
const handlerApp = {
  set(obj, prop, value) {
    function searchAppareil(array, searchString) {
      const filter = array.filter((appareils) => appareils.toLowerCase().includes(searchString.toLowerCase()));
      return filter;
    }
    obj[prop] = value;
    switch (prop) {
      case 'filtredAppareil':
        displayAppareils(value);
        break;
      case 'mainSearch':
        if (value.length > 2 && data.searchLength <= value.length) {
          proxyApp.filtredAppareil = searchAppareil(data.filtredAppareil, value);
        } else if (value.length > 2 && data.searchLength > value.length) {
          proxyApp.filtredAppareil = searchAppareil(data.appareils, value);
        } else {
          proxyApp.filtredAppareil = [...data.appareils];
        }
        break;
      default:
        break;
    }
    return true;
  },
};

let proxyApp = new Proxy(data, handlerApp);

proxyApp.filtredAppareil = getAppareilsFrom(recipes);

document.querySelector('#searchAppareil').addEventListener('keyup', (e) => {
  proxyApp.mainSearch = e.target.value;
  proxyApp.searchLength = e.target.value.length;
});

// Filtre sur les tag ustensiles
const handlerUte = {
  set(obj, prop, value) {
    function searchUstensiles(array, searchString) {
      const filter = array.filter((ustensiles) => ustensiles.toLowerCase().includes(searchString.toLowerCase()));
      return filter;
    }
    obj[prop] = value;
    switch (prop) {
      case 'filtredUstensile':
        displayUstensiles(value);
        break;
      case 'mainSearch':
        if (value.length > 2 && data.searchLength <= value.length) {
          proxyUte.filtredUstensile = searchUstensiles(data.filtredUstensile, value);
        } else if (value.length > 2 && data.searchLength > value.length) {
          proxyUte.filtredUstensile = searchUstensiles(data.ustensiles, value);
        } else {
          proxyUte.filtredUstensile = [...data.ustensiles];
        }
        break;
      default:
        break;
    }
    return true;
  },
};

let proxyUte = new Proxy(data, handlerUte);

proxyUte.filtredUstensile = getUstensilesFrom(recipes);

document.querySelector('#searchUstensiles').addEventListener('keyup', (e) => {
  proxyUte.mainSearch = e.target.value;
  proxyUte.searchLength = e.target.value.length;
});

// MISE EN PLACE DES LISTES INGREDIENTS/APPAREILS/USTENSILES
export default function displayTags(recipes, filter) {
  const ingredients = getIngredientsFrom(recipes);
  displayIngredients(ingredients, filter.ingredients);
  const appareils = getAppareilsFrom(recipes);
  displayAppareils(appareils, filter.appliance);
  const ustensiles = getUstensilesFrom(recipes);
  displayUstensiles(ustensiles, filter.ustensils);
  taglist();
}
