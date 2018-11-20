import React from 'react';
import {css} from 'emotion';

const AddToCartButton = props => {
    return (
        <button className={css({
            color: 'black',
            backgroundColor: 'inherit',
            cursor: 'pointer',
            border: 0,
            borderRadius: '0.5em',
            whiteSpace: 'nowrap',
            padding: '0.5em',
            margin: '0.5em',
            verticalAlign: 'middle',
            '&:hover': {
                color: 'red'
            }
        })}>
            <span className='fa fa-cart-plus fa-2x'/>
        </button>
    );
};

AddToCartButton.propTypes = {};

AddToCartButton.defaultProps = {};

export default AddToCartButton;