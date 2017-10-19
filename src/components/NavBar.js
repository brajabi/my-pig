import React from 'react'
import styled from 'styled-components'

import { MenuIcon, MyNotebook } from './icons'

const NavBar = () => (
  <Wrapper>

    <MenuContainer>
      <MenuIcon />
    </MenuContainer>

    <Title>My Pig list</Title>

    <NotebookContainer>
      <MyNotebook />
    </NotebookContainer>

  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  flex: 1 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
  background: #eee;
`

const Title = styled.h2`
  color: #999;
  font-weight: 400;
`

const MenuContainer = styled.div`
  width: 24px;
  height: 24px;

  svg {
    width: 24px;
    height: 24px;
  }
`

const NotebookContainer = styled.div`
  width: 30px;
  height: 30px;

  svg {
    width: 30px;
    height: 30px;
  }
`
export default NavBar;
