import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from './RecipeListItem';
import {css} from 'emotion';

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
            {props.recipes.map((recipe, index) => {
                return (<RecipeListItem key={index}
                                        recipe={recipe}/>);
            })}
        </div>
    );
};

RecipeListDay.propTypes = {
    date: PropTypes.object.isRequired,
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
};

RecipeListDay.defaultProps = {};

export default RecipeListDay;