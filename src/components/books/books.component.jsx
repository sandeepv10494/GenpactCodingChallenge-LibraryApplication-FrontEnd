import React, { Component }  from 'react';
import Book from '../book/book.component';
import './books.scss';

class Books extends Component {

    constructor(){
        super();
        this.state = {
            booksList: []
        }
    }

    componentDidMount(){
        const { libraryName } = this.props.location.state;
        fetch(`http://localhost:8080/library/${libraryName}/books`)
        .then(response => response.json())
        .then(books => this.setState({ booksList: books }));
       console.log(this.state.booksList);
    }

    render(){
        const { libraryName } = this.props.location.state;
        console.log(this.state.booksList);
        return(
            <div>
                <h1>{libraryName}</h1>
                <table className='books-table'>
                    <thead>
                       <tr> 
                        <th>Book Name</th>
                        <th>Author Name</th>
                       </tr> 
                    </thead>
                    <tbody>
                     {
                        this.state.booksList.map(book => <Book book={book} />)
                        
                     }
                    </tbody>
                </table>
            </div>
            
        );    
    }

}

export default Books;