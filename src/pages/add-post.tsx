import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { compose, Dispatch } from 'redux'
import { connect } from 'react-redux'
import uuid from 'uuid/v1'

import {
  createPost
} from '../store/actions/post'

import { RootActions } from '../store/types/_root'
import { Post } from '../store/types/post'

const mapDispatchToProps = (dispatch: Dispatch<RootActions>) => ({
  createPost: (post: Post) => dispatch(createPost(post))
})

type TState = {
  input: {
    title: string
    content: string
  }
}

type TProps =
  RouteComponentProps &
  ReturnType<typeof mapDispatchToProps>

class AddPost extends React.Component<TProps, TState> {
  state = {
    input: {
      title: '',
      content: ''
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
    const post: Post = {
      id: uuid(),
      ...this.state.input
    }
    this.props.createPost(post)
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
            Create
          </button>
        </form>
      </div>
    )
  }
}

export default compose(
  connect(null, mapDispatchToProps)
)(AddPost)
