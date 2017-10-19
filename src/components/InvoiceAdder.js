import React from 'react'
import styled from 'styled-components'

const InviceAdder = ({
  onChangeTitle,
  titleValue,
  onChangePrice,
  priceValue,
  onAddClick
}) => (
    <Wrapper>
      <InvoiceTitleText
        type="text"
        onChange={onChangeTitle.bind(this)}
        value={titleValue}
        placeholder="Invoice name"
      />
      <InvoicePriceNumber
        type="number"
        size="4"
        onChange={onChangePrice.bind(this)}
        placeholder="Price"
        value={priceValue}
      />
      <ButtonAdder onClick={onAddClick}>+</ButtonAdder>
    </Wrapper>
)

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  border-top: 3px solid #2D9AFF;
  display: flex;
  align-items: center;
`

const InvoiceTitleText = styled.input`
  width: 50%;
  height: 40px;
  border: none;
  padding: 0 0 0 10px;
  border-right: 1px solid #eee;
  outline: none;
`

const InvoicePriceNumber = styled.input`
  width: 30%;
  height: 40px;
  border: none;
  padding: 0 0 0 10px;
  border-right: 1px solid #eee;
  outline: none;
`

const ButtonAdder = styled.button`
  width: 20%;
  height: 47px;
  border: none;
  background: #29B6F6;
  color: #fff;
  font-size: 35px;
`

export default InviceAdder
