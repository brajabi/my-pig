import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px 0;
`

const NowText = styled.div`
  width: 43px;
  height: 25px;
  flex: 0 1 auto;
  line-height: 30px;
  font-size: 12px;
`

const Content = styled.div`
  flex: 0 1 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #DF432C;
  height: 28px;
`

const DashedLine = styled.div`
  border-top: 1px dashed #f00;
  flex: 0 1 100%;
`

const TotalPrice = styled.div`
  flex: 0 0 auto;
  padding: 0 10px;
  text-align: center;
  font-size: 24px;
  margin-top: 11px;
`

const BudgetText = styled.div`
  font-size: 10px;
`

const NowTimeLine = ({ totalPrice }) => (
  <Wrapper>
    <NowText>
      Now
    </NowText>
    <Content>
      <DashedLine />
      <TotalPrice>
        <span>$ { totalPrice }</span>
        <BudgetText>budget</BudgetText>
      </TotalPrice>
      <DashedLine />
    </Content>
  </Wrapper>
)

export default NowTimeLine
