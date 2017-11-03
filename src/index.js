import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import { watchAddInvoice } from './sagas/invoice'
import App from './components/App'
import rootReducer from './reducer'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)
