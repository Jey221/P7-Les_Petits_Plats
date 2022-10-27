export default function taglist(recipes){
    // INGREDIENTS
    const allIngredients = [];
    for (let i=0; i<recipes.length; i++) {
        let ingredients = recipes[i].ingredients;
        ingredients.map(({ingredient}) => {
            allIngredients.push(`${ingredient.toLowerCase()}`);
        });
    };

    console.log("ingredient array", [allIngredients]);
    const ingredientNorepeat = new Set(allIngredients);
    console.log("ingredient no repeat", ingredientNorepeat);

    // OUVERTURE TAG INGREDIENT
    document.querySelector('#btnIngredients').addEventListener('click', (e) => {
        document.querySelector('#btnIngredients').style.setProperty('display', 'none');
        document.querySelector('#taglistIngredients').style.setProperty('display', 'block');
        for (const element of ingredientNorepeat) {
            const list = document.createElement('p');
            document.querySelector('#listIngredient').appendChild(list);
            list.innerText = element;
            console.log(element);
        }        
    });
    // FERMETURE TAG INGREDIENT
    document.querySelector('#iconTagIngredient').addEventListener('click', (e) => {
        document.querySelector('#btnIngredients').style.setProperty('display', 'block');
        document.querySelector('#taglistIngredients').style.setProperty('display', 'none');
    });

    // APPAREILS
    const allAppareils = [];
    for (let i=0; i<recipes.length; i++) {
        let appareils = recipes[i].appliance;
            allAppareils.push(appareils);
    };

    const appareilNorepeat = new Set(allAppareils);

    // OUVERTURE TAG APPAREILS
    document.querySelector('#btnAppareils').addEventListener('click', (e) => {
        document.querySelector('#btnAppareils').style.setProperty('display', 'none');
        document.querySelector('#taglistAppareils').style.setProperty('display', 'block');
        for (const element of appareilNorepeat) {
            const list = document.createElement('p');
            document.querySelector('#listAppareils').appendChild(list);
            list.innerText = element;
        }        
    });
    // FERMETURE TAG APPAREILS
    document.querySelector('#iconTagAppareils').addEventListener('click', (e) => {
        document.querySelector('#btnAppareils').style.setProperty('display', 'block');
        document.querySelector('#taglistAppareils').style.setProperty('display', 'none');
    });


    // USTENSILES
    const allUstensiles = [];
    for (let i=0; i<recipes.length; i++) {
        let ustensiles = recipes[i].ustensils;
        allUstensiles.push(ustensiles);
    };

    const ustensileNorepeat = new Set(allUstensiles);

    // OUVERTURE TAG INGREDIENT
    document.querySelector('#btnUstensiles').addEventListener('click', (e) => {
        document.querySelector('#btnUstensiles').style.setProperty('display', 'none');
        document.querySelector('#taglistUstensiles').style.setProperty('display', 'block');
        for (const element of ustensileNorepeat) {
            const list = document.createElement('p');
            document.querySelector('#listUstensiles').appendChild(list);
            list.innerText = element;
        }        
    });
    // FERMETURE TAG INGREDIENT
    document.querySelector('#iconTagUstensiles').addEventListener('click', (e) => {
        document.querySelector('#btnUstensiles').style.setProperty('display', 'block');
        document.querySelector('#taglistUstensiles').style.setProperty('display', 'none');
    });


 return ingredientNorepeat, appareilNorepeat, ustensileNorepeat;
};
