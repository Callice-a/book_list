import axios from 'axios';
import React from 'react'
const Book = (props) => {
  const {title, author, id, deleteBook} = props;

  const deleteHandler = async (id) => {
    let res = await axios.delete(`/books/${id}`)
    deleteBook(res.data.id)
  }
  return (
    <div className='book_box'>
      <h1> 
         {title} #{id}
      </h1>
      <p> Author: {author}</p>
      <h2 ><span className='delete_button'onClick={() => deleteHandler(id)}>Delete&#128465;</span></h2>
    </div>

  )
}
export default Book;