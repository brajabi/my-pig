function calculator(state=[], action) {
  switch (action) {
    case 'ADD_INVOICE':
        return [...state, {title: action.title, price: action.price}]
      break;

    case 'REMOVE_INVOICE':
        return state;
      break;

    default:
       return state;
      break;
  }
}

export default calculator
