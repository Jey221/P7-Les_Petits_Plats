import recipes from './recipes.js'
import displayCardRecipes from './card.js'
import search from './functions.js'
import taglist, { displayTags } from './taglist.js'

taglist(recipes);

let data = {
    recipes : [...recipes],
    mainSearch : '',
    searchLength : 0,
}

const handler = {
    set(obj, prop, value) {
        obj[prop] = value;
        switch(prop) {
            case 'filtredRecipes':
                displayCardRecipes(value);
                displayTags(value)
                break;
            case 'mainSearch':
            if(value.length > 2 && data.searchLength <= value.length){
                proxy.filtredRecipes = search(data.filtredRecipes, value);
            }else if(value.length > 2 && data.searchLength > value.length){
                proxy.filtredRecipes = search(data.recipes, value);
            }else{
                proxy.filtredRecipes = [...data.recipes];
            }
            break
            default:
                break;
        }
        return true;
    }
}

let proxy = new Proxy(data, handler);

proxy.filtredRecipes = [...recipes];

document.querySelector('#searchRecipesInput').addEventListener('keyup', (e) => {
    proxy.mainSearch = e.target.value
    proxy.searchLength = e.target.value.length;
})