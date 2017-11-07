export const addInvoiceRequest = (title, price) => {
  return {
    type: 'ADD_INVOICE_REQUEST',
    title: title,
    price: parseInt(price),
  }
}

export const addInvoice = (title, price) => {
  return {
    type: 'ADD_INVOICE',
    title: title,
    price: parseInt(price),
  }
}

export const addInvoiceList = (invoiceList) => {
  return {
    type: 'ADD_INVOICE_LIST',
    list: invoiceList,
  }
}

export const fetchInvoices = () => {
  return {
    type: 'FETCH_INVOICE_REQUEST'
  }
}
