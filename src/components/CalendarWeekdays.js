import React from 'react';
import * as moment from 'moment';

const style = {
    container: {
        display: 'grid',
        grid: 'auto / repeat(7, 1fr)'
    },
    cell: {
        color: 'darkgrey',
        textAlign: 'center'
    }

};

const CalendarWeekdays = props => {
    return (
        <div style={style.container}>
            {moment.weekdaysShort().map(day => {
                return (
                    <h1 key={day}
                        style={style.cell}>
                        {day}
                    </h1>
                );
            })}
        </div>
    );
};

CalendarWeekdays.propTypes = {};

CalendarWeekdays.defaultProps = {};

export default CalendarWeekdays;