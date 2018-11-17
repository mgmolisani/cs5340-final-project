import React from 'react';
import PropTypes from 'prop-types';
import CalendarEvent from './CalendarEvent';

const CalendarDay = props => {
    const events = [
        {
            title: 'Recipe 1',
            type: 'Pizza'
        }
    ];

    const style = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        date: {
            base: {
                color: 'blue'
            },
            disabled: {
                color: 'red'
            }
        }
    };

    const styleDate = () => {
        let computedStyle = {...style.date.base};
        if (props.disabled) {
            computedStyle = {
                ...computedStyle,
                ...style.date.disabled
            }
        }
        return computedStyle;
    };

    return (
        <div style={style.container}>
            <h1 style={styleDate()}>
                {props.date.date()}
            </h1>
            {events.map(event => {
                if (!props.disabled) {
                    return (
                        <CalendarEvent key={event.title}
                                       event={event}/>
                    );
                }
                return null;
            })}
        </div>
    );
};

CalendarDay.propTypes = {
    date: PropTypes.object.isRequired,
    disabled: PropTypes.bool.isRequired
};

CalendarDay.defaultProps = {};

export default CalendarDay;