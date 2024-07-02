export const cart = [{
  productId: '1',
  quantity:1,
},{
  productId:'2',
  quantity:1,
}]


export function AddtoCart(productId) {
    let matchingItem
    cart.forEach(function (cartitem) {
      if (productId === cartitem.productId) {
        matchingItem = cartitem
      }
    })
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1,
      })
    }
    console.log(cart);
  }
  
// let b = document.querySelector("span")
// console.dir(b)