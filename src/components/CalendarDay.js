import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'emotion';

const CalendarDay = props => {
    return (
        <div className={css({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: props.disabled ? 'pink' : 'darkred',
            cursor: 'pointer',
            '&:hover div': {
                color: props.disabled ? 'inherit' : 'white',
                backgroundColor: 'red'
            }
        })}
             onClick={props.handleDaySelection}>
            <div className={css({
                width: '4em',
                height: '4em',
                textAlign: 'center',
                fontSize: '1em',
                borderRadius: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: props.selected ? 'white' : 'inherit',
                backgroundColor: props.selected ? '#FF725C' : 'inherit'
            })}>
                <h1 className={css({
                    margin: 0
                })}>
                    {props.date.date()}
                </h1>
            </div>
        </div>
    );
};

CalendarDay.propTypes = {
    date: PropTypes.object.isRequired,
    disabled: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired,
    handleDaySelection: PropTypes.func.isRequired
};

CalendarDay.defaultProps = {};

export default CalendarDay;