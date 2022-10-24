export function displayRecipes(recipes){
    const contentElt = document.querySelector('.content');
    contentElt.innerHTML = ''
    recipes.forEach(recipes => {
        contentElt.innerHTML += `<p>${recipes.name}<p>`;
    });
}

export function search(array, searchString){
    const filter = array.filter(recipe => recipe.name.toLowerCase().includes(searchString.toLowerCase()))
    return filter;
}