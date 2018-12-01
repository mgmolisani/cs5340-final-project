import moment from 'moment';

const UOM = {
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
    info: 'Cook macaroni according to the package directions. Drain.',
    order: 1
};

const macNCheese = {
    id: 1,
    name: 'Mac and Cheese',
    description: 'Gooey and delicious two cheese blend.',
    icon: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/11/14/0/WU-0103_mac-and-cheese_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382541000580.jpeg',
    ingredients: [elbowMac, flour, cheddar, parm, butter],
    utensils: [pan, largeDish],
    steps: [macStep1, macStep2, macStep3, macStep4, macStep4, macStep4, macStep4, macStep4, macStep4, macStep4]
};

const macNotCheese = {
    id: 2,
    name: 'Mac and cheese, hold the cheese',
    description: 'Gooey and delicious no cheese blend.',
    icon: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/11/14/0/WU-0103_mac-and-cheese_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382541000580.jpeg',
    ingredients: [elbowMac, flour, butter],
    utensils: [pan, largeDish],
    steps: [macStep1, macStep2]
};

const plan1 = {
    recipes: [macNCheese],
    currentStep: 0,
    isFinished: false,
    date: moment('2018-11-17')
};

const plan2 = {
    recipes: [macNCheese, macNotCheese],
    currentStep: 0,
    isFinished: false,
    date: moment('2018-11-18')
};

const plan3 = {
    recipes: [macNCheese, macNotCheese],
    currentStep: 0,
    isFinished: false,
    date: moment('2018-11-21')
};

const plan4 = {
    recipes: [macNotCheese],
    currentStep: 0,
    isFinished: false,
    date: moment('2018-11-23')
};

const schedule = [plan1, plan2, plan3, plan4];

export const data = {
    schedule: schedule,
    recipes: [macNCheese, macNotCheese]
};