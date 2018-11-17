import React, {Component} from 'react';
import moment from 'moment';
import CalendarHeader from './CalendarHeader';
import CalendarDay from './CalendarDay';

const style = {
    container: {
        display: 'grid',
        height: '100%',
        grid: 'auto 1fr / auto'
    },
    days: {
        display: 'grid',
        grid: 'auto-flow / repeat(7, 1fr)'
    }
};

export default class Calendar
    extends Component {

    static propTypes = {};

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
    }

    renderDays() {
        const start = moment(this.state.date).startOf('month').startOf('week');
        const end = moment(this.state.date).endOf('month').endOf('week');
        const days = [];
        for (let i = moment(start); i.isSameOrBefore(end); i.add(1, 'days')) {
            const date = moment(i);
            const disabled = this.state.date.month !== date.month();
            days.push(
                <CalendarDay key={date}
                             date={date}
                             disabled={disabled}/>
            );
        }
        return days;
    }

    render() {
        return (
            <div style={style.container}>
                <CalendarHeader/>
                <div style={style.days}>
                    {this.renderDays()}
                </div>
            </div>
        );
    }
}