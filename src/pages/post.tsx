import React from 'react'
import { Link } from 'react-router-dom'
import { compose, Dispatch } from 'redux'
import { connect } from 'react-redux'

import {
  deletePost
} from '../store/actions/post'

import { RootState } from '../store/reducers'
import { RootActions } from '../store/types/_root'

const mapStateToProps = ({ post }: RootState) => ({ post })
const mapDispatchToProps = (dispatch: Dispatch<RootActions>) => ({
  deletePost: (id: string) => dispatch(deletePost(id))
})

type TProps =
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

class Post extends React.Component<TProps> {
  render () {
    const { post: { posts }, deletePost } = this.props

    return (
      <div className='container'>
        <br />
        <div>
          <Link to='/posts/add'>
            <button className='button is-link'>
              Create
            </button>
          </Link>
        </div>
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
                  <button
                    className='button is-danger'
                    id={`btn-delete-post-${post.id}`}
                    onClick={() => deletePost(post.id)}>
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Post)
