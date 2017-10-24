import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import * as actions from '../actions/invoice'
import InvoiceItem from './InvoiceItem'
import InvoiceAdder from './InvoiceAdder'
import NowTimeLine from './NowTimeLine'

class BudgetList extends Component {
  state = {
    currentValue: "",
    currentPrice: "",
  }

  itemSaver = (props) => {
    this.setState({ currentValue: props.target.value})
  }

  priceSaver = (props) => {
    this.setState({ currentPrice: props.target.value})
  }

  addInvoiceHandler = () => {
    this.props.addInvoice(
      this.state.currentValue,
      this.state.currentPrice,
    )

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
        <div>
          <InvoiceItemContainer>
            {valuesArray.map( ( p, i ) => (
              <InvoiceItem title={p.title} price={p.price} key={i}  />
            ))}
          </InvoiceItemContainer>

          <NowTimeLine totalPrice={totalPrice} />
        </div>

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

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`

const InvoiceItemContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px 0 20px;
  font-size: 20px;
`

const mapStateToProps = state => ({
  valuesArray: state,
})

const mapDispatchToProps = {
  addInvoice: actions.addInvoice,
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetList)


//e352aad544267901d3d9e512e375dc37c972041a3ea259e7d450a17727366a9b

// Secret 4ed4848f1d6c5ea0e690d292458e596cc5cb92f221d034ab89e6cec09536fac8 
