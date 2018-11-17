import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import CalendarDay from './CalendarDay';

const CalendarWeek = props => {
    const style = {
        display: 'flex',
        flexWrap: 'nowrap'
    };

    const start = moment(props.startOfWeek).startOf('week').startOf('day');
    const end = moment(props.startOfWeek).endOf('week').startOf('day');
    const days = [];
    for (let i = moment(start); i.isSameOrBefore(end); i.add(1, 'days')) {
        const date = moment(i);
        const disabled = date.month() !== props.currentMonth;
        days.push(
            <CalendarDay key={date}
                         date={date}
                         disabled={disabled}/>
        );
    }

    return (
        <div style={{}}>
            {days}
        </div>
    );
};

CalendarWeek.propTypes = {
    startOfWeek: PropTypes.object.isRequired,
    currentMonth: PropTypes.number.isRequired
};

CalendarWeek.defaultProps = {};

export default CalendarWeek;