import {
  PostActionTypes,
  PostState
} from './post'

export type RootActions =
  PostActionTypes

export type RootStates = {
  post: PostState
}
