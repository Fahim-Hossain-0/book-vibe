import React from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    console.log(data);
    return (
        <div>
           <div>
                <h1>Books</h1>
            </div> 
            <div className=''>
                {
                data.map(book=><Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;