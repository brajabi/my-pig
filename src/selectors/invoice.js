
export function getBudget(state) {
  let totalPrice = 0;
  state.map(( p, i ) => {
    totalPrice += +p.price;
  });
  return totalPrice
}
