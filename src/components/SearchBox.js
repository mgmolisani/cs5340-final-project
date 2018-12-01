import React from 'react'
import {css} from 'emotion';

const SearchBox = ({ search }) => {
    return(
        <div style={{
            flex: '0 0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.5em',
            height: '3em',
            backgroundColor: 'darkred',
            textAlign: 'center',
            margin: 0,
            padding: '1em'
        }}>
            <div className={css({
                width: '50%',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '5px',
                backgroundColor: 'white',
                boxShadow: 'inset 0px 0px 5px 0px rgba(0,0,0,0.75)',
            })}>
                <span className='fa fa-search fa-fw'
                style={{
                    fontSize: '1.25em',
                    marginLeft: 10,
                    color: 'grey'
                }}/>
                <input placeholder={'Search for recipes'}
                       className={css({
                           border: 'none',
                           width: '100%',
                           padding: 10,
                           backgroundColor: 'rgba(0,0,0,0)'
                       })}
                       onChange={search}/>
            </div>
        </div>
    )

}

export default SearchBox;