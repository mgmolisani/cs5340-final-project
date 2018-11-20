import React from 'react';
import {css} from 'emotion';

const menuItem = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.25em',
    padding: '0 0.75em',
    textAlign: 'center',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
});

const menuItemLink = css({
    display: 'block',
    color: 'white',
    textDecoration: 'none',
    paddingRight: '0.5em',
    '&:hover': {
        textDecoration: 'underline'
    }
});

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
            <div className={css({
                fontSize: '2em',
                padding: '0 0.75em',
                textAlign: 'center',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap'
            })}>
                Marinara Hands ✋
            </div>
            <div className={css({
                display: 'flex'
            })}>
                <div className={menuItem}>
                    <a className={menuItemLink}
                       href={''}>
                        My Recipes&nbsp;
                    </a>
                    <i className='fa fa-cutlery fa-2x'/>
                </div>
                <div className={menuItem}>
                    <a className={menuItemLink}
                       href={''}>
                        Grocery List
                    </a>
                    <i className='fa fa-list-alt fa-2x'/>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;