import React, {Component} from 'react';
import {css} from 'emotion';
import Link from 'react-router-dom/es/Link';

export default class StepItemComponent
    extends Component {

    constructor(props) {
        super(props);
        this.ref = null;
        this.setRef = this.setRef.bind(this);
    }

    scrollIntoView() {
        if (this.props.selected) {
            this.ref.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
        }
    }

    componentDidMount() {
        this.scrollIntoView();
    }

    componentDidUpdate() {
        this.scrollIntoView();
    }

    setRef = element => this.ref = element;

    renderInactiveStep() {
        return <div className={css({
            display: 'flex',
            padding: '0.5em 2em',
            fontSize: '2.5em',
            color: '#404040',
            textShadow: '0px 1px 0px rgba(255,255,255,.5)'
        })}>
            <div className={css({
                flex: '0 0 auto'
            })}>
                {this.props.complete
                    ? <i className={'fa fa-check-circle-o'}
                         onClick={this.props.setToCurrentStep}
                         style={{
                             color: 'red',
                             fontSize: '1.75em',
                             boxSizing: 'border-box'
                         }}/>
                    : <div className={css({
                        display: 'flex',
                        width: '1.5em',
                        height: '1.5em',
                        borderRadius: '0.75em',
                        borderWidth: 7,
                        borderStyle: 'solid',
                        justifyContent: "center",
                        alignItems: "center",
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
                })} onClick={this.props.nextStep}>
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
                }}
                    {this.renderControlButton()}>

                </div>
            </div>
        </div>;
    }

    renderControlButton() {
        const button = <button className={css({
            color: 'white',
            backgroundColor: 'red',
            cursor: 'pointer',
            border: 0,
            borderRadius: '0.5em',
            whiteSpace: 'nowrap',
            padding: '0.5em',
            marginTop: '0.75em',
            fontSize: '0.65em'
        })}
                               onClick={this.props.nextStep}>
            {this.props.isLast ? 'Finish' : 'Next'}
        </button>;
        return this.props.isLast
            ? <Link to={'/'}>
                {button}
            </Link>
            : button;
    }

    render() {
        return <div ref={this.setRef}
                    className={css({
                        padding: '1em 0',
                    })}>
            {
                this.props.selected
                    ? this.renderActiveStep()
                    : this.renderInactiveStep()
            }
        </div>;
    }
};