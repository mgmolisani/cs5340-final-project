import React, {Component} from 'react';
import {css} from 'emotion';
import moment from 'moment';

class SchedulingModal extends Component {
    constructor() {
        super();
        this.state = {
            selectedDate: '',
            dates: []
        };

        this.selectDate = this.selectDate.bind(this);
        this.confirmDate = this.confirmDate.bind(this);
        this.removeDate = this.removeDate.bind(this);
    }

    selectDate(e) {
        this.setState({
            selectedDate: e.target.value
        });
    }

    confirmDate() {
        if (this.state.selectedDate === '') {
            alert('Please select a date');
        } else if (this.state.dates.includes(this.state.selectedDate)) {
            alert(moment(this.state.selectedDate).format('dddd, MMMM Do') + ' already selected');
        } else {
            this.setState({
                dates: [...this.state.dates, this.state.selectedDate]
            });
        }
    }

    removeDate(date) {
        let newDates = this.state.dates.filter(i => {
            return i !== date;
        });
        this.setState({
            dates: newDates
        });

    }

    render() {
        return (
            <div className={css({
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 999
            })}>
                <div className={css({
                    height: '75%',
                    width: '30%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    borderRadius: '1em',
                    boxShadow: '1px 1px black',
                    overflow: 'hidden'
                })}>
                    <div className={css({
                        flex: '0 0 auto',
                        fontSize: '1.5em',
                        textAlign: 'center',
                        color: 'white',
                        backgroundColor: 'darkred',
                        padding: '1em'
                    })}>
                        Schedule Selected Recipe(s)
                    </div>
                    <div className={css({
                        flex: '0 0 auto',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '1.5em',
                        padding: '0.5em 5em',
                        backgroundColor: 'darkgray',
                        height: '3em'
                    })}>
                        <div className={css({
                            flex: '1 1 auto',
                            border: '1px solid black',
                            borderRadius: '5px',
                            width: '75%',
                            height: '100%',
                            backgroundColor: 'white',
                        })}>
                            <input type={'date'}
                                   className={css({
                                       width: '100%',
                                       border: 'none',
                                       padding: 5,
                                       height: '100%',
                                       backgroundColor: 'rgba(0,0,0,0)'
                                   })}
                                   onChange={this.selectDate}/>

                        </div>
                        <button className={css({
                            flex: '0 0 2em',
                            marginLeft: 3,
                            color: 'white',
                            backgroundColor: 'red',
                            cursor: 'pointer',
                            border: 0,
                            borderRadius: '5px',
                            height: '100%'
                        })}
                                onClick={this.confirmDate}>
                            <i className='fa fa-plus'/>
                        </button>
                    </div>
                    <div className={css({
                        flex: '1 1 auto',
                        overflow: 'auto'
                    })}>
                        {this.state.dates.length > 0
                            ? this.state.dates.map(date => {
                                return (
                                    <div className={css({
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: '1.5em',
                                        padding: '1em 5em',
                                        width: '100%',
                                        borderBottom: '2px solid darkgrey',
                                    })}>
                                        <div className={css({
                                            flex: '1 1 auto',
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                            justifySelf: 'start'
                                        })}>{moment(date).format('dddd, MMMM Do')}
                                        </div>
                                        <i className='fa fa-remove fa-2x red'
                                           onClick={() => this.removeDate(date)}
                                        />
                                    </div>
                                );
                            })
                            : <h3 className={css({
                                padding: '1em',
                                color: '#505050',
                                textAlign: 'center'
                            })}>
                                No dates have been selected.
                            </h3>
                        }
                    </div>
                    <div className={css({
                        flex: '0 0 auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '1.5em',
                        padding: '0.5em',
                        height: '3em',
                        backgroundColor: 'darkgrey'
                    })}>
                        <button style={{
                            color: 'white',
                            backgroundColor: 'red',
                            cursor: 'pointer',
                            border: '2px solid red',
                            borderRadius: '0.5em',
                            whiteSpace: 'nowrap',
                            padding: '0.5em',
                            margin: '1em 0.25em 1em 0.25em',
                            fontSize: 22
                        }}>
                            Accept
                        </button>
                        <button style={{
                            color: 'red',
                            backgroundColor: 'white',
                            cursor: 'pointer',
                            border: '2px solid red',
                            borderRadius: '0.5em',
                            whiteSpace: 'nowrap',
                            padding: '0.5em',
                            margin: '1em 0.25em 1em 0.25em',
                            fontSize: 22
                        }}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SchedulingModal;