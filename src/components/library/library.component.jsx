import React from 'react';
import { Link } from 'react-router-dom';
import LibraryImage from '../../resources/library-png-5.png';
import './library.scss';

const Library = (props) => (
props.libraries.map(library => 
   ( 
        <div className='card-container'>
        <img alt="library" src={ LibraryImage } className='card-image'/>
            <h2> {library.name} </h2>
            <button className='card-button'>
                <Link to={{ pathname: '/library/books',
                            state: {
                            libraryName: library.name 
                            }}}>Get Books</Link>
            </button>
        </div>
    )
 )    
);

export default Library;