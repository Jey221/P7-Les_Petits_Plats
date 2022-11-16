import { searchByTags } from './functions.js';
import recipes from './recipes.js';
// import displayCardRecipes from './card.js';

// CREATION DES TAGS APRES SELECTION DANS TAGLIST
function buildTagDom(event, data) {
  const tag = document.createElement('button');
  // mise en place d'une mise en forme selon la categorie
  if (event.target.classList.contains('ingredientListItem')) {
    tag.setAttribute('class', 'btn btn-primary d-flex justify-content-between ingredients');
  } else if (event.target.classList.contains('appareilListItem')) {
    tag.setAttribute('class', 'btn btn-success d-flex justify-content-between appliance');
  } else if (event.target.classList.contains('ustensileListItem')) {
    tag.setAttribute('class', 'btn btn-danger d-flex justify-content-between ustensils');
  }
  tag.setAttribute('type', 'button');
  tag.setAttribute('id', `tag_${event.target.innerText}`);
  tag.innerHTML = `
    <div class="texteTag">
      <p class="m-0">${event.target.innerText}</p>
    </div>
    <div class="iconTag">
      <i class="fa-regular fa-circle-xmark"></i>
    </div>`;
  // fermeture du tag
  tag.addEventListener('click', (event) => {
    event.preventDefault();
    event.path[2].remove(event.path[2]);
    const button = event.target.tagName === 'BUTTON' ? event.target : event.target.closest('button');
    const type = Array.from(button.classList).pop();
    const { filters } = data;
    const index = filters[type].findIndex((e) => e === button.querySelector('p').innerText);
    filters[type].splice(index, 1);
    // const filtredRecipes = searchByTags(data.filtredRecipes, event.target.innerText);
    // console.log('filtredRecipes', filtredRecipes);
    let newR;
    if (type === 'ingredients') {
      const ingFil = filters[type];
      const newR = recipes.filter((recipe) => {
        const ingredients = recipe.ingredients.map((ing) => ing.ingredient.toLowerCase());
        if (ingFil.every((r) => ingredients.includes(r))) {
          console.log('yes ingredients');
          return true;
        }
        console.log('no ingredients');
        return false;
      });
      data.filtredRecipes = [...newR];
      console.log('newR', newR);
      return newR;
    } if (type === 'ustensils') {
      const ustFil = filters[type];
      const newR = recipes.filter((recipe) => {
        const ustensiles = recipe.ustensils;
        if (ustFil.every((r) => ustensiles.includes(r))) {
          console.log('yes ustensils');
          return true;
        }
        console.log('no ustensils');
        return false;
      });
      data.filtredRecipes = [...newR];
      console.log('newR', newR);
      return newR;
    } if (type === 'appliance') {
      console.log('appliance');
      const appFil = filters[type];
      const newR = recipes.filter((recipe) => {
        const appliances = recipe.appliance.toLowerCase();
        console.log('filters[type]', appFil);
        console.log('appliances', appliances);
        if (appFil.every((r) => appliances.includes(r))) {
          console.log('yes appareil');
          return true;
        }
        console.log('no appareil');
        return false;
      });
      console.log('newR', newR);
      data.filtredRecipes = [...newR];
      return newR;
    }
    /*     data.filters = { ...filters };
    console.log('data.filters', data.filters);
    console.log(newR);
    data.filtredRecipes = [...newR];
    console.log('data.filtredRecipes', data.filtredRecipes);
    // removeTags(event);
 */
    return newR;
  });
  document.querySelector('.tags').appendChild(tag);
}

// ECOUTEUR SUR TAGLIST
export default function tags(data) {
  const { filters } = data;
  document.querySelector('#listItemIngredients').addEventListener('click', (event) => {
    buildTagDom(event, data);
    filters.ingredients.push(event.target.innerText);
    const filtredRecipes = searchByTags(data.filtredRecipes, event.target.innerText, 'ingredients');
    console.log('filtredRecipes next', filtredRecipes);
    data.filters = { ...filters };
    data.filtredRecipes = [...filtredRecipes];
  });
  document.querySelector('#listItemAppareils').addEventListener('click', (event) => {
    buildTagDom(event, data);
    filters.appliance.push(event.target.innerText);
    const filtredRecipes = searchByTags(data.filtredRecipes, event.target.innerText, 'appareils');
    data.filters = { ...filters };
    data.filtredRecipes = [...filtredRecipes];
  });
  document.querySelector('#listItemUstensiles').addEventListener('click', (event) => {
    buildTagDom(event, data);
    filters.ustensils.push(event.target.innerText);
    const filtredRecipes = searchByTags(data.filtredRecipes, event.target.innerText, 'ustensiles');
    data.filters = { ...filters };
    data.filtredRecipes = [...filtredRecipes];
  });
}

/* if (type === 'appliance') {
      console.log('appliance');
      const appFil = filters[type].toString();
      const newR = recipes.filter((recipe) => {
        const appliances = recipe.appliance.toLowerCase();
        console.log('filters[type]', appFil);
        console.log('appliances', appliances);
        if (appFil.every((r) => appliances.includes(r))) {
          console.log('yes appareil');
          return true;
        }
        console.log('no appareil');
        return false;
      });
      console.log('newR', newR);
      return newR;
    } */
/* if (type === 'appliance') {
      console.log('appliance');
      const appFil = filters[type];
      const newR = recipes.filter((recipe) => {
        const appliances = recipe.appliance.toLowerCase();
        console.log('filters[type]', appFil);
        console.log('appliances', appliances);
        if (appFil.every((r) => appliances.includes(r))) {
          console.log('yes appareil');
          return true;
        }
        console.log('no appareil');
        return false;
      });
      console.log('newR', newR);
      return newR;
    } */
