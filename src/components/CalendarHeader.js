import React from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';

const style = {
    arrow: {
        backgroundColor: 'inherit',
        height: '100%',
        border: 'none',
        padding: '2.5em',
        cursor: 'pointer'
    }
};

const CalendarHeader = props => {
    return (
        <div style={{
            flex: '0 0 10em',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <button style={style.arrow}
                    onClick={() => props.changeMonth(-1)}>
                <i className='fa fa-angle-left fa-4x'
                   style={{
                       color: 'red'
                   }}/>
            </button>
            <div style={{
                width: '20em',
                textAlign: 'center'
            }}>
                <h1 style={{
                    margin: 0
                }}>
                    {moment.months()[props.month]}
                </h1>
                <h4 style={{
                    margin: 0
                }}>
                    {props.year}
                </h4>
            </div>
            <button style={style.arrow}
                    onClick={() => props.changeMonth(1)}>
                <i className='fa fa-angle-right fa-4x'
                   style={{
                       color: 'red'
                   }}/>
            </button>
        </div>
    );
};

CalendarHeader.propTypes = {
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    changeMonth: PropTypes.func.isRequired
};

CalendarHeader.defaultProps = {};

export default CalendarHeader;