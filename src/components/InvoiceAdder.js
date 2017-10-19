import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  border: 3px solid #2D9AFF;
  display: flex;
  align-items: center;
`

const InviceAdder = ({
  onChangeTitle,
  titleValue,
  onChangePrice,
  priceValue,
  onAddClick
}) => (
    <Wrapper>
      <input
        type="text"
        onChange={onChangeTitle.bind(this)}
        value={titleValue}
        placeholder="item name"
      />
      <input
        type="text"
        onChange={onChangePrice.bind(this)}
        value={priceValue}
      />
      <button onClick={onAddClick}>add</button>
    </Wrapper>
)

export default InviceAdder
