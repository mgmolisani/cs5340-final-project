import React from 'react';
import RecipeListItem from './RecipeListItem';
import {css} from 'emotion';
import PropTypes from 'prop-types';

const RecipeListDay = props => {
    return (
        <div style={{
            padding: '0.5em'
        }}>
            <h3 className={css({
                padding: '0 1em',
                color: '#505050',
                textShadow: '0px 1px 0px rgba(255,255,255,.5)'
            })}>
                {props.date.format('MMMM Do')}
            </h3>
            {props.recipes.length > 0
                ? props.recipes.map(scheduledRecipe => {
                    return <RecipeListItem key={scheduledRecipe.id}
                                           scheduledRecipe={scheduledRecipe}/>;
                })
                : <h4 className={css({
                    padding: '1em',
                    color: '#505050',
                    textAlign: 'center',
                    textShadow: '0px 1px 0px rgba(255,255,255,.5)'
                })}>
                    {`You do not have any recipes scheduled for ${props.date.format('MMMM Do')}`}
                    <br/><br/>
                    Click on My Recipes to start scheduling meals.
                </h4>
            }
        </div>
    );
};

RecipeListDay.propTypes = {
    date: PropTypes.object.isRequired,
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
};

RecipeListDay.defaultProps = {};

export default RecipeListDay;