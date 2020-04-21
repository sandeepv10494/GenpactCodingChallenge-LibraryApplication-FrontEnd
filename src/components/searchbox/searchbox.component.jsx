import React from 'react';

import './search-box.scss';

const SearchBox = ({ placeholder, handleChange }) => (
    <input 
    className='search'
    type='search' 
    placeholder={ placeholder }
    onChange={handleChange}
 />
);   

export default SearchBox;