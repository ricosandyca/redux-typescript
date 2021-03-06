import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { compose, Dispatch } from 'redux'
import { connect } from 'react-redux'

import {
  updatePost
} from '../store/actions/post'

import { Post } from '../store/types/post'
import { RootState } from '../store/reducers'
import { RootActions } from '../store/types/_root'

const mapStateToProps = ({ post }: RootState) => ({ post })
const mapDispatchToProps = (dispatch: Dispatch<RootActions>) => ({
  updatePost: (id: string, post: Post) => dispatch(updatePost(id, post))
})

type RouteParams = {
  id: string
}

type TProps =
  RouteComponentProps<RouteParams> &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

type TState = RouteParams & {
  input: {
    title: string
    content: string
  }
}

class EditPost extends React.Component<TProps, TState> {
  constructor (props: TProps) {
    super(props)

    const currentPost = this
      .props
      .post
      .posts
      .find(({ id }) => id === props.match.params.id)

    this.state = {
      ...props.match.params,
      input: {
        title: currentPost?.title || '',
        content: currentPost?.content || ''
      }
    }
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    this.setState({
      input: {
        ...this.state.input,
        [e.target.name]: e.target.value
      }
    })
  }

  handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { id } = this.state
    const post: Post = { id, ...this.state.input}
    this.props.updatePost(id, post)
    this.props.history.push('/posts')
  }

  render () {
    const { input } = this.state

    return (
      <div className='container'>
        <br />
        <form onSubmit={this.handleFormSubmit}>
          <div className='field'>
            <label className='label'>Title</label>
            <div className='control'>
              <input
                name='title'
                className='input is-primary'
                type='text'
                placeholder='Title'
                value={input.title}
                onChange={this.handleInputChange}/>
            </div>
          </div>
          <div className='field'>
            <label className='label'>Content</label>
            <div className='control'>
              <textarea
                name='content'
                className='textarea is-primary'
                placeholder='Content'
                onChange={this.handleInputChange}
                value={input.content}>
                </textarea>
            </div>
          </div>
          <button className='button is-primary'>
            Update
          </button>
        </form>
      </div>
    )
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(EditPost)
