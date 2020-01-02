import React from 'react'
import { Link } from 'react-router-dom'
import { compose, Dispatch } from 'redux'
import { connect } from 'react-redux'

import {
  createPost,
  updatePost,
  deletePost
} from '../store/actions/post'

import { RootState } from '../store/reducers'
import { PostState } from '../store/types/post'
import { RootActions } from '../store/types/_root'

type TProps = {
  post: PostState
}

class Post extends React.Component<TProps> {
  render () {
    const { posts } = this.props.post

    return (
      <div className='container'>
        <br />
        {
          posts.map(post => (
            <div key={post.id} className='message'>
              <div className='message-header'>
                <p>{post.title}</p>
                <div>
                  <Link to={`/posts/edit/${post.id}`} className='link'>
                    <button className='button is-primary'>
                      Edit
                    </button>
                  </Link>
                  &nbsp;&nbsp;
                  <button className='button is-danger' id={`btn-delete-post-${post.id}`}>
                    Delete
                  </button>
                </div>
              </div>
              <div className='message-body'>{post.content}</div>
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = ({ post }: RootState) => ({ post })
const mapDispatchToProps = (dispatch: Dispatch<RootActions>) => ({
  deletePost: (id: string) => dispatch(deletePost(id))
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Post)
