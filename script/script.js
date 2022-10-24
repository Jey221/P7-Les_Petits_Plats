import recipes from './recipes.js'
import {displayRecipes, search} from './functions.js'

let data = {
    recipes : [...recipes],
    mainSearch : '',
    searchLength : 0,
}

const handler = {
    set(obj, prop, value) {
        console.log('value',value);
        obj[prop] = value;
        switch(prop) {
            case 'filtredRecipes':
                displayRecipes(value);
                break;
            case 'mainSearch':
            console.log(`vous avez cherché : ${value}`);
            if(value.length > 2 && data.searchLength < value.length){
                console.log('hello');
                proxy.filtredRecipes = search(data.filtredRecipes, value)
            }else if(value.length > 2 && data.searchLength > value.length){
                proxy.filtredRecipes = search(data.recipes, value)
            }else{
                proxy.filtredRecipes = [...data.recipes]
            }
            break
            default:
                break;
        }
        return true;
    }
}

let proxy = new Proxy(data, handler)

proxy.filtredRecipes = [...recipes];

document.querySelector('#search').addEventListener('input', (e) => {
    proxy.mainSearch = e.target.value
    proxy.searchLength = e.target.value.length;
    console.log(data.mainSearch);
})