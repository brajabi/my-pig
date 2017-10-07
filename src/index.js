import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import calculator from './store'
import BudgetList from './components/BudgetList'

const store = createStore(calculator)

const App = () => (
  <Provider store={store}>
    <BudgetList />
  </Provider>
)

render(<App />, document.getElementById('root'));
