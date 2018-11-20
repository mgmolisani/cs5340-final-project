import React from 'react'

const SearchBox = ({ search }) => {
    return(
        <div>
            {/*<i className="fa fa-search fa-2x pa2"></i>*/}
            <input className='pa2 w-40 br3 b--gray'
                   type='search'
                   placeholder='search recipes'
                   onChange={search}/>
        </div>
    )

}

export default SearchBox;