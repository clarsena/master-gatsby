import calculatePizzaPrice from './calculatePizzaPrice';

export default function calculateOrderTotal(order, pizzas) {
  // Loop over each item in the order
  // Add that total to the running total
  return order.reduce((runningTotal, singleOrder) => {
    // Calc the total for that pizza
    const pizza = pizzas.find((za) => za.id === singleOrder.id);
    return runningTotal + calculatePizzaPrice(pizza.price, singleOrder.size);
  }, 0);
}
