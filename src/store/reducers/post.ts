import {
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  PostState,
  PostActionTypes
} from '../types/post'

const initialState: PostState = {
  posts: [
    {
      id: '1',
      title: 'Post One',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ],
  isLoading: false,
  error: null
}

export default function (state = initialState, action: PostActionTypes): PostState {
  switch (action.type) {

    case CREATE_POST:
      return {
        ...state,
        posts: [
          action.payload,
          ...state.posts
        ]
      }

    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post => (
          post.id === action.meta
            ? { ...post, ...action.payload }
            : post
        ))
      }

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(({ id }) => id !== action.meta)
      }

    default:
      return state

  }
}
