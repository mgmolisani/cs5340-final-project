import React from 'react';
import PropTypes from 'prop-types';

const StartRecipeButton = props => {
    return (
        <button style={{
            color: 'white',
            backgroundColor: 'red',
            cursor: 'pointer',
            border: 0,
            borderRadius: '0.5em',
            whiteSpace: 'nowrap',
            padding: '0.5em',
            margin: '0.5em 0',
            fontSize: 18
        }}>
            <span className='fa fa-play-circle'/> Start
        </button>
    );
};

StartRecipeButton.propTypes = {};

StartRecipeButton.defaultProps = {};

export default StartRecipeButton;