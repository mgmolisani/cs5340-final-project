import React from 'react';
import {css} from 'emotion';
import AddToCartModal from "./AddToCartModal";

const AddToCartButton = props => {
    return (
        <button onClick={()=> props.displayModal()} className={css({
            color: 'black',
            backgroundColor: 'inherit',
            cursor: 'pointer',
            border: 0,
            borderRadius: '0.5em',
            whiteSpace: 'nowrap',
            padding: '0.5em',
            verticalAlign: 'middle',
            '&:hover': {
                color: 'red'
            }
        })}>
            <span  className='fa fa-cart-plus fa-2x'/>
        </button>
    );
};
AddToCartButton.propTypes = {};

AddToCartButton.defaultProps = {};

export default AddToCartButton;