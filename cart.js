export let cart = []


export  function AddtoCart(productId) {
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
        quantity: 1
      })
    }
  }
  
let b = document.querySelector("span")
console.dir(b)