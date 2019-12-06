import React from 'react'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import reducers from './lib/reducers'

const enhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
const store = createStore(reducers, {}, enhancers())

const RootContainerWithRedux = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
)

export default RootContainerWithRedux
