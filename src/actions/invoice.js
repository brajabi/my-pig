export const addInvoice = (title, price) => {
  return {
    type: 'ADD_INVOICE',
    title: title,
    price: parseInt(price),
  }
}
