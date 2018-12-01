import React from 'react';
import {css} from 'emotion';

export default class IngredientsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.ingredients) {
            return this.props.ingredients.map((value) => {
                    return (
                        <div className={css({
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '1.5em',
                            padding: '1em',
                            width: '100%',
                            borderBottom: '2px solid grey',
                            '&:hover': {
                                backgroundColor: 'lightgrey'
                            }
                        })}>
                            <div className={css({
                                width: '10%',
                                textAlign: 'center'
                            })}>
                                <span className='fa fa-circle-o'/>
                            </div>
                            <div className={css({
                                flex: '1 1 auto',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                justifySelf: 'start'
                            })}>
                                {value.name}
                            </div>
                            <div className={css({
                                flex: '1 1 auto',
                                textAlign: 'right',
                                margin: '0 0.5em',
                                justifySelf: 'end'
                            })}>
                                {value.quantity}
                            </div>
                            <div className={css({
                                width: '15%',
                                margin: '0 0.5em',
                                justifySelf: 'start'
                            })}>
                                {value.uom.shortName}
                            </div>
                        </div>
                    );
                }
            );
        } else {
            return null;
        }
    }
}