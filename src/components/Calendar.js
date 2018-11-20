import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import CalendarWeekdays from './CalendarWeekdays';
import CalendarDay from './CalendarDay';
import CalendarHeader from './CalendarHeader';

const style = {
    container: {
        flex: '1 1 auto',
        display: 'grid',
        grid: 'auto 1fr / auto',
        height: '100%'
    },
    days: {
        display: 'grid',
        grid: 'auto-flow / repeat(7, 1fr)',
        color: 'grey'
    }
};

export default class Calendar
    extends Component {

    static propTypes = {
        selections: PropTypes.arrayOf(PropTypes.object).isRequired,
        handleDaySelection: PropTypes.func.isRequired
    };

    static defaultProps = {};

    constructor(props) {
        super(props);
        const now = moment();
        this.state = {
            date: {
                month: now.month(),
                year: now.year()
            }
        };
        this.changeMonth = this.changeMonth.bind(this);
    }

    changeMonth(value) {
        const {date} = this.state;
        const newMonth = moment(date).add(value, 'months');
        this.setState({
            date: {
                month: newMonth.month(),
                year: newMonth.year()
            }
        });
    }

    renderDays() {
        const start = moment(this.state.date).startOf('month').startOf('week');
        const end = moment(this.state.date).endOf('month').endOf('week');
        const days = [];
        for (let i = moment(start); i.isSameOrBefore(end); i.add(1, 'days')) {
            const date = moment(i);
            const disabled = this.state.date.month !== date.month();
            const selected = this.props.selections.some(selection => {
                return selection.isSame(date, 'day');
            });
            days.push(
                <CalendarDay key={date}
                             date={date}
                             disabled={disabled}
                             selected={selected}
                             handleDaySelection={() => {
                                 !disabled ? this.props.handleDaySelection(date) : null;
                             }}/>
            );
        }
        return days;
    }

    render() {
        const {month, year} = this.state.date;
        return (
            <div style={{
                flex: '1 1 auto',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <CalendarHeader month={month}
                                year={year}
                                changeMonth={this.changeMonth}/>
                <div style={style.container}>
                    <CalendarWeekdays/>
                    <div style={style.days}>
                        {this.renderDays()}
                    </div>
                </div>
            </div>
        );
    }
}