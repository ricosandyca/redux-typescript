import { createStore, compose } from 'redux'

import reducers from './reducers'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: typeof compose
  }
}

export default createStore(
  reducers,
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
)
