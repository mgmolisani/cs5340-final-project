import React, {Component} from 'react';
import {css} from 'emotion';
import DataService from "../model/Data";
import { UOM } from '../model/Data'


export default class GroceryListDesktop
    extends Component {

    static propTypes = {};

    static defaultProps = {};

    static units = [];



    constructor(props) {
        super(props);
        this.state = {
            groceries: [],
            newIngredient: {
                name: '',
                quantity: 0,
                uom: GroceryListDesktop.units[1]
            }
        };

        this.selectIngredient = this.selectIngredient.bind(this);
        this.deleteIngredient = this.deleteIngredient.bind(this);
        this.ingredientNameHandler = this.ingredientNameHandler.bind(this);
        this.ingredientQuantityHandler = this.ingredientQuantityHandler.bind(this);
        this.ingredientUOMHandler = this.ingredientUOMHandler.bind(this);
        this.submitIngredient = this.submitIngredient.bind(this);


    }

    componentDidMount() {
        DataService.findAllGroceries()
            .then(groceries => this.setState({groceries}));
    }


    selectIngredient(name) {
        for (let i = 0; i < this.state.groceries.length; i++) {
            if (this.state.groceries[i].name === name) {
                const groceries = [...this.state.groceries];
                groceries[i].selected = !groceries[i].selected;
                this.setState({groceries});
            }
        }
    }

    deleteIngredient(name) {
        DataService.deleteIngredientFromGroceryList(name)
            .then(groceries => this.setState({groceries}));
    }

    ingredientNameHandler(event) {
        this.setState({
            newIngredient: {
                name: event.target.value,
                quantity: this.state.newIngredient.quantity,
                uom: this.state.newIngredient.uom,
            }
        })
    }

    ingredientQuantityHandler(event) {
        this.setState({
            newIngredient: {
                name: this.state.newIngredient.name,
                quantity: event.target.value,
                uom: this.state.newIngredient.uom,
            }
        })
    }

    ingredientUOMHandler(event) {
        this.setState({
            newIngredient: {
                name: this.state.newIngredient.name,
                quantity: this.state.newIngredient.quantity,
                uom: GroceryListDesktop.units[event.target.value]
            }
        })
    }

    submitIngredient() {
        const ingredient = this.state.newIngredient;
        DataService.addIngredientToGroceries(ingredient)
            .then(groceries => this.setState({groceries}));
    }

    render() {

        return (
            <div className={css({
                flex: '1 1 auto',
                width: '100%',
                height: '100%',
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
                        flex: '0 0 auto',
                        backgroundColor: 'darkred',
                        color: 'white'
                    })}>
                        <div className={css({
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '1.5em',
                            padding: '1em',
                            width: '100%',
                            borderBottom: '1px solid grey'
                        })}>
                            <div className={css({
                                width: '10%',
                                textAlign: 'center'
                            })}>
                            </div>
                            <div className={css({
                                flex: '1 1 auto',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                justifySelf: 'start'
                            })}>
                                Ingredients
                            </div>
                            <div className={css({
                                flex: '1 1 auto',
                                textAlign: 'center',
                                margin: '0 0.5em',
                                justifySelf: 'start'
                            })}>
                                Quantity
                            </div>
                            <div className={css({
                                width: '5%',
                                margin: '0 0.5em'
                            })}>
                            </div>
                            <div className={css({
                                width: '5%',
                                margin: '0 0.5em'
                            })}>
                            </div>
                        </div>
                    </div>
                    <div className={css({
                        flex: '1 1 auto',
                        overflow: 'auto'
                    })}>
                        {this.state.groceries.map(ingredient => {
                            return (
                                <div className={css({
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '1.5em',
                                    padding: '1em',
                                    width: '100%',
                                    borderBottom: '2px solid grey',
                                    backgroundColor: ingredient.selected ? 'lightgray' : 'white'
                                })}
                                     onClick={() => this.selectIngredient(ingredient.name)}>
                                    <div className={css({
                                        width: '10%',
                                        textAlign: 'center',
                                        color: ingredient.selected ? 'green' : 'black'
                                    })}>
                                        {ingredient.selected ?
                                            <span className='fa fa-check'/> :
                                            <span className='fa fa-circle-o'/>}
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
                                        <i className='fa fa-remove'
                                           onClick={() => this.deleteIngredient(ingredient.name)}/>
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
                        height: '3em',
                        borderTop: '1px solid grey'
                    })}>
                        <div className={css({
                            flex: '1 1 auto',
                            border: '1px solid black',
                            borderRadius: '5px',
                            height: '100%'
                        })}>
                            <input placeholder={'Enter additional item'}
                                   className={css({
                                       width: '62.5%',
                                       border: 'none',
                                       height: '100%',
                                       padding: 5,
                                       backgroundColor: 'rgba(0,0,0,0)'
                                   })}
                                    onChange={this.ingredientNameHandler}/>
                            <input type={'number'}
                                   min={'0'}
                                   defaultValue={'0'}
                                   className={css({
                                       width: '10%',
                                       textAlign: 'center',
                                       border: 'none',
                                       borderLeft: '1px solid black',
                                       height: '100%',
                                       padding: 5,
                                       backgroundColor: 'rgba(0,0,0,0)'
                                   })}
                                   onChange={this.ingredientQuantityHandler}/>
                            <select defaultValue={'cup'}
                                    className={css({
                                        width: '20%',
                                        border: 'none',
                                        borderLeft: '1px solid black',
                                        height: '100%',
                                        padding: 5,
                                        backgroundColor: 'rgba(0,0,0,0)'
                                    })}
                                    onChange={this.ingredientUOMHandler}>

                                {GroceryListDesktop.units.map((uom, index) => {
                                    return(
                                        <option value={index}>
                                            {uom.shortName}
                                        </option>
                                    )
                                })}
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
                        })}
                        onClick={this.submitIngredient}>
                            <i className='fa fa-plus'/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}


(() => {
    for (let unit in UOM) {
        GroceryListDesktop.units.push(UOM[unit])
    }
})();