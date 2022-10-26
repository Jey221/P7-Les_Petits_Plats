function cardFactory(recipes) {
    const article = document.createElement('article');
    article.setAttribute('class', 'col');

    //création des cartes de recette
    const card = document.createElement('div');
    card.setAttribute('class', 'card h-100');
    article.appendChild(card);

    //création des images de recette
    const image = document.createElement('img');
    image.setAttribute('src', './assets/imgRecipes.svg');
    image.setAttribute('role', 'img');
    card.appendChild(image);

    //création des titres de recette
    const titleRecipe = document.createElement('div');
    titleRecipe.setAttribute('class', 'card-bodyTitle');
    card.appendChild(titleRecipe);
    const title = document.createElement('h5');
    titleRecipe.appendChild(title);
    title.innerText = `${recipes.name}`
    
    //création des textes(ingrédients et description recette) de recette
    const textRecipe = document.createElement('div');
    textRecipe.setAttribute('class', 'card-bodyText');
    card.appendChild(textRecipe);

    // création des ingrédients de recette
    const ingredientsRecipe = document.createElement('div');
    ingredientsRecipe.setAttribute('class', 'card_ingredients')
    textRecipe.appendChild(ingredientsRecipe);
    recipes.ingredients.map(element => {
        var p = document.createElement('p');
        p.className = 'mb-0';
        p.innerHTML = `<span class="font-weight-bold">${element.ingredient}</span><span>${element.quantity==undefined ? '1': element.quantity }</span><span>${element.unit == 'grammes' ?'g' : element.unit== 'cl'? element.unit:  element.unit== 'ml'? element.unit:  element.unit == 'cuillère à soupe'? ' Càs': element.unit == 'cuillères à soupe'? ' Càs': '' }</span>`;
        ingredientsRecipe.appendChild(p);
    });

    // création des descriptions de recette
    const descriptionsRecipe = document.createElement('div');
    descriptionsRecipe.setAttribute('class', 'card_description')
    textRecipe.appendChild(descriptionsRecipe);
    const recette = document.createElement('p');
    recette.setAttribute('class', 'recette');
    descriptionsRecipe.appendChild(recette);
    recette.innerText = `${recipes.description}`

    return article;
}

export default function displayCardRecipes(recipes){
    const content = document.querySelector('#contentRecipes');
    content.innerHTML = '';
    recipes.forEach((recipes) => {
        const card = cardFactory(recipes);
        content.appendChild(card);
    });
}
