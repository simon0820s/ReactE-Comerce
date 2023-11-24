/**
 * This function calculate total price of a new order
 * @param {Array} products cartProduct: Objects Array 
 * @returns {number} Total price 
 */

export const totalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price, 0)
}