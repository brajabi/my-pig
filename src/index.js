import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import { root } from './sagas/invoice'
import App from './components/App'
import rootReducer from './reducer'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(root)

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)
