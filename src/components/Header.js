import React from 'react';
import {NavLink} from 'react-router-dom';
import {css} from 'emotion';

const Header = props => {
    return (
        <div className={css({
            display: 'flex',
            flex: '0 0 5em',
            padding: '0 0.75em',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white',
            backgroundColor: 'red',
            boxShadow: '0px 0px 25px 0px rgba(0,0,0,0.75)',
            zIndex: 10
        })}>
            <NavLink to="/"
                     className={css({
                         fontSize: '2em',
                         padding: '0 0.75em',
                         textAlign: 'center',
                         verticalAlign: 'middle',
                         whiteSpace: 'nowrap',
                         color: 'white',
                         textDecoration: 'none',

                     })}>
                <div className={css({
                    display: 'flex',
                    '&:hover span': {
                        transform: 'rotate(25deg)'
                    }
                })}>
                    Marinara Hands
                    <span>✋</span>
                </div>
            </NavLink>
            <div className={css({
                display: 'flex'
            })}>
                <NavLink to="/recipes"
                         className={css({
                             display: 'flex',
                             justifyContent: 'center',
                             alignItems: 'center',
                             fontSize: '1.25em',
                             padding: '0 0.75em',
                             textAlign: 'center',
                             verticalAlign: 'middle',
                             whiteSpace: 'nowrap',
                             textDecoration: 'none',
                             color: 'white',
                             '&:hover span': {
                                 textDecoration: 'underline'
                             }
                         })}
                         activeClassName={css({
                             '&:span': {
                                 textDecoration: 'underline'
                             }
                         })}>
                    <span>My Recipes</span>
                    <i className='fa fa-cutlery fa-2x fa-fw'/>
                </NavLink>
                <NavLink to="/groceries"
                         className={css({
                             display: 'flex',
                             justifyContent: 'center',
                             alignItems: 'center',
                             fontSize: '1.25em',
                             padding: '0 0.75em',
                             textAlign: 'center',
                             verticalAlign: 'middle',
                             whiteSpace: 'nowrap',
                             textDecoration: 'none',
                             color: 'white',
                             '&:hover span': {
                                 textDecoration: 'underline'
                             }
                         })}
                         activeClassName={css({
                             '&:span': {
                                 textDecoration: 'underline'
                             }
                         })}>
                    <span>Grocery List</span>
                    <i className='fa fa-list-alt fa-2x fa-fw'/>
                </NavLink>
            </div>
        </div>
    );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;