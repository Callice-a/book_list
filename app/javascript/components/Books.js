import React from 'react';
import Book from './book'
const Books = (props) => {
    const { books, deleteBook } = props;
  

    const renderBooks = () => {
      if (books.length == 0) {
        return <h1 style={{color: "#da3232"}}> No Books </h1>
      }
        return books.map((book) => {
          return <Book key={book.title} deleteBook={deleteBook} {...book} />;
        });

    };
    

    return (
      <div>
        <h1> Books in Library</h1>
        {renderBooks()}
      </div>
    )
    }
export default Books;

//= require jquery
//= require bootstrap-sprockets
