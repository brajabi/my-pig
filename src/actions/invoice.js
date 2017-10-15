export const add_invoice = ( title, price ) => {
  return {
    type: 'ADD_INVOICE',
    title: title,
    price: parseInt(price),
  }
}
