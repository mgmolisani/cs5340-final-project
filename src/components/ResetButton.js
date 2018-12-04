import React from 'react';
import {css} from 'emotion';
import DataService from '../model/Data';

const ResetButton = props => {
    return (
        <button className={css({
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
        })}
                onClick={() => {
                    DataService.resetRecipe(props.id)
                        .then(scheduledRecipe => props.updateScheduledRecipe(scheduledRecipe));
                }}>
            <span className='fa fa-refresh fa-2x'/>
        </button>
    );
};

ResetButton.propTypes = {};

ResetButton.defaultProps = {};

export default ResetButton;