export const cart = []

export function addToCart(productId, quantity) {
  let mathingItem;

  cart.forEach((item) => {
    if (productId === item.productId) {
      mathingItem = item;
    }
  })

  if (mathingItem) {
    mathingItem.quantity += quantity;
  } else {
    cart.push({
        productId,
        quantity
    });
  }
}

export function updateCart() {
  let cartQuantity = 0;
  
  cart.forEach(value => cartQuantity += value.quantity);

  document.querySelector('.cart-quantity').innerHTML = cartQuantity;
}

export function getQuantity(productId) {
  const selectorElem = document.querySelector(`.js-quantity-selector-${productId}`);

  return Number(selectorElem.value);
}