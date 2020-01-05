import { combineReducers } from 'redux'

import post from './post'
import {
  RootStates
} from '../types/_root'

const rootReducers = combineReducers<RootStates>({ post })

export type RootState = ReturnType<typeof rootReducers>
export default rootReducers
