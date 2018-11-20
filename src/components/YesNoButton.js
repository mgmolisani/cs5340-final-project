import React from 'react';
import PropTypes from 'prop-types';

const YesNoButton = props => {
    return (
        <button style={{
            color: props.confirm ? 'white' : 'red',
            backgroundColor: props.confirm ? 'red' : 'inherit',
            cursor: 'pointer',
            border: props.confirm ? 'none' : '2px solid red',
            borderRadius: '0.5em',
            whiteSpace: 'nowrap',
            padding: '0.5em',
            margin: '1em 1em 0 1em',
            fontSize: 22
        }}>
            {props.confirm ? 'Accept' : 'Cancel'}
        </button>
    );
};

YesNoButton.propTypes = {};

YesNoButton.defaultProps = {};

export default YesNoButton;