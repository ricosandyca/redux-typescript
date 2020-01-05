import { combineReducers } from 'redux'

import post from './post'

const rootReducers = combineReducers({ post })

export type RootState = ReturnType<typeof rootReducers>
export default rootReducers
