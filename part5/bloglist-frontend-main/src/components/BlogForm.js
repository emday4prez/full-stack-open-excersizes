import React, { useState } from 'react'


const BlogForm = ({ createBlog }) => {
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')



  const addBlog = (event) => {
    event.preventDefault()
    createBlog({
      title: newTitle,
      author: newAuthor,
      url: newUrl
    })
    setNewTitle('')
    setNewAuthor('')
    setNewUrl('')
  }


  return (
    <div className="formDiv">
      <h2>Create a new note</h2>

      <form onSubmit={addBlog}>
        <div>
          title
          <input
            id='title'
            type="text"
            value={newTitle}
            name="title"
            onChange={({ target }) => setNewTitle(target.value)}
          />
        </div>
        <div>
          author
          <input
            id='author'
            type="text"
            value={newAuthor}
            name="author"
            onChange={({ target }) => setNewAuthor(target.value)}
          />
        </div>
        <div>
          url
          <input
            type="text"
            value={newUrl}
            name="newUrl"
            onChange={({ target }) => setNewUrl(target.value)}
          />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default BlogForm