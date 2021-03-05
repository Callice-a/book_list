import React, { useState } from 'react';
import Books from './Books'
import axios from 'axios'
import BookForm from './BookForm'
const App = (props) => {
  const [books, setBooks] = useState([])

  const deleteBook = (id) => {
    const filteredBooks = books.filter( book => {
        return book.id !== id
      })
      setBooks(filteredBooks)
  }

  const addBook = (book) => {
    setBooks([...books, book])
  }
    
  const getBooks = async () => {
      let res = await axios.get ("/books");
    
     setBooks(res.data)
    };
   

    return (
      <div className='homepage'>
        <h1 className='main_title'>Personal Library</h1>
        <h3>Add a book</h3>
        <BookForm addBook={addBook} />
        <Books books={books} deleteBook={deleteBook} />
        <button onClick={getBooks}>Show Books</button> 
      </div>
    );

};





export default App;


