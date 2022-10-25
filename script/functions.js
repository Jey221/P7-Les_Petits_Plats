/* export function displayRecipes(recipes){
    const contentElt = document.querySelector('.card-title');
    contentElt.innerHTML = ''
    recipes.forEach(recipes => {
        contentElt.innerHTML += `<p>${recipes.name}<p>`;
    });
} 
 */
export default function search(array, searchString){
    const filter = array.filter(recipe => recipe.name.toLowerCase().includes(searchString.toLowerCase()))
    // console.log('filter', filter);
    return filter;
}
