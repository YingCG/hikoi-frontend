import React, { useState } from 'react'
import axios from 'axios'

export default function AddComment({articleName, onArticleUpdated}) {
    const [name, setName] = useState('')
    const [commentText, setCommentText] = useState('')

    const addComment = async () => {
      const response = await axios.post(`http://localhost:8000/api/articles/${articleName}/comments`, {
        postedBy: name,
        text: commentText
      })

      const updatedInfo = response.data
      onArticleUpdated(updatedInfo)
      setName('')
      setCommentText('')
    }

  return (
    <div>
        <h3>Add a Comment</h3>
        <input type='text' placeholder='Name' value={name} onChange={e=> setName(e.target.value)}/>
        <textarea row='4' cols='100' placeholder='Comments' value={commentText} onChange={e=> setCommentText(e.target.value)}/>
        <button onClick={addComment}>Add Comment</button>
    </div>
  )
}
