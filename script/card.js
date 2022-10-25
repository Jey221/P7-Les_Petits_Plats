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
    const listIngredients = document.createElement('ul');
    listIngredients.setAttribute('class', 'listIngredients');
    ingredientsRecipe.appendChild(listIngredients);
    // console.log(recipes.ingredients);

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
