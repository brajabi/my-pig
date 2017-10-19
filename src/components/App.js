import React from 'react'
import styled from 'styled-components'

import BudgetList from './BudgetList'
import NavBar from './NavBar'
import '../styles/App.css'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const App = () => ( 
  <Wrapper>
    <NavBar />
    <BudgetList />
  </Wrapper>
)

export default App
