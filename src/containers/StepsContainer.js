import React from 'react';
import {css} from 'emotion';

export default class StepsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.ref = null;
        this.setRef = this.setRef.bind(this);
    }

    setRef = element => this.ref = element;

    componentDidMount() {
        this.ref.focus({preventScroll: true});
    }

    componentDidUpdate() {
        this.ref.focus({preventScroll: true})

    }

    render() {
        return (
            <div ref={this.setRef}
                 tabIndex={-1}
                 className={css({
                     flex: '0 0 auto',
                     width: '75%',
                     display: 'flex',
                     flexDirection: 'column',
                     backgroundColor: 'darkgrey',
                     minHeight: '100%',
                     overflow: 'hidden'
                 })}
                 onKeyDown={this.props.handleKeyDown}>
                <div className={css({
                    flex: '0 0 auto',
                    fontSize: '2em',
                    height: '3em',
                    color: 'white',
                    backgroundColor: 'darkred',
                    textAlign: 'center',
                    margin: 0,
                    padding: '1em',
                    whiteSpace: 'nowrap'
                })}>
                    {this.props.recipe.name}
                </div>
                <div style={{
                    flex: '1 1 auto',
                    width: '100%',
                    overflowY: 'auto',
                    padding: '0 1em',
                    boxShadow: 'inset 0px 0px 25px 0px rgba(0,0,0,0.75)'
                }}>
                    {this.props.children}
                </div>
            </div>

        );
    }
}