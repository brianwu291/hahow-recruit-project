import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './lib/reducers'
import ThemeContext from './ThemeContext'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(reduxThunk)))

function createSiteIconLink(iconUrl) {
  const head = document.getElementsByTagName('head')[0]
  const link = document.createElement('link')
  link.rel = 'Shortcut Icon'
  link.type = 'image/x-icon'
  link.href = iconUrl
  head.appendChild(link)
}

const RootContainer = (RootComponent) => () => {
  const [theme, setTheme] = useState('light')
  const handleThemeChange = () => (theme === 'light' ? setTheme('dark') : setTheme('light'))
  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme, handleThemeChange }}>
        <RootComponent
          createSiteIconLink={createSiteIconLink}
        />
      </ThemeContext.Provider>
    </Provider>
  )
}

export default RootContainer
