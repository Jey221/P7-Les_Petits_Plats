import { searchByTags } from './functions.js';

// CREATION DES TAGS APRES SELECTION DANS TAGLIST
function buildTagDom(event) {
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
  document.querySelector('.tags').appendChild(tag);
  // fermeture du tag
  document.querySelector('.tags').addEventListener('click', (e) => {
    e.preventDefault();
    e.path[2].remove(e.path[2]);
  });
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
  });
  document.querySelector('#listItemUstensiles').addEventListener('click', (event) => {
    buildTagDom(event);
  });
}
