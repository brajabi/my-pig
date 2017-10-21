import React from 'react'
import styled from 'styled-components'

import BudgetList from './BudgetList'
import NavBar from './NavBar'
import '../styles/App.css'

const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  position: absolute;
  height: auto;
  bottom: 0;
  top: 0;
  box-shadow: 0 0 4px #eee;
`

const App = () => ( 
  <Wrapper className="mainWrapper">
    <NavBar />
    <BudgetList />
  </Wrapper>
)

export default App
