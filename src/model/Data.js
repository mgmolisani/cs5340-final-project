import moment from 'moment';
import * as React from 'react';

export const UOM = {
    'TSP': {
        id: 1,
        displayName: 'teaspoon',
        shortName: 'tsp'
    },
    'TBSP': {
        id: 2,
        displayName: 'tablespoon',
        shortName: 'tbsp'
    },
    'FLOZ': {
        id: 3,
        displayName: 'fluid ounce',
        shortName: 'fl oz'
    },
    'CUP': {
        id: 4,
        displayName: 'cup',
        shortName: 'cup'
    },
    'PT': {
        id: 5,
        displayName: 'pint',
        shortName: 'pt'
    },
    'QT': {
        id: 6,
        displayName: 'quart',
        shortName: 'qt'
    },
    'GAL': {
        id: 7,
        displayName: 'gallon',
        shortName: 'gal'
    },
    'L': {
        id: 8,
        displayName: 'liter',
        shortName: 'l'
    },
    'LB': {
        id: 9,
        displayName: 'pound',
        shortName: 'lb'
    },
    'OZ': {
        id: 10,
        displayName: 'ounce',
        shortName: 'oz'
    },
    'G': {
        id: 11,
        displayName: 'gram',
        shortName: 'g'
    },
    'EACH': {
        id: 12,
        displayName: 'each',
        shortName: 'ea'
    },
};

Object.freeze(UOM);

const elbowMac = {
    name: 'Elbow Macaroni',
    quantity: 8,
    uom: UOM.OZ
};

const flour = {
    name: 'Flour',
    quantity: 2.5,
    uom: UOM.TBSP
};

const cheddar = {
    name: 'Cheddar Cheese',
    quantity: 2,
    uom: UOM.CUP
};

const parm = {
    name: 'Parmesan Cheese',
    quantity: 0.5,
    uom: UOM.CUP
};

const butter = {
    name: 'Butter',
    quantity: 2,
    uom: UOM.TBSP
};

const pan = {
    name: 'Sauce Pan',
    quantity: 1
};

const largeDish = {
    name: 'Large Dish',
    quantity: 1
};

const t1 = {
    name: 'Whole Turkey',
    quantity: 1,
    uom: UOM.EACH
};

const t2 = {
    name: 'Celery',
    quantity: 4,
    uom: UOM.EACH
};

const t3 = {
    name: 'Kosher Salt',
    quantity: 2,
    uom: UOM.CUP
};

const t4 = {
    name: 'White Onion',
    quantity: 2,
    uom: UOM.EACH
};



const macStep5 = {
    info: 'Melt butter or margarine in a skillet over medium heat. Add breadcrumbs and brown. Spread over the macaroni and cheese to cover.',
    order: 5
};
const macStep4 = {
    info: 'Put macaroni in large casserole dish, and pour sauce over macaroni. Stir well.',
    order: 4
};
const macStep3 = {
    info: 'Stir in cheeses, and cook over low heat until cheese is melted and the sauce is a little thick.',
    order: 3
};

const macStep2 = {
    info: 'In a saucepan, melt butter or margarine over medium heat.',
    order: 2
};

const macStep1 = {
    info: 'Boil macaroni. Drain.',
    order: 1
};


const tur1 = {
    info: 'Rub the turkey inside and out with the kosher salt.',
    order: 1
};

const tur2 = {
    info: 'Place the bird in a large stock pot, and cover with cold water. Place in the refrigerator, and allow the turkey to soak in the salt and water mixture 12 hours, or overnight',
    order: 2
};

const tur3 = {
    info: 'Preheat oven to 350 degrees F (175 degrees C). Thoroughly rinse the turkey, and discard the brine mixture.',
    order: 3
};

const tur4 = {
    info: 'Brush the turkey with 1/2 the melted butter. Place breast side down on a roasting rack in a shallow roasting pan.',
    order: 4
};

const tur5 = {
    info: 'Brush the turkey with 1/2 the melted butter. Place breast side down on a roasting rack in a shallow roasting pan. ',
    order: 5
};

const tur6 = {
    info: ' Stuff the turkey cavity with 1 onion, 1/2 the carrots, 1/2 the celery, 1 sprig of thyme, and the bay leaf.',
    order: 6
};


const macNCheese = {
    id: 1,
    name: 'Mac and Cheese',
    description: 'Gooey and delicious two cheese blend.',
    icon: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/11/14/0/WU-0103_mac-and-cheese_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382541000580.jpeg',
    ingredients: [elbowMac, flour, cheddar, parm, butter],
    utensils: [pan, largeDish],
    steps: [macStep1, macStep2, macStep3, macStep4]
};

const macNotCheese = {
    id: 2,
    name: 'Thanksgiving Turkey',
    description: 'Perfect for Thanksgiving with family and friends',
    icon: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/8/12/0/FN-Thanksgiving-2010_Thanksgiving-Turkey_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382539519750.jpeg',
    ingredients: [t1, t2, t3, t4],
    utensils: [pan, largeDish],
    steps: [tur1, tur2, tur3,tur4,tur5,tur6]
};

const plan1 = {
    id: 1,
    recipe: macNCheese,
    currentStep: 0,
    isFinished: false,
    date: moment('2018-11-17')
};

const plan2 = {
    id: 2,
    recipe: macNotCheese,
    currentStep: 0,
    isFinished: false,
    date: moment('2018-12-18')
};

const plan3 = {
    id: 3,
    recipe: macNCheese,
    currentStep: 0,
    isFinished: false,
    date: moment('2018-12-21')
};

const plan4 = {
    id: 4,
    recipe: macNotCheese,
    currentStep: 0,
    isFinished: false,
    date: moment('2018-12-21')
};

const recipes = [macNCheese, macNotCheese];


const groceries = [];


const schedule = [plan1, plan2, plan3, plan4];

const DataService = {

    findAllRecipes: () => {
        return Promise.resolve(recipes);
    },

    findRecipeById: id => {
        return Promise.resolve(recipes.find(recipe => recipe.id === id));
    },

    findAllGroceries: () => {
        return Promise.resolve(groceries);
    },

    addIngredientToGroceries: ing => {
        let i = groceries.findIndex(item => {return(item.name === ing.name)});
        if(i >= 0) {
            if(groceries[i].uom.id === ing.uom.id) {
                let qty = groceries[i].quantity;
                groceries.splice(i, 1, {name: ing.name, quantity: qty + ing.quantity, uom: ing.uom});
            } else {
                alert(ing.name + ' already exists on your grocery list with a different unit of measurement.')
            }
        } else {
            groceries.splice(0, 0, ing);
        }
        return Promise.resolve(groceries);
    },

    deleteIngredientFromGroceries: name => {
        groceries.splice(groceries.findIndex(item => {return(item.name === name)}), 1)
        return Promise.resolve(groceries)
    },

    addRecipeToSchedule: (recipeId, dates) => {
        const recipe = recipes.find(recipe => recipe.id === recipeId);
        const newScheduledRecipes = dates.map(date => ({
            id: Math.floor(Math.random() * Math.floor(1000000000)),
            recipe: recipe,
            currentStep: 0,
            isFinished: false,
            date
        }));
        newScheduledRecipes.map(scheduledRecipe => schedule.push(scheduledRecipe));
        return Promise.resolve(newScheduledRecipes);
    },

    findScheduledRecipesForDate: date => {
        return Promise.resolve(schedule.filter(scheduleItem => scheduleItem.date.isSame(date, 'day')));
    },

    findScheduledRecipeById: id => {
        return Promise.resolve(schedule.find(scheduledRecipe => scheduledRecipe.id === id));
    },

    changeCurrentStep: (id, currentStep) => {
        return Promise.resolve(schedule.find(scheduledRecipe => scheduledRecipe.id === id).currentStep = currentStep);
    },

    finishRecipe: id => {
        const scheduledRecipe = schedule.find(scheduledRecipe => scheduledRecipe.id === id);
        scheduledRecipe.currentStep = 0;
        scheduledRecipe.isFinished = true;
        return Promise.resolve(scheduledRecipe);
    },

    resetRecipe: id => {
        const scheduledRecipe = schedule.find(scheduledRecipe => scheduledRecipe.id === id);
        scheduledRecipe.currentStep = 0;
        scheduledRecipe.isFinished = false;
        return Promise.resolve(scheduledRecipe);
    },

    addRecipeToGroceryList: recipeId => {
        recipes.find(recipe => recipe.id === recipeId).ingredients.map(ing => {
            let i = groceries.findIndex(item => {return(item.name === ing.name)});
            if(i >= 0) {
                if(groceries[i].uom.id === ing.uom.id) {
                    let qty = groceries[i].quantity;
                    groceries.splice(i, 1, {name: ing.name, quantity: qty + ing.quantity, uom: ing.uom});
                } else {
                    alert(ing.name + ' already exists on your grocery list with a different unit of measurement.'
                    + ' Please change the unit of measurement on either the recipe or the grocery list.')
                }
            } else {
                groceries.push(ing)
            }
        });

        return Promise.resolve(groceries);
    }
};

export default DataService;