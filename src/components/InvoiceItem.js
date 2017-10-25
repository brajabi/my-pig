import React from 'react'
import styled from 'styled-components'

const ItemWrapper = styled.div`
  width: 100%;
  height: 50px;
  border-left: 3px solid #2D9AFF;
  padding-left: 10px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
`

const ItemContent = styled.div`
  flex: 0 1 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Bullet = styled.div`
  width: 10px;
  height: 10px;
  background: #2D9AFF;
  margin-left: -17px;
  border-radius: 50%;
`

const ItemTitle = styled.div`
  margin-left: 10px;
`

const PriceData = styled.div`
  flex: 0 0 auto;
`

const InvoiceItem = ({title, price}) => (
  <ItemWrapper>
    <ItemContent>
      <Bullet />
      <ItemTitle>{title}</ItemTitle>
    </ItemContent>
    <PriceData>$ {price}</PriceData>
  </ItemWrapper>
)

export default InvoiceItem
