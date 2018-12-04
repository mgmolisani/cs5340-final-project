import React, {Component} from 'react';
import {css} from 'emotion';
import YesNoButton from './YesNoButton';

export default class AddToCartModal
    extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={css({
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.25)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 999
            })}>
                <div className={css({
                    backgroundColor: 'white',
                    borderRadius: '1em',
                    minHeight: '15%',
                    width: '20%',
                    padding: '1em'
                })}>
                    <div>
                        <div className={css({
                            textAlign: 'center',
                            fontSize: '1.5em'
                        })}>
                            Are you sure you want to add {this.props.name}  to your grocery list?
                        </div>
                        <div className={css({
                            display: 'flex',
                            justifyContent: 'center'
                        })}>
                            <YesNoButton accept={this.props.accept} confirm/>
                            <YesNoButton displayModal={this.props.displayModal}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}