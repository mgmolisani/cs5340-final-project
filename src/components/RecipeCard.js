import React from 'react';
import {NavLink} from 'react-router-dom';
import {css} from 'emotion';

const RecipeCard = (props) => {

    return (
        <div className={css({
            display: 'flex',
            flexDirection: 'column',
            margin: '1em',
            borderRadius: '0.5em',
            backgroundColor: props.selected ? '#F44F46' : 'white',
            boxShadow: '0px 0px 25px -5px rgba(0,0,0,0.75)',
            height: '25em',
            width: '25em',
            minWidth: '25em',
            overflow: 'hidden'
        })}
             onClick={() => props.selectRecipe(props.id)}>
            <div className={css({
                flex: '0 0 30%',
                overflow: 'hidden'
            })}>
                <img className={css({
                    objectFit: 'cover',
                    transform: 'scale(1.1)',
                    filter: 'blur(5px)'
                })}
                     src={props.icon}
                     alt={props.name}/>
            </div>
            <div className={css({
                flex: '0 0 auto',
                height: '70%'
            })}>
                <div className={css({
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    height: '10em',
                    width: '10em',
                    margin: 'auto',
                    top: '-5em',
                    bottom: '5em',
                    backgroundColor: props.selected ? '#F44F46' : 'white',
                    borderRadius: '5em'
                })}>
                    <img className={css({
                        objectFit: 'cover',
                        height: '95%',
                        width: '95%',
                        borderRadius: '5em'
                    })}
                         src={props.icon}
                         alt={props.name}/>
                </div>
                <div className={css({
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    top: '-10em',
                    height: '100%',
                    paddingTop: '5em',
                    textAlign: 'center',
                    color: props.selected ? 'white' : 'black',
                })}>
                    <h2 className={css({
                        flex: '0 0 auto',
                        width: '60%',
                        padding: '0.5em 0',
                        margin: 'auto'
                    })}>
                        {props.name}
                    </h2>
                    <p className={css({
                        flex: '1 1 auto',
                        fontSize: '1.25em',
                        padding: '0.25em 0.5em'
                    })}>
                        {props.description}
                    </p>
                    <div className={css({
                        flex: '0 0 auto',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignContent: 'center',
                        padding: '1em',
                        textDecoration: 'none'
                    })}>
                        <NavLink to={`/cooking/${props.id}`}>
                            <i className='fa fa-play-circle fa-3x'
                               style={{
                                   color: props.selected ? 'white' : 'red',
                               }}/>
                        </NavLink>
                        <a href=''
                           className={css({
                               color: props.selected ? 'white' : 'red',
                               paddingTop: 13
                           })}>
                            Details <span className='fa fa-caret-right'
                                          style={{
                                              color: props.selected ? 'white' : 'red',
                                          }}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;