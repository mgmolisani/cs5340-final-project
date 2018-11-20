import React, {Component} from 'react';
import {css} from 'emotion';
import {data} from '../model/Data';

export default class GroceryListMobile
    extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={css({
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            })}>
                <div className={css({
                    flex: '0 0 auto',
                    fontSize: '1.5em',
                    textAlign: 'center',
                    color: 'white',
                    backgroundColor: 'darkred',
                    padding: '1em'
                })}>
                    Grocery List
                </div>
                <div className={css({
                    flex: '1 1 auto'
                })}>
                    {data.recipes[0].ingredients.map(ingredient => {
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
                                    width: '5%'
                                })}>
                                    <i className='fa fa-angle-left'/>
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
                        flex: '0 0 10%',
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
        );
    }
}