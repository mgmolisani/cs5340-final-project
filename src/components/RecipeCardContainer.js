import React from 'react';
import RecipeCard from './RecipeCard';
import {css} from 'emotion';

const RecipeCardContainer = ({recipes, selectRecipe}) => {

    const myRecipes = recipes.map((recipe) => {
        return <RecipeCard key={recipe.id}
                           id={recipe.id}
                           name={recipe.name}
                           description={recipe.description}
                           icon={recipe.icon}
                           selected={recipe.selected}
                           selectRecipe={selectRecipe}/>;
    });

    return (
        <div className={css({
            flex: '1 1 auto',
            display: 'flex',
            flexWrap: 'wrap',
            overflowY: 'auto',
            padding: '1em',
            boxShadow: 'inset 0px 0px 25px 0px rgba(0,0,0,0.75)',
            backgroundColor: 'darkgrey',
            justifyContent: 'center'
        })}>
            {myRecipes}
        </div>
    );

};

export default RecipeCardContainer;