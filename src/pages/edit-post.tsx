import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

type RouteParams = {
  id: string
}
type TProps = RouteComponentProps<RouteParams>

type TState = RouteParams & {
  input: {
    [key: string]: string
  }
}

class EditPost extends React.Component<TProps, TState> {
  constructor (props: TProps) {
    super(props)

    this.state = {
      ...props.match.params,
      input: {
        title: '',
        content: ''
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
                placeholder='Primary input'
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

export default EditPost
