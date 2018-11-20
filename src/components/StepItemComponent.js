import React from 'react';
import {css} from 'emotion';

export default class StepItemComponent extends React.Component {
    constructor(props) {
        super(props);

    }

    renderInactiveStep() {
        return <div className={css({
            display: 'flex',
            padding: '0.5em 2em',
            fontSize: '2.5em',
            color: '#505050',
            textShadow: '0px 1px 0px rgba(255,255,255,.5)'
        })}>
            <div className={css({
                flex: '0 0 auto'
            })}>
                {this.props.selected > this.props.step.order
                    ? <div>
                        <i className={'fa fa-check-circle-o'}
                           onClick={() => this.props.setOrder(this.props.step.order)}
                           style={{
                               color: 'red',
                               fontSize: '1.5em',
                           }}/>
                    </div>
                    : <div className={css({
                        display: 'flex',
                        width: '1.5em',
                        height: '1.5em',
                        borderRadius: '0.75em',
                        borderWidth: 7,
                        borderStyle: 'solid',
                        justifyContent: "center",
                        alignItems: "center"
                    })}>
                        {this.props.step.order}
                    </div>
                }
            </div>
            <div className={css({
                flex: '1 1 auto',
                paddingLeft: '1em'
            })}>
                {this.props.step.info}
            </div>
        </div>;
    }

    renderActiveStep() {
        return <div style={{
            display: 'flex',
            fontSize: '3em',
            margin: '0.5em 0',
            padding: '0.75em',
            borderRadius: '0.5em',
            backgroundColor: 'white',
            boxShadow: '0px 0px 25px -5px rgba(0,0,0,0.75)'
        }}>
            <div className={css({
                flex: '0 0 auto'
            })}>
                <div className={css({
                    display: 'flex',
                    width: '1.5em',
                    height: '1.5em',
                    borderRadius: '0.75em',
                    borderWidth: 7,
                    borderStyle: 'solid',
                    justifyContent: "center",
                    alignItems: "center"
                })}>
                    {this.props.step.order}
                </div>
            </div>
            <div className={css({
                flex: '1 1 auto',
                paddingLeft: '1em'
            })}>
                {this.props.step.info}
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>
                    <button className={css({
                        color: 'white',
                        backgroundColor: 'red',
                        cursor: 'pointer',
                        border: 0,
                        borderRadius: '0.5em',
                        whiteSpace: 'nowrap',
                        padding: '0.5em',
                        marginTop: '0.75em',
                        fontSize: 18
                    })}
                            onClick={this.props.step.order !== this.props.max ? this.props.next : null}>
                        {this.props.step.order !== this.props.max ? 'Next' : 'Finish'}
                    </button>
                </div>
            </div>
        </div>;
    }

    render() {
        return this.props.selected !== this.props.step.order
            ? this.renderInactiveStep()
            : this.renderActiveStep();
    }
};