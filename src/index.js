import React from 'react'
import { render } from 'react-dom'
import BudgetList from './components/BudgetList'

const App = () => (
  <div>
    <BudgetList />
  </div>
)

render(<App />, document.getElementById('root'));
