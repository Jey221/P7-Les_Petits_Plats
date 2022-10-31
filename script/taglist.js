export default function taglist(recipes) {
/*     // INGREDIENTS
    const allIngredients = [];
    for (let i=0; i<recipes.length; i++) {
        let ingredients = recipes[i].ingredients;
        ingredients.map(({ingredient}) => {
            allIngredients.push(`${ingredient.toLowerCase()}`);
        });
    };

    console.log("ingredient array", [allIngredients]);
    const ingredientNorepeat = new Set(allIngredients);
    console.log("ingredient no repeat", ingredientNorepeat);

 */ // OUVERTURE TAG INGREDIENT
  document.querySelector('#btnIngredients').addEventListener('click', (e) => {
    document.querySelector('#btnIngredients').style.setProperty('display', 'none');
    document.querySelector('#taglistIngredients').style.setProperty('display', 'block');
    /*         const zoneList = document.createElement('ul');
        zoneList.setAttribute('class', 'zoneIngredientTag');
        document.querySelector('#listIngredient').appendChild(zoneList);
        for (const element of ingredientNorepeat) {
            const list = document.createElement('li');
            zoneList.appendChild(list);
            list.innerText = element;
            console.log(element);
        };
 */
    document.querySelector('#btnUstensiles').style.setProperty('display', 'block');
    document.querySelector('#taglistUstensiles').style.setProperty('display', 'none');
    document.querySelector('#btnAppareils').style.setProperty('display', 'block');
    document.querySelector('#taglistAppareils').style.setProperty('display', 'none');
  });
  // FERMETURE TAG INGREDIENT
  document.querySelector('#iconTagIngredient').addEventListener('click', (e) => {
    document.querySelector('#btnIngredients').style.setProperty('display', 'block');
    document.querySelector('#taglistIngredients').style.setProperty('display', 'none');
  });

  // APPAREILS
  const allAppareils = [];
  for (let i = 0; i < recipes.length; i++) {
    const appareils = recipes[i].appliance;
    allAppareils.push(appareils);
  }

  const appareilNorepeat = new Set(allAppareils);

  // OUVERTURE TAG APPAREILS
  document.querySelector('#btnAppareils').addEventListener('click', (e) => {
    document.querySelector('#btnAppareils').style.setProperty('display', 'none');
    document.querySelector('#taglistAppareils').style.setProperty('display', 'block');
    for (const element of appareilNorepeat) {
      const list = document.createElement('p');
      document.querySelector('#listAppareils').appendChild(list);
      list.innerText = element;
    }
    document.querySelector('#btnIngredients').style.setProperty('display', 'block');
    document.querySelector('#taglistIngredients').style.setProperty('display', 'none');
    document.querySelector('#btnUstensiles').style.setProperty('display', 'block');
    document.querySelector('#taglistUstensiles').style.setProperty('display', 'none');
  });
  // FERMETURE TAG APPAREILS
  document.querySelector('#iconTagAppareils').addEventListener('click', (e) => {
    document.querySelector('#btnAppareils').style.setProperty('display', 'block');
    document.querySelector('#taglistAppareils').style.setProperty('display', 'none');
  });

  // USTENSILES
  const allUstensiles = [];
  for (let i = 0; i < recipes.length; i++) {
    const ustensiles = recipes[i].ustensils;
    allUstensiles.push(ustensiles);
  }

  const ustensileNorepeat = new Set(allUstensiles);

  // OUVERTURE TAG USTENSILES
  document.querySelector('#btnUstensiles').addEventListener('click', (e) => {
    document.querySelector('#btnUstensiles').style.setProperty('display', 'none');
    document.querySelector('#taglistUstensiles').style.setProperty('display', 'block');
    for (const element of ustensileNorepeat) {
      const list = document.createElement('p');
      document.querySelector('#listUstensiles').appendChild(list);
      list.innerText = element;
    }
    document.querySelector('#btnIngredients').style.setProperty('display', 'block');
    document.querySelector('#taglistIngredients').style.setProperty('display', 'none');
    document.querySelector('#btnAppareils').style.setProperty('display', 'block');
    document.querySelector('#taglistAppareils').style.setProperty('display', 'none');
  });
  // FERMETURE TAG USTENSILES
  document.querySelector('#iconTagUstensiles').addEventListener('click', (e) => {
    document.querySelector('#btnUstensiles').style.setProperty('display', 'block');
    document.querySelector('#taglistUstensiles').style.setProperty('display', 'none');
  });

  return appareilNorepeat, ustensileNorepeat;
}
// MISE EN PLACE DES LISTES INGREDIENTS/APPAREILS/USTENSILES
export function displayTags(recipes) {
  const ingredients = getIngredientsFrom(recipes);
  displayIngredients(ingredients);
}

// INGREDIENTS
function getIngredientsFrom(recipes) {
  const allIngredients = [];
  for (let i = 0; i < recipes.length; i++) {
    const { ingredients } = recipes[i];
    ingredients.map(({ ingredient }) => {
      allIngredients.push(`${ingredient.toLowerCase()}`);
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

// USTENSILES
