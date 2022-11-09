import { searchByTags } from './functions.js';
// import recipes from './recipes.js';

// CREATION DES TAGS APRES SELECTION DANS TAGLIST
function buildTagDom(event, data) {
  const tag = document.createElement('button');
  // mise en place d'une mise en forme selon la categorie
  if (event.target.classList.contains('ingredientListItem')) {
    tag.setAttribute('class', 'btn btn-primary d-flex justify-content-between');
  } else if (event.target.classList.contains('appareilListItem')) {
    tag.setAttribute('class', 'btn btn-success d-flex justify-content-between');
  } else if (event.target.classList.contains('ustensileListItem')) {
    tag.setAttribute('class', 'btn btn-danger d-flex justify-content-between');
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
    console.log('close', event.target.tagName);
    const button = event.target.tagName === 'BUTTON' ? event.target : event.target.closest('button');
    const type = Array.from(button.classList).pop();
    console.log(type);
    const { filters } = data;
    console.log(filters[type]);
    const index = filters[type].findIndex((e) => e === button.querySelector('p').innerText);
    console.log(index);
    filters[type].splice(index, 1);
    data.filters = { ...filters };
    // const filtredRecipes = searchByTags(data.recipes, event.target.innerText, 'appareils');
    // e.path[2].remove(e.path[2]);
    // removeTags();
  });
  document.querySelector('.tags').appendChild(tag);
}

// ECOUTEUR SUR TAGLIST
export default function tags(data) {
  const { filters } = data;
  document.querySelector('#listItemIngredients').addEventListener('click', (event) => {
    buildTagDom(event);
    filters.ingredients.push(event.target.innerText);
    const filtredRecipes = searchByTags(data.filtredRecipes, event.target.innerText, 'ingredients');
    data.filters = { ...filters };
    data.filtredRecipes = [...filtredRecipes];
  });
  document.querySelector('#listItemAppareils').addEventListener('click', (event) => {
    buildTagDom(event);
    filters.appliance.push(event.target.innerText);
    const filtredRecipes = searchByTags(data.filtredRecipes, event.target.innerText, 'appareils');
    data.filters = { ...filters };
    data.filtredRecipes = [...filtredRecipes];
  });
  document.querySelector('#listItemUstensiles').addEventListener('click', (event) => {
    buildTagDom(event);
    filters.ustensils.push(event.target.innerText);
    const filtredRecipes = searchByTags(data.filtredRecipes, event.target.innerText, 'ustensiles');
    data.filters = { ...filters };
    data.filtredRecipes = [...filtredRecipes];
  });
}
