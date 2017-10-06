import React, { Component } from 'react'
import InvoiceItem from './InvoiceItem'

class BudgetList extends Component {
  constructor() {
    super();
    this.state = {
      invoiceList: [
        {title: 'Coffee', price: 10},
        {title: 'Tea', price: 15},
      ]
    }
  }

  render() {
    return (
      <div>
        {this.state.invoiceList.map( ( p, i ) => (
          <InvoiceItem title={p.title} price={p.price} key={i}  />
        ))}
      </div>
    )
  }
}

export default BudgetList
