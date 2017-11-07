const InitializeValue = [
];

function root(state = InitializeValue, action) {
  switch (action.type) {
    case 'ADD_INVOICE':
      return [...state, {title: action.title, price: action.price}]

    case 'ADD_INVOICE_LIST':
      return [...state, ...action.list]

    case 'REMOVE_INVOICE':
      return state

    default:
       return state
  }
}

export default root
