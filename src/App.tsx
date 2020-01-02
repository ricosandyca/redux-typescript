import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {
  Provider
} from 'react-redux'

import store from './store'
import {
  home as HomePage,
  post as PostPage,
  editPost as EditPostPage
} from './pages'
import {
  notfound as NotFoundPage
} from './pages/exceptions'

import 'bulma/css/bulma.css'
import './assets/sass/styles.sass'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/posts' component={PostPage}/>
          <Route path='/posts/edit/:id' component={EditPostPage} />
          <Route component={NotFoundPage}/>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
