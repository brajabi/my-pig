import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add_invoice } from '../actions/invoice'
import InvoiceItem from './InvoiceItem'

class BudgetList extends Component {
  
  constructor() {
    super();
    this.state = {
      currentValue: "",
      currentPrice: 0
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

    console.log(totalPrice);
    return (
      <div>
        <div>Sum: {totalPrice}</div>
        <ul>
          {valuesArray.map( ( p, i ) => (
            <InvoiceItem title={p.title} price={p.price} key={i}  />
          ))}
        </ul>
        <div>
          <input
            type="text"
            onChange={this.itemSaver.bind(this)}
            value={this.state.currentValue}
            placeholder="item name"
          />
          <input
            type="text"
            onChange={this.priceSaver.bind(this)}
            value={this.state.currentPrice}
          />
          <button onClick={this.addInvoiceHandler}>add</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  valuesArray: state,
})

export default connect(mapStateToProps)(BudgetList)
