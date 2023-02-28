import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import articles from './article-content'
import NotFoundPage from './NotFoundPage';
import axios from 'axios';
import CommentsList from '../components/CommentsList';
import AddComment from '../components/AddComment';
import useUser from './useUser'

export default function ArticlePage() {
    const [articleInfo, setArticleInfo] = useState({ likes: 0, comments: []})
    const params = useParams();
    const articleName = params.articleName;
    
    const {user, isLoading} = useUser()

    useEffect(() => {
      const loadArticleInfo = async () => {
        const response = await axios.get(`http://localhost:8000/api/articles/${articleName}`)
        // console.log(response)
        const newArticleInfo = response.data
        setArticleInfo(newArticleInfo)
      }
      loadArticleInfo()
    },[])

    const article = articles.find(article => article.name === articleName)

    const addLikes = async () => {
      const response = await axios.put(`http://localhost:8000/api/articles/${articleName}/likes`)
      const updatedInfo = response.data;
      setArticleInfo(updatedInfo)
    }
    
    if(!article) {
      return <NotFoundPage/>
    }

    console.log(articleInfo)
  return (
    <> 
    <h1>{article.name}</h1>
    <div>{article.description}</div>
    <p>Likes: {articleInfo.likes}</p>
    { user ? <button onClick={addLikes}>I Like!</button> : <button>Log in To vote</button> } 
    {/* <p>Comments: {articleInfo.comments.map(comment => (<p>{comment.postedBy + ' - ' + comment.text}</p>))}</p> */}
    
    <CommentsList comments={articleInfo.comments} />
    { user ? <AddComment articleName={articleName} onArticleUpdated={info => setArticleInfo(info)}/> : <button>Log in To user</button> }

    </>
  )
}
