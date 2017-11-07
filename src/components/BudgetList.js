import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import * as actions from '../actions/invoice'
import * as selectors from '../selectors/invoice'
import InvoiceItem from './InvoiceItem'
import InvoiceAdder from './InvoiceAdder'
import NowTimeLine from './NowTimeLine'

class BudgetList extends Component {
  state = {
    currentValue: "",
    currentPrice: "",
    loading: false,
  }
  componentDidMount() {
    this.props.fetchInvoices()
  }

  itemSaver = (props) => {
    this.setState({ currentValue: props.target.value})
  }

  priceSaver = (props) => {
    this.setState({ currentPrice: props.target.value})
  }

  addInvoiceHandler = () => {
    this.props.addInvoiceRequest(
      this.state.currentValue,
      this.state.currentPrice,
    )

    this.setState({ currentValue: "", currentPrice: 0 })
  }



  render() {
    const { valuesArray, dispatch, budget } = this.props

    return (
      <Wrapper>
        <div>
          <InvoiceItemContainer>
            {valuesArray.map( ( p, i ) => (
              <InvoiceItem title={p.title} price={p.price} key={i}  />
            ))}
          </InvoiceItemContainer>

          {
            this.state.loading && 
            <div>LOADING...</div>
          }

          <NowTimeLine totalPrice={budget} />
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
  budget: selectors.getBudget(state),
  valuesArray: state
})

const mapDispatchToProps = {
  addInvoiceRequest: actions.addInvoiceRequest,
  fetchInvoices: actions.fetchInvoices,
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetList)
