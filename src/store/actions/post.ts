import {
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  CreatePostAction,
  UpdatePostAction,
  DeletePostAction,
  Post,
  Post_Id
} from '../types/post'

export function createPost (post: Post): CreatePostAction {
  return {
    type: CREATE_POST,
    payload: post
  }
}

export function updatePost (id: Post_Id, post: Post): UpdatePostAction {
  return {
    type: UPDATE_POST,
    payload: post,
    meta: id
  }
}

export function deletePost (id: Post_Id): DeletePostAction {
  return {
    type: DELETE_POST,
    meta: id
  }
}

export default { createPost, updatePost, deletePost }
