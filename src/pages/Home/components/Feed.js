import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PostCard from '../../../components/PostCard'

const useStyles = makeStyles(theme => {
  root: {
    
  }
})

const posts = [
  { id: 1, description: 'teste 1' },
  { id: 2, description: 'teste 2' },
  { id: 3, description: 'teste 3' },
  { id: 4, description: 'teste 4' }
]

const Feed = () => {
  return (
    <div>
      {
        posts.map((post, key) => (
          <PostCard key={key} post={post} />
        ))
      }
    </div> 
  )
}

export default Feed
