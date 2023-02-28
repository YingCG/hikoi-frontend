import React from 'react'
import ArticleList from '../components/ArticleList'
import data from './article-content'

export default function ArticlesListPage() {
  return (
    <div>
      <h1>Articles</h1>
      <ArticleList contents={data}/>
    </div>
  )
}
