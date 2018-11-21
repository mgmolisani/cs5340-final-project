import React from 'react';
import RecipeCard from './RecipeCard';
import {css} from 'emotion';

const RecipeCardContainer = ({recipes, selectRecipe}) => {

    const myRecipes = recipes.map((recipe, i) => {
        return <RecipeCard key={recipes[i].id}
                           id={recipes[i].id}
                           name={recipes[i].name}
                           description={recipes[i].description}
                           icon={recipes[i].icon}
                           selected={recipes[i].selected}
                           selectRecipe={selectRecipe}/>;
    });

    return (
        <div style={{
            flex: '1 1 auto',
            display: 'flex',
            flexWrap: 'wrap',
            overflowY: 'auto',
            padding: '1em',
            boxShadow: 'inset 0px 0px 25px 0px rgba(0,0,0,0.75)',
            backgroundColor: 'darkgrey',
            justifyContent: 'center'
        }}>
            {myRecipes}
        </div>
    );

};

export default RecipeCardContainer;