function buildTagDom(event) {
  const tag = document.createElement('button');
  if (event.target.classList.contains('ingredientListItem')) {
    tag.setAttribute('class', 'btn btn-primary d-flex justify-content-between');
  } else if (event.target.classList.contains('appareilListItem')) {
    tag.setAttribute('class', 'btn btn-success d-flex justify-content-between');
  } else if (event.target.classList.contains('ustensileListItem')) {
    tag.setAttribute('class', 'btn btn-danger d-flex justify-content-between');
  }
  tag.setAttribute('type', 'button');
  tag.setAttribute('id', `tag_${event.target.innerHTML}`);
  tag.innerHTML = `
  <div class="texteTag">
    <p class="m-0">${event.target.innerHTML}</p>
  </div>
  <div class="iconTag">
    <i class="fa-regular fa-circle-xmark"></i>
  </div>`;
  document.querySelector('.tags').appendChild(tag);
  document.querySelector('.tags').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(tag);
    console.log(e.target);
    console.log(document.getElementById(`tag_${event.target.innerHTML}`));
    closeTag(e);
    /* console.log(document.getElementById(`tag_${e.target.innerHTML}`));
    document.getElementById(`tag_${e.target.innerHTML}`).remove(document.getElementById(`tag_${e.target.innerHTML}`));
    tag.remove(tag); */
  });
}

function closeTag(e) {
  console.log(e.path);
  // e.path.remove(e.path);
  // e.target.remove(e.target);
  console.log(document.getElementById(`tag_${e.target.innerHTML}`));
}

export default function tags() {
  document.querySelector('#listItemIngredients').addEventListener('click', (event) => {
    buildTagDom(event);
  });
  document.querySelector('#listItemAppareils').addEventListener('click', (event) => {
    buildTagDom(event);
  });
  document.querySelector('#listItemUstensiles').addEventListener('click', (event) => {
    buildTagDom(event);
  });
}
