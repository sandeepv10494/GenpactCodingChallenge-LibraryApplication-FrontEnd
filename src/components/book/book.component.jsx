import React from 'react';


const Book = (props) => (
     (
            <tr>
                <td>{props.book.authorName}</td>
                <td>{props.book.bookName}</td>
            </tr>
    )
    
)

export default Book;