import React from 'react';
import PropTypes from 'prop-types';

const CalendarEvent = props => {
    return (
        <a>
            {props.event.title}
        </a>
    );
};

CalendarEvent.propTypes = {
    event: PropTypes.object.isRequired
};

CalendarEvent.defaultProps = {};

export default CalendarEvent;