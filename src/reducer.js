const InitializeValue = [
  {title: 'Coffee', price: 10},
  {title: 'Tea', price: 15},
];

function root(state = InitializeValue, action) {
  switch (action.type) {
    case 'ADD_INVOICE':
      return [...state, {title: action.title, price: action.price}]

    case 'REMOVE_INVOICE':
      return state

    default:
       return state
  }
}

export default root
