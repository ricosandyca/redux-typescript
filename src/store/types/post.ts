export const CREATE_POST = 'CREATE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'

export type Post_Id = string

export interface Post {
  id?: string
  title: string
  content: string
}

export interface PostState {
  posts: Post[]
  isLoading: boolean
  error: Error | null
}

export interface CreatePostAction {
  type: typeof CREATE_POST
  payload: Post
}

export interface UpdatePostAction {
  type: typeof UPDATE_POST
  payload: Post
  meta: Post_Id
}

export interface DeletePostAction {
  type: typeof DELETE_POST
  meta: Post_Id
}

export type PostActionTypes =
  CreatePostAction |
  UpdatePostAction |
  DeletePostAction
