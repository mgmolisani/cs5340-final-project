import React, {Component} from 'react';
import {css} from 'emotion';

export default class GroceryListDesktop
    extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={css({
                flex: '1 1 auto',
                width: '100%',
                minHeight: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'darkgrey',
                boxShadow: 'inset 0px 0px 25px 0px rgba(0,0,0,0.75)'
            })}>
                <div className={css({
                    flex: '0 0 50%',
                    width: '50%',
                    height: '90%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    boxShadow: '0px 0px 25px -5px rgba(0,0,0,0.75)'
                })}>
                    <div className={css({
                        flex: '1 1 auto'
                    })}>
                        {this.prop.data.recipes[0].ingredients.map(ingredient => {
                            return (
                                <div className={css({
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '1.5em',
                                    padding: '1em',
                                    width: '100%',
                                    borderBottom: '2px solid grey'
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
                                        {ingredient.name}
                                    </div>
                                    <div className={css({
                                        flex: '1 1 auto',
                                        textAlign: 'right',
                                        margin: '0 0.5em',
                                        justifySelf: 'end'
                                    })}>
                                        {ingredient.quantity}
                                    </div>
                                    <div className={css({
                                        width: '15%',
                                        margin: '0 0.5em',
                                        justifySelf: 'start'
                                    })}>
                                        {ingredient.uom.shortName}
                                    </div>
                                    <div className={css({
                                        width: '5%',
                                        margin: '0 0.5em'
                                    })}>
                                        <i className='fa fa-edit'/>
                                    </div>
                                    <div className={css({
                                        width: '5%',
                                        margin: '0 0.5em'
                                    })}>
                                        <i className='fa fa-remove'/>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={css({
                        flex: '0 0 auto',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '1.5em',
                        padding: '0.5em',
                        height: '3em'
                    })}>
                        <div className={css({
                            flex: '1 1 auto',
                            border: '1px solid black',
                            borderRadius: '5px',
                            height: '100%'
                        })}>
                            <input placeholder={'Enter additional item'}
                                   className={css({
                                       width: '70%',
                                       border: 'none',
                                       height: '100%',
                                       padding: 5,
                                       backgroundColor: 'rgba(0,0,0,0)'
                                   })}/>
                            <input type={'number'}
                                   defaultValue={'0'}
                                   className={css({
                                       width: '10%',
                                       textAlign: 'center',
                                       border: 'none',
                                       borderLeft: '1px solid black',
                                       height: '100%',
                                       padding: 5,
                                       backgroundColor: 'rgba(0,0,0,0)'
                                   })}/>
                            <select defaultValue={'cup'}
                                    className={css({
                                        width: '20%',
                                        border: 'none',
                                        borderLeft: '1px solid black',
                                        height: '100%',
                                        padding: 5,
                                        backgroundColor: 'rgba(0,0,0,0)'
                                    })}>
                                <option>
                                    cup
                                </option>
                                <option>
                                    tbsp
                                </option>
                            </select>
                        </div>
                        <button className={css({
                            flex: '0 0 5%',
                            marginLeft: 3,
                            color: 'white',
                            backgroundColor: 'red',
                            cursor: 'pointer',
                            border: 0,
                            borderRadius: '5px',
                            height: '100%'
                        })}>
                            <i className='fa fa-plus'/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}