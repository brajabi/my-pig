import React from 'react'

const InvoiceItem = ({title, price}) => (
  <li>
    <span>{title}</span>
    <span> ($ {price})</span>
  </li>
)

export default InvoiceItem
