import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { add_invoice } from '../actions/invoice'
import InvoiceItem from './InvoiceItem'
import InvoiceAdder from './InvoiceAdder'
import NowTimeLine from './NowTimeLine'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const InvoiceItemContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px 0 20px;
  font-size: 20px;
`

class BudgetList extends Component {

  constructor() {
    super();
    this.state = {
      currentValue: "",
      currentPrice: 0,
    }
  }

  itemSaver = (props) => {
    this.setState({ currentValue: props.target.value})
  }

  priceSaver = (props) => {
    this.setState({ currentPrice: props.target.value})
  }

  addInvoiceHandler = () => {
    this.props.dispatch(add_invoice(
      this.state.currentValue,
      this.state.currentPrice,
    ))
    this.setState({ currentValue: "", currentPrice: 0 })
  }

  render() {
    const { valuesArray, dispatch } = this.props

    let totalPrice = 0;
    valuesArray.map(( p, i ) => {
      totalPrice += p.price;
    });

    return (
      <Wrapper>

        <InvoiceItemContainer>
          {valuesArray.map( ( p, i ) => (
            <InvoiceItem title={p.title} price={p.price} key={i}  />
          ))}
        </InvoiceItemContainer>

        <NowTimeLine totalPrice={totalPrice} />

        <InvoiceAdder
          onChangeTitle={this.itemSaver}
          titleValue={this.state.currentValue}
          onChangePrice={this.priceSaver}
          priceValue={this.state.currentPrice}
          onAddClick={this.addInvoiceHandler}
        />

      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  valuesArray: state,
})

export default connect(mapStateToProps)(BudgetList)
