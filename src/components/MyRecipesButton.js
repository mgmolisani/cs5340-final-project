import React from 'react'

const MyRecipesButton = (props) => {

    if(props === 'schedule') {
        return(
            <button>Schedule Recipe(s)</button>
        )
    } else {
        return(
            <button>Add Recipe</button>
        )
    }
}

export default MyRecipesButton