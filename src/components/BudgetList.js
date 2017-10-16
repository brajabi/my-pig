import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add_invoice } from '../actions/invoice'
import InvoiceItem from './InvoiceItem'
import InvoiceAdder from './InvoiceAdder'

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
      <div>

        <div>Sum: {totalPrice}</div>

        <ul>
          {valuesArray.map( ( p, i ) => (
            <InvoiceItem title={p.title} price={p.price} key={i}  />
          ))}
        </ul>
        
        <InvoiceAdder
          onChangeTitle={this.itemSaver}
          titleValue={this.state.currentValue}
          onChangePrice={this.priceSaver}
          priceValue={this.state.currentPrice}
          onAddClick={this.addInvoiceHandler}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  valuesArray: state,
})

export default connect(mapStateToProps)(BudgetList)
