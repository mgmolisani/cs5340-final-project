import React from 'react';
import {Link} from 'react-router-dom';
import {css} from 'emotion';

const StartRecipeButton = props => {
    return (
        <Link to={`/cooking/${props.id}`}>
            <button className={css({
                color: 'white',
                backgroundColor: 'red',
                cursor: 'pointer',
                border: 0,
                borderRadius: '0.5em',
                whiteSpace: 'nowrap',
                padding: '0.5em',
                margin: '0.5em',
                fontSize: 18,
                '&:hover': {
                    backgroundColor: '#FF725C'
                }
            })} onClick={props.onClick}>
                {props.children}
            </button>
        </Link>
    );
};

StartRecipeButton.propTypes = {};

StartRecipeButton.defaultProps = {};

export default StartRecipeButton;