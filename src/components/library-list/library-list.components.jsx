import React, { Component } from 'react';
import SearchBox from '../searchbox/searchbox.component';
import Library from '../library/library.component';
import './library-list.scss';

class LibraryList extends Component{
    constructor(){
        super();
        this.state = {
            librariesList: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('http://localhost:8080/libraries')
        .then(response => response.json())
        .then(libraries => this.setState({ librariesList: libraries }));
    }

    render(){
        const { librariesList, searchField} = this.state;
        return (
            <div className>
               <h1>LIBRARY MANAGEMENT SYSTEM</h1>
               <SearchBox 
                    placeholder='search libraries' 
                    handleChange={e=>this.setState({ searchField: e.target.value})} >
                </SearchBox>
               <div className='library-list'> 
                <Library libraries={librariesList}></Library>
               </div>
            </div>
        );
    }
}

export default LibraryList;