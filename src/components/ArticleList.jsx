import React from 'react'
import { Link } from 'react-router-dom'

export default function ArticleList( {contents} ) {
  return (
    <div>
        {contents.map(article => (
         <Link key={article.id} to={`/articles/${article.name}`}> 
          <h3>{article.name}</h3>
          <p>{article.description.substring(0, 100)}...</p>
        </Link>
      ))}
    </div>
  )
}
