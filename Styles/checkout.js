import { cart } from "../cart.js";
import { products } from "../Data/inventry.js";

let cartHTML = ``

console.log(cart);
cart.forEach((cartItem)=> {
    // console.log(cartItem);
    const productID = cartItem.productId;
    let matchingItemn;

  products.forEach((product)=> {
    if(product.productId === productID) {
        matchingItemn = product
    }
    // console.log(matchingItem);
  })
// console.log(matchingItem);
cartHTML += `
  <div class="items">
        <img class="imges" src="${matchingItemn.image}" alt="">
        <h3>${matchingItemn.name}</h3>
        <p>${matchingItemn.price}</p>
        <h4>Remove</h4> <h4>Add</h4>
    </div>
    
    `
})

// console.log(cartHTML);

document.querySelector(".js-inventry").innerHTML = cartHTML