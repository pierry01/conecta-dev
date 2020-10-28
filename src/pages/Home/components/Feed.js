import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import PostCard from '../../../components/PostCard'

// const useStyles = makeStyles(theme => {
//   root: { }
// })

const posts = [
  { 
    id: 1,
    title: 'Criando um App do zero utilizando React',
    date: 'October 28, 2020',
    description: 'Fala pessoal! Qual o framework favorito de vcs?',
    hashtags: '#dotnet, #javascript, #reactjs, #dev',
    image: '/images/posts/post2.png',
    author: {
      id: 1,
      name: 'Jean Mendonça',
      username: 'pierry01',
      avatar: '/images/avatars/avatar.png'
    }
  },
  { 
    id: 2,
    title: 'Criando um App do zero utilizando React',
    date: 'October 28, 2020',
    description: 'Fala pessoal! Qual o framework favorito de vcs?',
    hashtags: '#dotnet, #javascript, #reactjs, #dev',
    image: '/images/posts/post1.png',
    author: {
      id: 1,
      name: 'Jean Mendonça',
      username: 'pierry01',
      avatar: '/images/avatars/avatar.png'
    }
  },
  { 
    id: 3,
    title: 'Criando um App do zero utilizando React',
    date: 'October 28, 2020',
    description: 'Fala pessoal! Qual o framework favorito de vcs?',
    hashtags: '#dotnet, #javascript, #reactjs, #dev',
    image: '/images/posts/post8.png',
    author: {
      id: 1,
      name: 'Jean Mendonça',
      username: 'pierry01',
      avatar: '/images/avatars/avatar.png'
    }
  }
]

const Feed = () => {
  // const classes = useStyles()

  return (
    // <div className={classes.root}>
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
