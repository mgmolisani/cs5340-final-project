import React from 'react'
import RecipeCard from './RecipeCard'

const RecipeCardContainer = ({ recipes }) => {

    const myRecipes = recipes.map((recipe, i) => {
        return <RecipeCard key={recipes[i].id}
                     id={recipes[i].id}
                     name={recipes[i].name}
                     description={recipes[i].description}
                     icon={recipes[i].icon}/>
    });

    return(
        <div>
            {myRecipes}
        </div>
    )

};

export default RecipeCardContainer;